# L2Code Vocabulary Reference

Static GitHub Pages-ready glossary app for a general programming vocabulary reference.

This project is a Git repository and may be treated as a normal Git worktree for inspection and version-control operations.

`AGENTS.md` is the root entry guide for this project.

## Shape
- No framework, build step, Vite, package manager, or backend.
- `index.html` is the app shell and loads Lucide from CDN.
- `style.css` starts from the supplied fresh-project dark UI stylesheet and includes local app-specific rules at the end.
- `data.md` is the source vocabulary payload in Markdown.
- `javascript.md` is the source JavaScript-specific vocabulary payload in Markdown.
- `data.js` is generated from `data.md` and `javascript.md` so direct file opening works without local server fetch restrictions.
- `app.js` reads `data.js` first, falls back to fetching `data.md` and `javascript.md`, parses `##` term sections, filters by term prefix, and renders clickable result/detail views.
- `grade-1-curriculum.js` and `grade-2-curriculum.js` contain the structured Learning Modules curricula; `app.js` safely renders their headings, lists, quotations, callouts, flows, and labelled code blocks.
- `curriculum.test.js` uses Node's built-in test runner for curriculum ordering, shared accordion behaviour, and safe code rendering checks.
- JavaScript entries append after the general glossary, use unique source-prefixed internal IDs so duplicate visible names are allowed, and render with the `braces` icon in grass green.
- JavaScript entries from `Common JavaScript Operators` onward remain in the syntax filter group and still use `braces`, but render mint/emerald and search from any word in a multi-word title.
- Entries under `Commonly Confused JavaScript Terms` stay at the end of the JavaScript sequence, render as similar/comparison rows, and are included when either the syntax or similar filter is enabled.
- Entries under `Commonly Confused Terms` are bundled comparison records: titles use ` != ` separators, rows use the `notebook-tabs` icon in mandarin/orange, and search matches from the start of each separated term segment.
- No term is selected by default; the detail pane shows a static "How to Use This Reference" intro until the user chooses a result.
- The Terms heading is sticky inside the scrollable results pane. Its icon-only group filters default on: general terms use `book-marked`/lavender, similar terms use `notebook-tabs`/mandarin, and JavaScript syntax terms use `braces`/grass.

## Constraints
- Keep it static: plain HTML, CSS, and browser JavaScript only.
- Use Lucide icons for functional controls and result affordances.
- Preserve `data.md` as the source of truth unless the user asks for a different data format.
- Preserve `javascript.md` as the JavaScript vocabulary source of truth.
- Regenerate `data.js` after changing `data.md` or `javascript.md`.
- Prefer small, direct changes; this is intentionally a simple reference app.

Future agents: update this document at the end of any pass that makes the content of `AGENTS.md` materially incorrect or incomplete, but keep it brief.
