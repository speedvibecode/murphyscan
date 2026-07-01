# MurphyScan Architecture

## Purpose

MurphyScan is structured as a reusable verification system rather than a single-agent prompt.

The repository has four layers of concern:
- rule system
- source corpus
- agent wrappers
- public documentation

## 1. Rule system

The core MurphyScan logic lives in the vault notes:

- `00-Start/`
  Entry points, routing notes, and the agent knowledge map.
- `01-Layers/`
  The 13 production-readiness layers used to classify findings.
- `02-Concepts/`
  Consolidated control families such as RLS, secrets, deploy safety, AI evals, and scaling cliffs.
- `04-MurphyScan/`
  Skill brief and prioritized scan backlog.

This is the actual MurphyScan brain. The skill wrappers should stay thin and point here.

## 2. Source corpus

The source corpus lives in `reel-transcripts/`.

It exists for three reasons:
- provenance
- rule traceability
- future rule refinement

Current state:
- `104` cleaned source-backed reel notes
- repeatable local intake workflow via `scripts/transcribe-instagram-reels.mjs`

The cleaned summaries in `reel-transcripts/cleaned/` are the fastest source surface for agents. The raw transcript files and `manifest.json` preserve grounding and source mapping.

## 3. Agent wrappers

MurphyScan is exposed through three agent surfaces:

- Codex:
  `.agents/skills/murphyscan/`
- Claude Code:
  `.claude/skills/murphyscan/`
- OpenCode:
  `.opencode/commands/murphyscan.md`

These wrappers should:
- explain when to invoke MurphyScan
- point to the Murphy vault as the rule source
- standardize the output report shape

They should not become a second copy of the whole framework.

## 4. Public repository surface

The public face of the repo should explain:
- what MurphyScan is
- why the transcript corpus is included
- how to install and invoke it
- what kind of output it produces
- how to contribute without causing rule drift

Primary public-facing files:
- `README.md`
- `CONTRIBUTING.md`
- `docs/case-studies/`

## Data flow

MurphyScan reasoning should flow like this:

1. discover the target repo or system surface
2. map evidence to one or more of the 13 production layers
3. use the related concept notes to interpret the control gap
4. classify the issue as blocker, missing launch control, or scale/resilience gap
5. return a decision-oriented report with evidence

## Design rules

- Keep launch blockers separate from scale improvements.
- Require evidence, not tool presence.
- Prefer updating concept notes over spawning new note sprawl.
- Keep wrappers thin and vault-centered.
- Treat the corpus as grounding, not as accidental baggage.

## Future evolution

The cleanest path forward is:
- improve scan rules through real repo case studies
- tighten the wrappers only when multiple agents need the same clarification
- split a fully original `murphyscan-core` later if licensing or redistribution needs require it
