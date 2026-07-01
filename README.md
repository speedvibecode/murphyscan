# MurphyScan

Version: `0.2.1`

MurphyScan is a portable launch-readiness and scaling-readiness audit system for software projects.

It answers one operational question:

`What is still missing before this app is actually safe to launch, and what should be improved to keep it healthy as it scales?`

## What MurphyScan does

MurphyScan is a verification system for agents and teams. It is built to inspect a project and produce a decision-oriented report with:
- readiness verdict
- launch blockers
- missing launch controls
- scaling and resilience gaps
- highest-leverage next actions
- evidence references

It is not a code generator, not a generic "review my repo" prompt, and not a style linter in disguise.

## What it catches well

MurphyScan is strongest when a repo already "works" but may not be hardened.

It is designed to catch issues like:
- auth exists, but authorization is incomplete
- RLS exists, but service-role paths walk around it
- secrets were moved, but never rotated or scanned out of git history
- deploys work, but rollback and recovery are still hand-wavy
- monitoring SDKs are installed, but alerting and operator visibility are not proven
- AI endpoints function, but cost controls, validation, and abuse caps are weak
- the app is fast in demos, but cache invalidation and scaling cliffs are unexamined
- a public API exists, but contracts, versioning, and webhook integrity are loose
- prompt files, shared skills, or copied agent instructions are influencing production with no trust boundary

This is the difference between "the product runs" and "the product is ready."

## Core coverage

MurphyScan organizes readiness checks across 13 production layers:
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

Within those layers, it is especially strong on:
- auth, authorization, sessions, and RLS
- secrets, rotation, and git-history exposure
- deployment safety, canaries, rollback, and release flow
- monitoring, structured logs, health checks, and restore drills
- database design, pooling, tenant isolation, and workload fit
- AI endpoint protection, eval gates, cost controls, and routing
- webhook integrity, billing events, and API contract safety
- AI supply-chain trust for shared prompts, skills, and automation artifacts

## Why teams use it

MurphyScan helps teams:
- separate launch blockers from future scale work
- avoid wasting time on low-signal review noise
- force evidence over tool presence
- get more consistent judgment across engineers and agents
- convert repeated production mistakes into a reusable audit system

It is useful for:
- vibe-coded apps that need a real hardening pass
- AI products with expensive or abuse-prone endpoints
- SaaS apps with auth, billing, moderation, or multi-tenant risk
- teams that want one shared readiness standard across Codex, Claude Code, and OpenCode

## Current rule base

Current corpus and rule state:
- 104 cleaned source-backed reel notes
- 13 layer hubs aligned to the production stack image
- consolidated concept notes for repeated risk patterns
- expanded coverage for API contracts/versioning and AI supply-chain trust
- portable `/murphyscan` wrappers for Codex, Claude Code, and OpenCode

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

#### Option A: keep this repo as the canonical MurphyScan rule repo

Use this when you want one shared source of truth for readiness criteria and ongoing rule improvement.

#### Option B: install MurphyScan into another project

Copy these into the target project root:

```text
.agents/skills/murphyscan/
.claude/skills/murphyscan/
.opencode/commands/murphyscan.md
```

If you also want the full rule vault in the target project, copy:

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
  Consolidated verification concepts such as RLS, secrets, deploy safety, AI evals, API contracts, and scaling cliffs.
- `04-MurphyScan/`
  Skill operating notes and prioritized scan backlog.
- `.agents/skills/murphyscan/`
  Codex-compatible skill.
- `.claude/skills/murphyscan/`
  Claude Code-compatible skill path.
- `.opencode/commands/murphyscan.md`
  OpenCode slash command wrapper.
- `reel-transcripts/`
  The source corpus: raw transcripts, cleaned summaries, and source manifest.

## Why the transcript corpus is in the repo

The transcript corpus is part of the system value, not accidental clutter.

It gives MurphyScan:
- source traceability
- a reusable research base for future rule refinement
- a way to keep the framework grounded in a consistent production-readiness philosophy
- a path for future agents to strengthen rules instead of treating them as unexplained doctrine

Current corpus size:
- 104 cleaned source-backed reel notes

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

## Forward tests

MurphyScan has been forward-tested against real public repositories, not just the Murphy vault itself.

Current public case studies:
- [Banter](./docs/case-studies/banter.md)
  Full-stack poll app. MurphyScan found meaningful launch-readiness gaps around durable rate limiting, admin auditability, and recovery posture.
- [Vercel AI Chatbot](./docs/case-studies/vercel-ai-chatbot.md)
  Strong AI app template. MurphyScan found real cost/control and operational-proof gaps without collapsing into generic AI-review noise.
- [NextAuth.js Example](./docs/case-studies/next-auth-example.md)
  Strong auth demo. MurphyScan correctly classified it as an example app, not a launch-ready product.

This matters because MurphyScan is supposed to distinguish:
- launch blockers
- missing launch controls
- scale and resilience gaps
- example repos versus repos that are actually close to shipping

## Keeping it growing

MurphyScan has an explicit intake and synthesis loop rather than ad hoc vault edits.

Corpus maintenance surfaces:
- [reel-transcripts/manifest.json](./reel-transcripts/manifest.json)
- [reel-transcripts/INBOX.md](./reel-transcripts/INBOX.md)
- [reel-transcripts/next-batch.txt](./reel-transcripts/next-batch.txt)
- [docs/weekly-ingest-mode.md](./docs/weekly-ingest-mode.md)
- [docs/source-corpus-maintenance.md](./docs/source-corpus-maintenance.md)

That gives the repo a controlled path for:
- tracking newly posted reels
- preserving raw source material
- producing cleaned source notes
- updating the correct layer and concept notes
- validating material rule changes against real repos

Weekly operator model:
- paste URLs into `reel-transcripts/next-batch.txt`
- open a new chat in the repo
- tell the agent the next reel batch was added
- let it run import, cleaning, synthesis, archive, and repo finalization end to end

## Versioning

MurphyScan uses explicit skill and repo versioning.

Current version:
- `0.2.2`

Version surfaces:
- [VERSION](./VERSION)
- [CHANGELOG.md](./CHANGELOG.md)

Practical rule:
- reel additions and rule changes that materially improve MurphyScan behavior should land with a changelog entry
- pure cleanup or wording-only changes should not pretend to be larger than they are

## Recommended team rollout

The cleanest team setup is:
- keep this repository as the canonical MurphyScan repo
- version and improve the rule system here
- copy the portable skill folders into app repos where you want `/murphyscan` available
- run forward tests against real app repos before treating a new rule as stable

That keeps the audit logic centralized instead of letting each project drift into its own definition of launch readiness.

## Attribution

MurphyScan is heavily inspired by the Instagram reel content of [`@mattmurphyai`](https://www.instagram.com/mattmurphyai/), whose posts on launch discipline, auth and RLS, secrets, deploy safety, monitoring, cost controls, and scaling risk strongly shaped the system.

The repo includes source-derived summaries built from that reel corpus, along with the MurphyScan vault structure, grouping, synthesis, and cross-agent wrappers.

## Rights and reuse

This repository is public so teams can inspect and use it, but the source-derived reel material should not be confused with fully original-from-scratch code or documentation.

Practical interpretation:
- the MurphyScan framework, grouping, wrappers, and verification structure are reusable
- the reel-derived source material remains attributable to its original creator
- do not assume a permissive open-source license is the right move for the full repository unless rights are clarified

## Further reading

- [docs/architecture.md](./docs/architecture.md)
- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [docs/case-studies/README.md](./docs/case-studies/README.md)
- [docs/source-corpus-maintenance.md](./docs/source-corpus-maintenance.md)
- [CHANGELOG.md](./CHANGELOG.md)
