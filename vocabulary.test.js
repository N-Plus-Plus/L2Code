const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const read = (file) => fs.readFileSync(path.join(__dirname, file), "utf8");
const appSource = read("app.js");
const indexSource = read("index.html");
const htmlMarkdown = read("html-vocabulary.md");
const cssMarkdown = read("css-vocabulary.md");
const confusedMarkdown = read("confused-web-vocabulary.md");

function sourceBetween(source, startMarker, endMarker) {
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker, start);
  assert.notEqual(start, -1, `Missing source marker: ${startMarker}`);
  assert.notEqual(end, -1, `Missing source marker: ${endMarker}`);
  return source.slice(start, end);
}

function createDataParser() {
  const context = {};
  const source = [
    sourceBetween(appSource, "function parseGlossary", "function selectEntry"),
    sourceBetween(appSource, "function stripMarkdown", "function getGridGap")
  ].join("\n");
  vm.runInNewContext(source, context);
  return context;
}

const parser = createDataParser();
const htmlEntries = parser.parseGlossary(htmlMarkdown, { source: "html" });
const cssEntries = parser.parseGlossary(cssMarkdown, { source: "css" });
const confusedEntries = parser.parseGlossary(confusedMarkdown, { source: "confused" });

test("category filters retain the requested order and use Lucide HTML/CSS icons", () => {
  const categoryOrder = Array.from(indexSource.matchAll(/data-category="([^"]+)"/g), (match) => match[1]);
  assert.deepEqual(categoryOrder, ["general", "confused", "javascript", "html", "css"]);
  assert.match(indexSource, /data-category="html"[^]*data-lucide="code-xml"/);
  assert.match(indexSource, /data-category="css"[^]*data-lucide="hash"/);
  assert.match(appSource, /function createCategoryIconMarkup/);
  assert.doesNotMatch(indexSource, /data-category="html"[^]*<svg/);
});

test("entry title and count stack beside a single-row category filter", () => {
  const styles = read("style.css");
  const headingStyles = sourceBetween(styles, ".panel-heading {", ".panel-heading__title {");
  const titleStyles = sourceBetween(styles, ".panel-heading__title {", ".panel-heading h2 {");
  const filterStyles = sourceBetween(styles, ".group-filter {", ".results-scroll {");
  assert.match(headingStyles, /flex-wrap:\s*nowrap/);
  assert.match(titleStyles, /display:\s*grid/);
  assert.match(filterStyles, /flex-wrap:\s*nowrap/);
});

test("all supplied HTML and CSS articles parse with teaching metadata", () => {
  assert.equal(htmlEntries.length, 73);
  assert.equal(cssEntries.length, 99);
  assert.equal(confusedEntries.length, 20);
  assert.equal(htmlEntries.every((entry) => entry.categoryId === "html"), true);
  assert.equal(cssEntries.every((entry) => entry.categoryId === "css"), true);
  assert.equal(htmlEntries.every((entry) => entry.type && entry.introducedGrade === null), true);
  assert.equal(cssEntries.every((entry) => entry.type && entry.introducedGrade === null), true);
  assert.doesNotMatch(htmlMarkdown, /\*\*Introduced grade:\*\*/);
  assert.doesNotMatch(cssMarkdown, /\*\*Introduced grade:\*\*/);
});

test("search terms include titles, aliases, plain tag names and symbol syntax", () => {
  const matchingTitles = (entries, query) => entries
    .filter((entry) => entry.searchTerms.some((term) => term.startsWith(query)))
    .map((entry) => entry.term);

  assert.ok(matchingTitles(htmlEntries, "h1").includes("Heading elements"));
  assert.ok(matchingTitles(htmlEntries, "doctype").includes("<!DOCTYPE html>"));
  assert.ok(matchingTitles(cssEntries, "grid-template-columns").includes("Grid template"));
  assert.ok(matchingTitles(cssEntries, "css variable").includes("Custom property"));
  for (const symbol of ["#", ":", "@", "*"]) {
    assert.ok(matchingTitles(cssEntries, symbol).length > 0, `Expected a safe result for ${symbol}`);
  }
  assert.ok(matchingTitles(htmlEntries, "<").length > 0);
});

test("category filtering is exclusive and restoring categories restores entries", () => {
  const entries = [...htmlEntries.slice(0, 2), ...cssEntries.slice(0, 2)];
  const context = {
    state: {
      entries,
      filtered: [],
      selectedSlug: "",
      breadcrumbs: [],
      query: "",
      activeCategories: { general: false, confused: false, javascript: false, html: true, css: false }
    },
    render() {}
  };
  vm.runInNewContext(sourceBetween(appSource, "function applyFilter", "function render()"), context);
  context.applyFilter();
  assert.equal(context.state.filtered.every((entry) => entry.categoryId === "html"), true);
  context.state.activeCategories.html = false;
  context.state.activeCategories.css = true;
  context.applyFilter();
  assert.equal(context.state.filtered.every((entry) => entry.categoryId === "css"), true);
  Object.keys(context.state.activeCategories).forEach((key) => { context.state.activeCategories[key] = true; });
  context.applyFilter();
  assert.equal(context.state.filtered.length, entries.length);
});

test("HTML and CSS examples remain escaped code, never live markup or styles", () => {
  assert.match(appSource, /<pre><code>\$\{highlightCode\(code\)\}<\/code><\/pre>/);
  assert.match(appSource, /if \(\["A", "CODE", "PRE", "SCRIPT", "STYLE"\]\.includes\(child\.tagName\)\) continue/);
  assert.match(htmlMarkdown, /```html\s+<h1>Magic 8-Ball<\/h1>/);
  assert.match(cssMarkdown, /```css\s+body \{/);
});

test("article Type metadata is rendered without automatic vocabulary links", () => {
  assert.equal(appSource.includes('if (/^\\*\\*Type:\\*\\*/i.test(block))'), true);
  assert.match(appSource, /class="article-metadata"/);
  const typeBranch = sourceBetween(appSource, "if (/^\\*\\*Type:", "if (block.startsWith(\"* \"))");
  assert.doesNotMatch(typeBranch, /linkVocabulary:\s*true/);
});

test("context-aware links prefer the current category and explicit relations win", () => {
  const context = {
    state: {
      entries: [
        { id: "general-property", slug: "general-property", term: "Property", source: "general", aliases: [] },
        { id: "css-property", slug: "css-property", term: "CSS property", source: "css", aliases: ["property"] },
        { id: "javascript-class", slug: "javascript-class", term: "class", source: "javascript", aliases: [] },
        { id: "html-class", slug: "html-class", term: "class", source: "html", aliases: ["class attribute"] }
      ]
    }
  };
  const source = [
    sourceBetween(appSource, "function resolveVocabularyLinkEntry", "function renderEntryTerm"),
    sourceBetween(appSource, "function normaliseSearchTerm", "function getGridGap")
  ].join("\n");
  vm.runInNewContext(source, context);

  const cssArticle = { slug: "css-article", source: "css", term: "Example", aliases: [], relatedTerms: [] };
  assert.equal(context.resolveVocabularyLinkEntry("property", cssArticle).slug, "css-property");
  cssArticle.relatedTerms = ["general-property"];
  assert.equal(context.resolveVocabularyLinkEntry("property", cssArticle).slug, "general-property");

  const confusedWebArticle = { slug: "confused-id-class", source: "confused", term: "id vs class", aliases: [], relatedTerms: [] };
  assert.equal(context.resolveVocabularyLinkEntry("class", confusedWebArticle).slug, "html-class");
});

test("result count and breadcrumbs remain data-driven across every category", () => {
  assert.match(appSource, /state\.filtered\.length/);
  assert.doesNotMatch(indexSource, />[1-9]\d* results?</);
  assert.match(appSource, /const entry = state\.entries\.find\(\(item\) => item\.slug === slug\)/);
  assert.match(appSource, /addBreadcrumbEntry\(state\.selectedSlug\)/);
  assert.match(appSource, /addBreadcrumbEntry\(entry\.slug\)/);
});
