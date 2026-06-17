# Contributing to MurphyScan

MurphyScan should evolve like a verification system, not a prompt scrapbook.

## Contribution standard

A good MurphyScan contribution does at least one of these:
- tightens a launch-readiness rule
- improves evidence quality for an existing rule
- removes ambiguity between blocker vs non-blocker findings
- adds a real case study showing what MurphyScan caught
- improves cross-agent portability without duplicating the rule system

## Do not contribute these casually

- generic AI-review advice with no MurphyScan layer mapping
- duplicate concept notes for slightly different wording
- long motivational prose
- “best practices” that do not produce a concrete verification question
- speculative scale advice with no evidence path

## Preferred contribution flow

1. Start from a real repo, not a hypothetical one.
2. Identify what MurphyScan missed, misclassified, or described too vaguely.
3. Update the smallest correct surface:
   - layer note if the issue changes routing
   - concept note if the issue changes interpretation
   - skill wrapper if multiple agents need the same invocation behavior
   - case study if the issue improves evidence quality
4. Keep blockers distinct from scale gaps.
5. Add or update links so the graph stays navigable.

## Where to change what

- `00-Start/`
  Change only if routing or overall framing changes.
- `01-Layers/`
  Change when a production layer needs new verification framing.
- `02-Concepts/`
  Change when a repeated risk needs clearer interpretation or questions.
- `.agents/skills/`, `.claude/skills/`, `.opencode/commands/`
  Change only for wrapper behavior, not for large rule expansion.
- `docs/case-studies/`
  Add real examples of MurphyScan in use.

## Quality bar for rule changes

Before treating a rule update as real, ask:
- Does it catch something concrete?
- Does it map to a specific layer?
- Can an agent verify it from code, config, CI, runtime output, or evidence files?
- Does it improve signal instead of increasing note count?

If the answer to any of these is no, the rule is not ready.

## Case study standard

A case study should include:
- target repo and context
- scan surface used
- verdict
- blockers
- missing launch controls
- scale/resilience gaps
- strongest evidence
- what MurphyScan learned from the repo

Do not write case studies as marketing stories. Write them as disciplined audit notes.

## Portability rule

Keep Codex, Claude Code, and OpenCode wrappers aligned in intent. If one wrapper needs a new instruction, ask whether the rule belongs in the shared vault instead.

## Licensing and attribution

MurphyScan includes source-derived material from Matt Murphy's public reel content. Keep attribution intact and avoid making reuse claims that exceed what the repository can responsibly grant.

