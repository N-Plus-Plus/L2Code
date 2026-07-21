const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appSource = fs.readFileSync(path.join(__dirname, "app.js"), "utf8");
const grade1Source = fs.readFileSync(path.join(__dirname, "grade-1-curriculum.js"), "utf8");
const grade2Source = fs.readFileSync(path.join(__dirname, "grade-2-curriculum.js"), "utf8");

function loadGrade2Curriculum() {
  const context = {};
  vm.runInNewContext(`${grade2Source}\n;globalThis.curriculum = grade2Curriculum;`, context);
  return context.curriculum;
}

function sourceBetween(source, startMarker, endMarker) {
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker, start);
  assert.notEqual(start, -1, `Missing source marker: ${startMarker}`);
  assert.notEqual(end, -1, `Missing source marker: ${endMarker}`);
  return source.slice(start, end);
}

function createCurriculumRenderer() {
  const context = {
    state: { expandedSectionIds: new Set() }
  };
  const rendererSource = [
    sourceBetween(appSource, "function renderLearningSection", "function renderLoadFailure"),
    sourceBetween(appSource, "function escapeHtml", "function escapeRegExp")
  ].join("\n");
  vm.runInNewContext(rendererSource, context);
  return context;
}

const expectedSectionTitles = [
  "You will learn",
  "Grade 2 overview",
  "From actions to decisions",
  "Comparisons",
  "Booleans and truth",
  "Conditions",
  "Multiple branches",
  "Combining conditions",
  "State",
  "Objects and properties",
  "Project 1: Number Guessing Game",
  "Building the Number Guessing Game",
  "Guessing Game logic",
  "Guessing Game score and reset",
  "Guessing Game testing and extensions",
  "Project 2: Eligibility Checker",
  "Defining eligibility data",
  "Evaluating requirements",
  "Displaying eligibility results",
  "Eligibility Checker testing and extensions",
  "Comparing the two projects",
  "Grade 2 takeaways",
  "Preparing for Grade 3",
  "Quiz Time!"
];

test("Grade 2 has the required metadata and ordered sections", () => {
  const curriculum = loadGrade2Curriculum();
  assert.equal(curriculum.id, "grade-2");
  assert.equal(curriculum.grade, 2);
  assert.equal(curriculum.title, "Grade 2");
  assert.equal(curriculum.subtitle, "Decisions and Logic");
  assert.equal(curriculum.allowMultipleSections, true);
  assert.deepEqual(
    Array.from(curriculum.sections, (section) => section.title),
    expectedSectionTitles
  );
});

test("Grade 2 uses only shared content block types and contains both projects", () => {
  const curriculum = loadGrade2Curriculum();
  const supportedTypes = new Set(["heading", "paragraph", "list", "quote", "callout", "flow", "code"]);
  const blocks = curriculum.sections.flatMap((section) => section.blocks);
  assert.equal(blocks.every((block) => supportedTypes.has(block.type)), true);

  const serialised = JSON.stringify(curriculum);
  assert.match(serialised, /Number Guessing Game/);
  assert.match(serialised, /Eligibility Checker/);
  assert.match(serialised, /function resetGame/);
  assert.match(serialised, /function isEligibleForPaladin/);
  assert.ok(grade2Source.length <= grade1Source.length, "Grade 2 should not exceed Grade 1's curriculum scope");
});

test("sections start collapsed and more than one can render expanded", () => {
  const curriculum = loadGrade2Curriculum();
  const renderer = createCurriculumRenderer();
  const firstSection = curriculum.sections[0];
  const secondSection = curriculum.sections[1];

  const collapsed = renderer.renderLearningSection(firstSection);
  assert.match(collapsed, /aria-expanded="false"/);
  assert.match(collapsed, /learning-section__content[^>]* hidden/);

  renderer.state.expandedSectionIds.add(firstSection.id);
  renderer.state.expandedSectionIds.add(secondSection.id);
  assert.match(renderer.renderLearningSection(firstSection), /aria-expanded="true"/);
  assert.match(renderer.renderLearningSection(secondSection), /aria-expanded="true"/);
});

test("curriculum code blocks escape HTML examples", () => {
  const renderer = createCurriculumRenderer();
  const rendered = renderer.renderCurriculumBlocks([
    { type: "code", language: "html", code: "<script>alert('no')</script>" }
  ]);
  assert.match(rendered, /&lt;script&gt;alert\(&#39;no&#39;\)&lt;\/script&gt;/);
  assert.doesNotMatch(rendered, /<script>/);
});

test("Grade 2 reuses shared behaviour and preserves the generated icon path", () => {
  assert.doesNotMatch(appSource, /selectedGradeId\s*===\s*["']grade-2["']/);
  assert.match(appSource, /selectedGradeAllowsMultipleSections\(\)/);
  assert.match(appSource, /d: "M12 2C17\.5 6\.8 17\.5 17\.2 12 22C6\.5 17\.2 6\.5 6\.8 12 2Z"/);
  assert.match(appSource, /Array\.from\(\{ length: 7 \}[^]*gradeNumber = index \+ 3/);
});
