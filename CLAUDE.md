# MurphyScan Repository

Version: `0.1.0`

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

## How to use this repo

- Treat the vault as the source of truth for MurphyScan rules.
- Treat the skills and commands as wrappers that invoke those rules.
- Keep launch blockers separate from scaling or polish gaps.
- Require evidence from code, config, migrations, policies, CI, or runtime output before making claims.

## When editing

- Prefer updating existing concept notes over creating near-duplicate notes.
- Keep the `.agents` and `.claude` MurphyScan skill bodies aligned.
- Keep the OpenCode command thin; the reusable logic belongs in the skill and vault.
- Record meaningful MurphyScan behavior changes in `CHANGELOG.md`.
