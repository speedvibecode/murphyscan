# MurphyScan

Version: `0.1.0`

MurphyScan is a portable launch-readiness and scaling-readiness audit system for software projects.

It is built to answer one operational question:

`What is still missing before this app is actually safe to launch, and what should be improved to keep it healthy as it scales?`

## What it is

MurphyScan is not a code generator and not a generic prompt wrapper.

It is a reusable verification framework that:
- scans a project for launch blockers
- identifies missing launch controls
- separates current launch risk from future scale risk
- produces a decision-oriented report with evidence

The rule system is organized into 13 production layers:
- frontend
- APIs and backend logic
- database and storage
- auth and permissions
- hosting and deployment
- cloud and compute
- CI/CD and version control
- security and RLS
- rate limiting
- caching and CDN
- load balancing and scaling
- error tracking and logs
- availability and recovery

## Why this repo exists

Most vibe-coded apps fail in the same predictable ways:
- auth exists but authorization does not
- secrets leak into frontend code or git history
- deploys go straight to production with no rollback plan
- monitoring is missing or decorative
- paid AI endpoints have no cost controls
- scaling assumptions are never tested

MurphyScan turns those repeated failure modes into a shared audit system that can be used by agents and teams.

## Supported agent surfaces

- Codex via `.agents/skills/murphyscan/`
- Claude Code via `.claude/skills/murphyscan/`
- OpenCode via `.opencode/commands/murphyscan.md`

## Quickstart

### 1. Clone the repository

```bash
git clone https://github.com/speedvibecode/murphyscan.git
cd murphyscan
```

### 2. Use it in one of two ways

#### Option A: Keep this repo as the canonical MurphyScan rule repo

Use this when your team wants one shared source of truth for launch-readiness criteria.

#### Option B: Install MurphyScan into another project

Copy these into the target project root:

```text
.agents/skills/murphyscan/
.claude/skills/murphyscan/
.opencode/commands/murphyscan.md
```

If you also want the full MurphyScan vault inside the target project, copy:

```text
00-Start/
01-Layers/
02-Concepts/
04-MurphyScan/
reel-transcripts/
```

### 3. Invoke it

- Codex: `/murphyscan`
- Claude Code: `/murphyscan`
- OpenCode: `/murphyscan`

## What the repo contains

- `00-Start/`
  Entry points, routing, and agent knowledge maps.
- `01-Layers/`
  The 13 production-readiness layer hubs.
- `02-Concepts/`
  Consolidated verification concepts such as RLS, secrets, deploy safety, AI evals, and scaling cliffs.
- `04-MurphyScan/`
  Skill brief and prioritized scan backlog.
- `.agents/skills/murphyscan/`
  Codex-compatible skill.
- `.claude/skills/murphyscan/`
  Claude Code-compatible skill path.
- `.opencode/commands/murphyscan.md`
  OpenCode slash command wrapper.
- `reel-transcripts/`
  The source corpus: raw transcripts, cleaned summaries, and source manifest.

## Why the transcript corpus is in the repo

The transcript corpus is not clutter. It is part of the value.

It gives MurphyScan:
- source traceability
- a reusable research base for future scan rules
- a way to verify that the framework is grounded in a consistent production-readiness philosophy
- a path for future agents to refine the rules instead of treating them as unexplained doctrine

Start here for corpus structure:
- [reel-transcripts/README.md](./reel-transcripts/README.md)

## Output shape

MurphyScan reports should separate:
1. readiness verdict
2. blockers
3. missing launch controls
4. scaling and resilience gaps
5. highest-leverage next actions
6. evidence references

Example:
- [examples/murphyscan-report-example.md](./examples/murphyscan-report-example.md)

Further reading:
- [docs/architecture.md](./docs/architecture.md)
- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [docs/case-studies/README.md](./docs/case-studies/README.md)
- [docs/source-corpus-maintenance.md](./docs/source-corpus-maintenance.md)
- [CHANGELOG.md](./CHANGELOG.md)

## Forward Tests

MurphyScan has been forward-tested against real public repositories, not just the Murphy vault itself.

Current public case studies:
- [Banter](./docs/case-studies/banter.md)
  Full-stack poll app. MurphyScan found meaningful launch-readiness gaps around durable rate limiting, admin auditability, and recovery posture.
- [Vercel AI Chatbot](./docs/case-studies/vercel-ai-chatbot.md)
  Strong AI app template. MurphyScan found real cost/control and operational-proof gaps without collapsing into generic AI-review noise.
- [NextAuth.js Example](./docs/case-studies/next-auth-example.md)
  Strong auth demo. MurphyScan correctly classified it as an example app, not a launch-ready product.

This matters because the framework is supposed to do more than sound smart. It should distinguish:
- launch blockers
- missing launch controls
- scale/resilience gaps
- repos that are examples versus repos that are actually close to shipping

## Keeping It Growing

Yes, MurphyScan is set up to keep growing, but now it also has an explicit intake loop instead of relying on ad hoc vault edits.

Corpus maintenance surfaces:
- [reel-transcripts/manifest.json](./reel-transcripts/manifest.json)
- [reel-transcripts/INBOX.md](./reel-transcripts/INBOX.md)
- [docs/source-corpus-maintenance.md](./docs/source-corpus-maintenance.md)

That gives the repo a controlled path for:
- tracking newly posted reels
- preserving raw source material
- producing cleaned source notes
- updating the correct layer and concept notes
- validating material rule changes against real repos

## Versioning

MurphyScan now has explicit skill/repo versioning.

Current version:
- `0.1.0`

Version surfaces:
- [VERSION](./VERSION)
- [CHANGELOG.md](./CHANGELOG.md)

Practical rule:
- reel additions that materially improve MurphyScan behavior should land with a changelog entry
- pure cleanup or wording-only changes do not need to pretend they are major rule upgrades

## Recommended team rollout

The cleanest team setup is:
- keep this repository as the canonical MurphyScan repo
- version and improve the rule system here
- copy the portable skill folders into app repos where you want `/murphyscan` available
- run forward tests against real app repos before treating a new rule as stable

That keeps the audit logic centralized instead of letting each project drift into its own definition of “launch ready”.

## Attribution

MurphyScan is heavily inspired by the Instagram reel content of [`@mattmurphyai`](https://www.instagram.com/mattmurphyai/) - who happens to be the messiah of vibecoders, whose posts on launch discipline, auth and RLS, secrets, deploy safety, monitoring, cost controls, and scaling risks strongly shaped the system.

The repo includes source-derived summaries built from transcripts of that reel corpus, along with the original MurphyScan vault structure, grouping, synthesis, and cross-agent wrappers.

## Rights and reuse

This repository is public so teams can inspect and use it, but the source-derived reel material should not be confused with fully original-from-scratch code or documentation.

Practical interpretation:
- the MurphyScan framework, grouping, wrappers, and verification structure are reusable
- the reel-derived source material remains attributable to its original creator
- do not assume a permissive open-source license is the right move for the full repository unless rights are clarified

## Status

MurphyScan is usable now, but the right maturity bar for a team is not “the slash command exists.”

The real bar is:
- it catches real launch blockers on real repos
- different team members get roughly the same judgment from the same project
- the reports stay concrete instead of collapsing into generic AI review noise

That is why forward-testing on actual app repos matters.
