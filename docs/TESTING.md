# Testing: L2Code

## Intent

Use proportionate assurance for this static reference app. Decide separately whether coverage needs authoring and which checks need execution. Reuse accepted unchanged behaviour and existing evidence.

## Development checks

- Curriculum ordering, shared accordion and safe code rendering: `node --test curriculum.test.js`.
- Vocabulary parsing, categories, aliases/syntax search, escaping, contextual links, counts and breadcrumbs: `node --test vocabulary.test.js`.
- Documentation-only changes: inspect links, referenced paths/commands, unresolved placeholders, privacy and focused diff. Do not run application tests solely for documentation adoption.
- Copy/icons/isolated CSS: no new tests by default; inspect affected UI. Existing presentation assertions are not a mandate to create more.

Both existing test files use Node's built-in runner and local files/VM contexts. No package install, production fixture, network call or account is required. Node 24 is available; no repository minimum is declared.

Add narrow regression coverage for meaningful parser/rendering/state changes or reproduced bugs when existing tests do not protect them. Extend the owning test first. Finish a coherent edit before checking; avoid repeated suite runs during editing.

## Release check

Use one existing entry point: `node --test curriculum.test.js vocabulary.test.js` for the static application source. No build output, schema flag, wrapper or fingerprint file exists. This command measures the local assertions above, not CDN availability, browser layout, hosted deployment or human acceptance.

No owner-selected aggregate hard timeout or enforceable release budget is currently configured. Keep this single check lightweight; do not assert CanBan's 60-second cap applies here. Before relying on a hard cap, agree its budget and safe process termination with the owner rather than adding tooling merely to fill a template.

Run once before an authorised release, or reuse a passing result for unchanged relevant application, test, vocabulary, curriculum and style inputs. A commit or push alone does not invalidate evidence. No duplicate fast/full/hosted test tiers.

## Failure and review

On a failed or expired release check, stop and report what ran, actual error and available elapsed measurement. Do not silently retry, increase a budget or deploy. Seek direction for the next meaningful check. Ordinary development debugging remains within the requested task.

For consequential visual/workflow changes, inspect only affected interactions, empty/failure states and relevant responsive layouts using available rendering or owner device review. Do not install automation for small edits. Distinguish source inspection, synthetic Node coverage, browser rendering, user acceptance and verified live behaviour. No permanent per-pass reports.
