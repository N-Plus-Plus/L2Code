# Style: L2Code

Owns reusable visual conventions. [USER_EXPERIENCE](USER_EXPERIENCE.md) owns workflows; [TESTING](docs/TESTING.md) owns verification timing.

## Visual foundation

Preserve [style.css](style.css), including its supplied dark monochrome foundation and app-specific rules at the end. Do not replace it with the optional v3 archive stylesheet. Reuse its palette, surface, spacing, radius and control tokens; avoid duplicate ad hoc equivalents. Do not introduce blue or purple base surfaces. Use colour for intentional category and content accents.

Typography uses Lexend Deca with system fallbacks, loaded by [index.html](index.html). Use Lucide for functional controls and result affordances. Preserve the existing flat surfaces, readable prose/code, panel layout and responsive rules. No framework or design-system expansion is needed.

## Categories and hierarchy

The prior guide establishes book-marked/lavender for general terms, notebook-tabs/mandarin for comparisons and braces/grass for JavaScript, with reference sections using emerald. Current CSS uses carrot for comparison rows and emerald for all JavaScript rows; definition bodies retain grass/reference-emerald variants. Preserve the established category meaning and report these source/guide differences rather than silently recolouring during documentation adoption. HTML uses code-xml and CSS uses hash, with their existing category tokens. Preserve category order: general, confused, JavaScript, HTML, CSS.

Keep the Entries heading/count and category controls in the results panel's heading, with the result list scrolling beneath. Reuse existing selected, hover and focus styles. Maintain clear hierarchy between navigation, grade/entry selection and reading content.

## Accessibility and copy

Icon-only controls need accessible names and state beyond colour. Preserve semantic buttons, keyboard reachability, focus visibility, aria-pressed filter/navigation state and existing responsive/reduced-motion behaviour. The search input has a visually hidden associated label; do not remove it. Keep educational copy plain and preserve exact code syntax, proper names and authored vocabulary.

## Task-scaled review

Inspect affected control states for copy/icon/colour changes. For layout or flow changes, inspect the affected journey, adjacent composition and implicated narrow/wide layouts using existing breakpoints. Source checks cannot prove rendered quality; report rendering limits honestly. Do not install browser infrastructure or run a broad screenshot campaign for a small edit.

Update this authority only when an enduring visual convention changes.
