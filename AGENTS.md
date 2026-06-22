# MurphyScan Repository

Version: `0.1.0`

This repository contains a reusable launch-readiness and scaling-readiness audit system for AI coding agents.

## Project structure

- `00-Start/` start maps and routing notes
- `01-Layers/` the 13 production layers
- `02-Concepts/` consolidated verification concepts
- `03-Source-Reels/` source routing into the cleaned reel corpus
- `04-MurphyScan/` skill brief and rule backlog
- `.agents/skills/murphyscan/` primary portable skill definition
- `.claude/skills/murphyscan/` Claude-compatible skill path
- `.opencode/commands/murphyscan.md` OpenCode slash command

## Working rules

- Use the vault as the rule source.
- Keep reports decision-oriented.
- Separate launch blockers from scale/readiness improvements.
- Prefer evidence over assumptions.
- Do not add note sprawl when a concept belongs in an existing note.
- Track meaningful MurphyScan behavior changes in `CHANGELOG.md`.
