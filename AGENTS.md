# L2Code agent guidance

L2Code is a static programming vocabulary reference and beginner learning app. Keep its plain HTML, CSS and browser JavaScript design; no framework, build step, package manager or backend.

## Authority and scope

Current user instructions and accepted decisions take priority, followed by this guide, the relevant specialist authority and verified source. Historical material is reference only. Source does not prove a live deployment or user acceptance.

Complete the requested outcome and necessary adjacent correctness work, then stop. No unsolicited audits, upgrades, speculative refactors, report files or roadmap additions. Preserve user changes. Do not commit, push, publish, change remote settings or alter production resources without explicit task authorisation.

Ask before materially ambiguous product decisions or destructive consequences. Resolve ordinary implementation choices independently; do not introduce approval gates for trivial reversible edits.

## Working discipline

Read this guide at task start; inspect branch, worktree and relevant changes. Work from local state and targeted file/symbol searches. Read only the owning passages below. Reuse accepted functionality and earlier findings unless current evidence, changed dependencies or a requested review warrants reopening them. Recover task state after compaction rather than restarting investigation.

Make one small coherent change at a time. Preserve unrelated behaviour, accessibility and visual conventions. For a substantial new journey, show the first usable slice for review before broad polish. Check only affected interactions and layouts.

## Checks and release boundaries

Test authoring and test execution are separate decisions. Extend focused existing coverage for meaningful parser/rendering logic or reproducible regressions when needed; do not add harnesses for labels, icons or CSS. After a coherent edit, execute the smallest useful check. Documentation changes need link/path/diff inspection, not application tests.

Use the existing Node test entry point for release verification as described in [TESTING](docs/TESTING.md#release-check). Do not run it reflexively after every prompt, commit or push. Reuse a successful result when relevant inputs are unchanged. Stop and report a failed or timed-out release gate before retrying or expanding it.

Keep secrets, private exports and personal data out of public assets, logs and Git. This app has no database or authentication; do not introduce production migration machinery for static edits. Any future data/security boundary needs its own reviewed safeguards and explicit live-change authorisation.

## Targeted routing

| Concern | Entry points | Owning authority / passage |
| --- | --- | --- |
| Local launch and confirmed state | index.html | [README](README.md#current-state), [local launch](README.md#start-locally) |
| Runtime and file ownership | index.html, app.js | [ARCHITECTURE](docs/ARCHITECTURE.md#ownership-and-flow) |
| Vocabulary sources and generated payload | five vocabulary Markdown files, data.js | [DATA](docs/DATA.md#sources-and-generation) |
| Search, categories and safe rendering | app.js, curricula | [CONTRACTS](docs/CONTRACTS.md#vocabulary-contracts) |
| Visual language | style.css, index.html | [STYLE](STYLE.md#visual-foundation) |
| Learning and reference journeys | app.js | [USER_EXPERIENCE](USER_EXPERIENCE.md#current-journeys) |
| CDN dependencies | index.html | [INTEGRATIONS](docs/INTEGRATIONS.md#dependencies) |
| Focused checks | curriculum.test.js, vocabulary.test.js | [TESTING](docs/TESTING.md#development-checks) |
| Publication and recovery | static runtime files | [DEPLOYMENT](docs/DEPLOYMENT.md#release-boundary) |
| Approved future outcomes | none | [ROADMAP](ROADMAP.md#approved-work) |

Update only the owning authority when enduring rules change. Keep this map accurate, but avoid per-pass documentation churn. README alone records material source/live/acceptance state. Inspect the focused diff and report actual checks, limitations and outcome concisely.
