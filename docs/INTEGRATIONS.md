# Integrations: L2Code

## Dependencies

| Dependency | Purpose / owner | Credentials | Local or outage behaviour |
| --- | --- | --- | --- |
| unpkg Lucide UMD 1.79.0 | Functional icons; index.html and app.js refreshIcons | None | Icon refresh guards missing window.lucide; no bundled substitute |
| Google Fonts / fonts.gstatic.com | Lexend Deca; index.html | None | style.css supplies system font fallbacks |
| Same-origin Markdown files | Vocabulary fallback; app.js fetchMarkdown | None | Embedded data.js normally avoids fetching; non-OK response fails initialisation |
| Static hosting | Public file delivery | Provider administration only, outside app | Direct index.html opening; hosted settings unconfirmed |

## Trust, privacy and failure boundaries

CDN scripts run in the browser page; the Lucide URL is currently unpinned. Preserve that fact without quietly upgrading or pinning dependencies during unrelated work. Browser requests expose ordinary network metadata to providers. No private tokens or account data are required by the application.

Markdown fallback uses cache: no-store and has no retry/backoff loop. No user-supplied provider URL or credential-bearing redirect flow exists. Network loss can remove font/icons when uncached even though embedded vocabulary remains local; do not advertise fully bundled offline operation.

## Verification and administration

Use synthetic/mock inputs for changed parsing or network failure contracts. Do not routinely probe CDNs or hosting on every task. Check real provider availability only when relevant to a reported issue or authorised release, and report unverified behaviour clearly.

No scheduled jobs, email, billing integration, queues, identity provider or time-zone/DST contract exists. Hosting configuration must be verified at an authorised publication boundary; no vendor setup or secret changes are implied by documentation adoption.
