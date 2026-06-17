# MurphyScan

MurphyScan is a portable launch-readiness and scaling-readiness audit system for software projects.

It is designed to answer one practical question:

`What is still missing before this app is actually safe to launch, and what should be improved to keep it healthy as it scales?`

This project is inspired by the content of `@mattmurphyai`, whose Instagram posts on production-readiness, launch discipline, and scaling risks helped shape the MurphyScan rule system.

The repo contains:
- a Murphy rule vault organized into 13 production layers
- consolidated concept notes for repeated risks like auth, RLS, secrets, deploy safety, AI evals, caching, and scaling
- a Codex-compatible skill at `.agents/skills/murphyscan`
- a Claude Code-compatible skill path at `.claude/skills/murphyscan`
- an OpenCode slash command at `.opencode/commands/murphyscan.md`

## Repository layout

- `00-Start/`
  Entry points, layer map, concept index, and agent knowledge map
- `01-Layers/`
  The 13 production-readiness layers
- `02-Concepts/`
  Reusable verification concepts
- `04-MurphyScan/`
  Skill brief and scan-rule backlog
- `reel-transcripts/cleaned/`
  Source-backed reel summaries that fed the vault

## Usage

### Codex

Project-local skill path:
- `.agents/skills/murphyscan/SKILL.md`

Invoke:
- `/murphyscan`

### Claude Code

Claude Code reads project-local skills from:
- `.claude/skills/murphyscan/SKILL.md`

Project guidance also lives at:
- `CLAUDE.md`

Invoke:
- `/murphyscan`

Official Claude Code docs for project directories and skills:
- [Explore the .claude directory](https://code.claude.com/docs/en/claude-directory)

### OpenCode

OpenCode can load project-local skills from `.agents/skills/` or `.claude/skills/`, and custom commands from `.opencode/commands/`.

Command path:
- `.opencode/commands/murphyscan.md`

Invoke:
- `/murphyscan`

Official OpenCode docs:
- [Agent Skills](https://opencode.ai/docs/skills/)
- [Commands](https://opencode.ai/docs/commands/)
- [Rules via AGENTS.md](https://opencode.ai/docs/rules/)

## Copy into another project

Minimum portable set:
- `.agents/skills/murphyscan/`
- `.claude/skills/murphyscan/`
- `.opencode/commands/murphyscan.md`

If you want the full Murphy rule system in the target project too, also copy:
- `00-Start/`
- `01-Layers/`
- `02-Concepts/`
- `04-MurphyScan/`

## Output shape

MurphyScan reports should separate:
1. readiness verdict
2. blockers
3. missing launch controls
4. scaling and resilience gaps
5. highest-leverage next actions
6. evidence references
