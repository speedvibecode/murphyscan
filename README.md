# MurphyScan

MurphyScan is a portable launch-readiness and scaling-readiness audit system for software projects.

It is designed to answer one practical question:

`What is still missing before this app is actually safe to launch, and what should be improved to keep it healthy as it scales?`

## Credit

MurphyScan is heavily inspired by the Instagram reel content of [`@mattmurphyai`](https://www.instagram.com/mattmurphyai/), who is, in plain terms, the messiah of vibe coders on Instagram.

The production-readiness themes in this repo were shaped by that reel series: launch discipline, auth and RLS, secrets, deploy safety, monitoring, cost controls, and scaling risks.

## Source note

This repository contains:
- original vault structure, grouping, synthesis, agent-facing organization, and cross-tool wrappers created for MurphyScan
- source-derived summaries and notes that were built from transcripts of Matt Murphy's reel content

Original source content remains attributable to its creator. MurphyScan should be understood as an agent-ready audit framework built from those ideas, not as a claim of authorship over the original reel material.

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

## Rights and reuse

This repo is public so teammates and collaborators can inspect and use it, but the source-derived reel material is not the same thing as original code you wrote from scratch.

If you want to open-source MurphyScan cleanly, the safer shape is:
- keep the original framework, layer model, skill wrappers, and scan logic as your own reusable work
- keep clear attribution to `@mattmurphyai`
- avoid pretending the transcript-derived material is fully yours to relicense without permission

Until rights are clarified, do not assume a permissive open-source license is the right move for the full repository.

## Output shape

MurphyScan reports should separate:
1. readiness verdict
2. blockers
3. missing launch controls
4. scaling and resilience gaps
5. highest-leverage next actions
6. evidence references
