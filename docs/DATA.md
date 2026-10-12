# Data: L2Code

## Sources and generation

| Authoritative Markdown | Generated browser global |
| --- | --- |
| [data.md](../data.md) | GLOSSARY_MARKDOWN |
| [javascript.md](../javascript.md) | JAVASCRIPT_MARKDOWN |
| [html-vocabulary.md](../html-vocabulary.md) | HTML_VOCABULARY_MARKDOWN |
| [css-vocabulary.md](../css-vocabulary.md) | CSS_VOCABULARY_MARKDOWN |
| [confused-web-vocabulary.md](../confused-web-vocabulary.md) | CONFUSED_WEB_VOCABULARY_MARKDOWN |

[data.js](../data.js) is intended to embed all five sources so direct file opening works. The inspected payload currently contains only GLOSSARY_MARKDOWN and JAVASCRIPT_MARKDOWN; their text matches the Markdown after CRLF/LF normalisation. The other three globals are absent and require fetch fallback. This pre-existing inconsistency is reported, not repaired by documentation adoption. Regenerate the complete payload whenever any source changes. There is no checked-in generator script; the following Node command writes the five assignments from the authoritative files without changing their contents (run from repository root):

```sh
node -e 'const fs = require("node:fs"); const sources = [["GLOSSARY_MARKDOWN", "data.md"], ["JAVASCRIPT_MARKDOWN", "javascript.md"], ["HTML_VOCABULARY_MARKDOWN", "html-vocabulary.md"], ["CSS_VOCABULARY_MARKDOWN", "css-vocabulary.md"], ["CONFUSED_WEB_VOCABULARY_MARKDOWN", "confused-web-vocabulary.md"]]; fs.writeFileSync("data.js", sources.map(([name, file]) => "window." + name + " = " + JSON.stringify(fs.readFileSync(file, "utf8")) + ";").join("\n") + "\n");'
```

This is a documented generation recipe, not new tooling. Do not run generation during a documentation-only pass. Preserve source formats unless the owner requests otherwise.

## Models and invariants

Vocabulary uses # category headings and ## term sections, with Markdown bodies and optional Type, Introduced grade, Aliases and Related terms metadata. Internal IDs/slugs combine source and slugified title, allowing duplicate visible names across sources. Avoid collisions within one source. Search and category rules belong in [CONTRACTS](CONTRACTS.md#vocabulary-contracts).

Grade 0 is authored in app.js; Grades 1–2 in their structured curriculum files. Grade 3–9 entries are placeholders. Maintain section identity/order and supported block types when editing curricula.

## Persistence and privacy

No database, migration ledger, durable user progress, localStorage or server records exist in the inspected app. Interface state lasts for the page lifetime. Tests read repository content and use isolated VM contexts; they need no production data or credentials. All shipped content is public.

## Recovery

Version control provides source history; preserve uncommitted work separately before destructive edits. data.js is regenerable, but Markdown and curricula are authoritative and must not be recovered from a stale payload by default. Verify a recovered copy in an isolated directory before replacing work. Publication rollback needs separate authorisation under [DEPLOYMENT](DEPLOYMENT.md). Database backup/migration procedures are inapplicable unless a future approved feature adds persistence.
