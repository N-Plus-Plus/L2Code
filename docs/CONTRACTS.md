# Contracts: L2Code

## Vocabulary contracts

- Combine sources in order: general, JavaScript, HTML, CSS, confused-web. JavaScript entries append after general; comparison sections remain at the end of their JavaScript source sequence.
- Filter controls appear in order general, confused, JavaScript, HTML, CSS and default on. General Commonly Confused Terms are comparison records, not general-category rows.
- Normalise search and match prefixes of recognised search terms. Ordinary titles and aliases support prefixes; comparison titles split on !=, commas or and. JavaScript reference sections support prefixes from any title word. Recognised syntax-free forms also allow tag/symbol searches.
- The prior project guide requires JavaScript comparison entries to match either JavaScript or confused enabled filters. Current applyFilter checks only categoryId (JavaScript for these entries), so this accepted rule is not implemented in the inspected source. Preserve the requirement and report the discrepancy; documentation adoption does not authorise a behavioural fix. General comparison titles use != separators. Preserve source-prefixed IDs so identical visible titles from different sources stay distinct.
- JavaScript uses braces/grass; reference sections use emerald. General comparisons use notebook-tabs/mandarin. Visual ownership is in [STYLE](../STYLE.md#categories-and-hierarchy).
- No vocabulary selection at initial launch; show the static reference introduction. Keep result counts, selected entry and breadcrumbs driven by actual state. Related links prefer relevant category context; explicit relations take precedence.

## Learning and rendering

Learning Modules opens with Grade 0 selected. Keep grade ordering, shared accordion behaviour and structured Grade 1/2 block rendering. Grade 3–9 placeholders are not completed curricula.

Code examples, including HTML/CSS snippets, must remain escaped display text and must not become executable markup/styles. Preserve safe syntax highlighting and metadata handling. Type metadata must not acquire automatic vocabulary links. Source-authored Grade 0 HTML is trusted repository content; do not treat the renderer as a general safe HTML ingestion API.

## Access and failures

There is no authentication, role, tenant or write API. Readers see public static content. Never place secrets in client assets or invent UI-only permissions for future protected operations.

Missing embedded vocabulary triggers same-origin Markdown fetching; failed HTTP responses throw and reach load-failure rendering. No automatic retry contract exists. Search/filter/navigation are local state changes with no remote mutations.

## Evolution

Meaningful parser, state or rendering changes warrant focused coverage in the existing owning tests when not already protected. No new harness for copy or presentation alone. [DATA](DATA.md) owns source/payload consistency; [TESTING](TESTING.md) owns execution timing.
