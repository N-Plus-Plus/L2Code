# L2Code

A static programming vocabulary reference and beginner learning app, usable by opening its HTML file directly or serving it from static hosting.

## Current state

- **Implemented in source:** Learning Modules with Grade 0, Grade 1 and Grade 2 content; Grade 3–9 placeholders. Programming Vocabulary includes general, comparison, JavaScript, HTML and CSS articles, category filters, prefix search, related-term navigation and breadcrumbs.
- **Last-confirmed live deployment:** Unconfirmed. The app is GitHub Pages-ready; no hosting workflow or settings are recorded in this worktree.
- **Accepted by user:** No acceptance evidence available in this adoption context; preserve existing functionality as the baseline.
- **Not yet verified:** Live hosting, current CDN availability, browser/device rendering and human acceptance were not exercised during documentation adoption. The incomplete embedded payload limits direct-file use; see DATA.

Update this section only on material changes using evidence already collected. Local changes, pushed source and a live release are distinct.

## Start locally

Open [index.html](index.html) in a modern browser. No installation, package manager, local server or credentials are required. Close the tab to stop. Interface state is in memory and resets on reload. The current payload embeds only general and JavaScript vocabulary. HTML, CSS and web comparisons fall back to fetching, which direct file opening may block; use static HTTP hosting for the complete current app. Icons and the web font require network access unless already cached.

Node.js is needed only for existing tests and the documented payload-generation command. Node 24.19.0 is available in the adoption environment; no minimum version or runtime pin is declared in the repository.

## Everyday development

| Action | Command or location |
| --- | --- |
| Run | Open index.html |
| Curriculum checks | `node --test curriculum.test.js` |
| Vocabulary checks | `node --test vocabulary.test.js` |
| Release test entry point | `node --test curriculum.test.js vocabulary.test.js`; scope and limits in [TESTING](docs/TESTING.md#release-check) |
| Generate embedded vocabulary | See [DATA](docs/DATA.md#sources-and-generation) |
| Build/package | None; static files |
| Publish / recover | [DEPLOYMENT](docs/DEPLOYMENT.md); explicit authorisation |

## Technical shape and privacy

The HTML shell loads the embedded vocabulary, two curriculum files and app.js. The browser owns parsing, navigation and rendering. There is no backend, database, login, analytics integration or durable user-state store in the inspected source. Everything shipped as a static asset is public; never embed secrets or private records.

## Documentation map

Start with [AGENTS](AGENTS.md) for targeted routing. [STYLE](STYLE.md) owns visual conventions; [USER_EXPERIENCE](USER_EXPERIENCE.md) owns journeys; [ROADMAP](ROADMAP.md) holds approved future outcomes. Specialist authorities: [ARCHITECTURE](docs/ARCHITECTURE.md), [DATA](docs/DATA.md), [CONTRACTS](docs/CONTRACTS.md), [INTEGRATIONS](docs/INTEGRATIONS.md), [TESTING](docs/TESTING.md), [DEPLOYMENT](docs/DEPLOYMENT.md).
