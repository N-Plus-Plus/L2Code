# Deployment: L2Code

## Release boundary

The local repository's origin identifies N-Plus-Plus/L2Code on GitHub; the inspected branch is main. The application is static and GitHub Pages-ready. No deployment script, workflow, hosting settings or verified target URL is present. Current source/live/acceptance evidence belongs only in [README](../README.md#current-state).

Commit, push, publication, provider settings and destructive recovery require explicit task authorisation. Do not infer publication approval from development or documentation adoption. A push may trigger hosting if provider settings enable it; verify that relationship before an authorised push intended to remain source-only.

## Code-only publication

1. Inspect the exact worktree/diff and preserve unrelated changes. Stage only authorised files if a commit is requested; use isolation rather than resetting user work.
2. Run or reuse the single release check from [TESTING](TESTING.md#release-check). Verify payload/source consistency if vocabulary changed.
3. Confirm the actual provider, repository branch/artifact, target and publication method. No deploy command is currently configured; do not invent one or add hosting automation merely to standardise docs.
4. With explicit authorisation, publish the reviewed static runtime assets. These include index.html, style.css, fav.png, data.js, app.js, both curriculum scripts and the five vocabulary sources for fetch fallback. Exclude private files, exports, backups and local evidence.
5. Perform one brief non-destructive smoke of the affected hosted journey. Report actual URL/version and outcome; device/human acceptance stays distinct.

No schema, database migrations, secrets, Cron or server bindings exist. If future work introduces data/security risks, agree narrower stronger safeguards and separate live-change authorisation then, rather than applying a migration checklist to today's static edits.

## Timeout and recovery

No deployment-operation timeout is configured. A failed/timed-out local gate prevents release. A timed-out remote publication may have succeeded: stop, perform a narrow read-only provider/version check and resolve uncertainty before retrying. Terminating a local process is not proof of rollback.

Before a risky replacement, retain one appropriate recoverable copy of the affected source/assets, including uncommitted work, outside public hosting. Reverting or restoring a published version requires separate authorisation and a verified target. Preserve newer source changes; never reset the user's worktree to recover a release.

## User review

Resolve material product ambiguity before implementation. Show the first usable substantial journey before broad polish; trivial edits need no extra gate. Request publication approval only after the result is concrete and reviewable. After an authorised release, report smoke evidence and outstanding manual checks without claiming untested acceptance.
