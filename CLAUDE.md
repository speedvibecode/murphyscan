# MurphyScan Repository

Version: `0.3.0`

This repository packages MurphyScan as a reusable launch-readiness and scaling-readiness audit system.

## What is here

- `00-Start/`, `01-Layers/`, `02-Concepts/`, `04-MurphyScan/`
  The Murphy rule system and vault notes.
- `.agents/skills/murphyscan/`
  Codex-compatible skill and portable reference pack.
- `.claude/skills/murphyscan/`
  Claude Code-compatible skill path.
- `.opencode/commands/murphyscan.md`
  OpenCode slash command wrapper for `/murphyscan`.
- `docs/scheduled-ingest-pipeline.md`
  Unattended reel-ingest cadence and rules.

## How to use this repo

- Treat the vault as the source of truth for MurphyScan rules.
- Treat the skills and commands as wrappers that invoke those rules.
- Keep launch blockers separate from scaling or polish gaps.
- Require evidence from code, config, migrations, policies, CI, or runtime output before making claims.
- Use Basic MurphyScan for default `/murphyscan` requests.
- Use Advanced MurphyScan only when the user asks for advanced, exhaustive, super-deep, adversarial, token-burner, or every-last-nuance review.
- If `reel-transcripts/next-batch.txt` contains URLs and the task is reel ingest, read `docs/source-corpus-maintenance.md`, `docs/weekly-ingest-mode.md`, and `docs/scheduled-ingest-pipeline.md`.
- For scheduled reel ingest, accept auto-discovered URLs only when `npm run discover:instagram` verifies fresh post dates; ask for manual links when Instagram hides a date window or reports a likely full visible window.
- For transcription edge cases, follow `docs/transcription-fallbacks.md`: filtered low-signal reels are raw and manifest-only, while provider, quota, network, and script failures stay retryable.

## When editing

- Prefer updating existing concept notes over creating near-duplicate notes.
- Keep the `.agents` and `.claude` MurphyScan skill bodies aligned.
- Keep the OpenCode command thin; the reusable logic belongs in the skill and vault.
- Record meaningful MurphyScan behavior changes in `CHANGELOG.md`.
