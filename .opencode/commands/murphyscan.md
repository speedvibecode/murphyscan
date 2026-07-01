---
description: Run MurphyScan launch-readiness and scaling audit
---

Load and use the `murphyscan` skill from the project if it is available in `.agents/skills/murphyscan` or `.claude/skills/murphyscan`.

If this repo is the MurphyScan vault itself and `reel-transcripts/next-batch.txt` contains URLs, treat a request about a new reel batch as a corpus-update run:
- read `docs/source-corpus-maintenance.md`
- read `docs/weekly-ingest-mode.md`
- run the full intake, cleaning, synthesis, and archive flow
- otherwise fall back to the normal launch-readiness scan behavior

Run a standard MurphyScan audit against the current project unless I provide narrower scope in `$ARGUMENTS`.

Scan for:
- launch blockers
- missing launch controls
- scaling and resilience gaps
- highest-leverage next actions
- API contract or webhook risks when the project exposes them
- AI supply-chain trust risks when prompts, skills, or shared automation are part of the workflow

Use the Murphy vault in this repo as the rule source when present, especially:
- `00-Start/Layer Map.md`
- `00-Start/Agent Knowledge Map.md`
- `04-MurphyScan/Scan Rule Backlog.md`

Keep the report decision-oriented:
1. readiness verdict
2. blockers
3. missing launch controls
4. scaling and resilience gaps
5. highest-leverage next actions
6. evidence references

If `$ARGUMENTS` is non-empty, apply it as scope or focus for the scan.
