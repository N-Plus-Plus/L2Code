# Architecture: L2Code

## Runtime boundaries

Modern browser → index.html → data.js, grade-1-curriculum.js, grade-2-curriculum.js → app.js → in-memory state and DOM.

No framework, package manager, build step, backend, database or local process/port is required. Node is optional development tooling for tests and generation. See [README](../README.md#start-locally) for launch.

The static files are suitable for GitHub Pages or equivalent hosting. Actual provider settings and a live topology are unconfirmed; do not infer deployment from repository source. Local and hosted use the same public assets, with no server-side identity boundary.

## Ownership and flow

| Responsibility | Owner | Boundary |
| --- | --- | --- |
| Shell, controls, script order | [index.html](../index.html) | Deferred scripts load payload and curricula before app.js |
| Parsing, filtering, navigation, rendering | [app.js](../app.js) | In-memory state; Grade 0 curriculum also lives here |
| Grade 1 and Grade 2 structured content | [grade-1-curriculum.js](../grade-1-curriculum.js), [grade-2-curriculum.js](../grade-2-curriculum.js) | Consumed by shared curriculum rendering |
| Visual foundation and local rules | [style.css](../style.css) | Preserve tokens and app-specific section |
| Vocabulary sources and embedded payload | [DATA](DATA.md#sources-and-generation) | Markdown authoritative; data.js derived |
| Existing verification | [TESTING](TESTING.md#development-checks) | Node built-in runner, no dependencies |
| External icon/font assets | [INTEGRATIONS](INTEGRATIONS.md#dependencies) | Public browser requests |

Initialisation reads five embedded Markdown globals first and otherwise fetches their source files concurrently with no-store caching. It parses and combines entries in source order, filters/renders them, then binds events. A rejected source load enters the load-failure path. Direct file opening depends on a complete embedded payload to avoid fetch restrictions. The current data.js embeds only two of five sources; see [DATA](DATA.md#sources-and-generation) for the existing limitation.

Curriculum rendering supports headings, lists, quotations, callouts, flows and labelled code blocks. Educational snippets are rendered as escaped text, not executed. Grade 0 includes authored HTML inside app.js; it is trusted source, not an untrusted input interface.

## Constraints

Prefer small direct changes. Do not invent size guards, fixed ports, services or architectural audits. Keep current source ownership unless the requested change demonstrates a need to move it. Contracts live in [CONTRACTS](CONTRACTS.md); generation and recovery in [DATA](DATA.md).
