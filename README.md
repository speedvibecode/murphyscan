# MurphyScan

**The launch-readiness audit system for AI-built and fast-moving software projects.**

MurphyScan is a portable audit system for agents and teams that need a decision-ready answer to one question:

> What is still missing before this app is safe to launch, and what needs to improve before it scales?

It is built for the moment after a product already works in a demo, but before it is trusted with real users, money, data, uptime expectations, or expensive AI endpoints.

Version: `0.3.0`

## Why MurphyScan Exists

AI-assisted development makes it easier to build a working product and easier to miss production controls. MurphyScan turns repeated launch mistakes into a reusable verification system.

It checks whether a project has real evidence for:

- authorization, tenant isolation, and RLS boundaries
- secret handling, rotation, and git-history exposure
- deployment safety, staging, rollback, and CI gates
- API contracts, webhook integrity, idempotency, and versioning
- monitoring, logs, health checks, restore drills, and incident response
- rate limits, abuse controls, AI spend controls, and model routing
- database design, pooling, indexing, backups, and scale cliffs
- cache invalidation, CDN behavior, and stale-data risk
- AI output validation, evals, prompt trust, and AI supply-chain boundaries
- product-edge checks such as billing events, activation, compliance, and mobile links

MurphyScan is not a style linter, code generator, or generic "review this repo" prompt. It is a decision tool: it separates launch blockers from scale work and forces claims to be backed by repo evidence.

## When To Use It

Use MurphyScan when:

- a working app is about to be shown to real users
- a vibe-coded or AI-assisted product needs a hardening pass
- a SaaS app has auth, billing, teams, roles, moderation, or multi-tenant risk
- an AI product has expensive endpoints, tool calls, memory, evals, or prompt surfaces
- a repo looks complete but still needs launch, recovery, cost, or security proof
- multiple agents or reviewers need the same readiness standard

## What You Get

A MurphyScan report is designed for action, not commentary.

Expected output:

1. readiness verdict
2. launch blockers
3. missing launch controls
4. scaling and resilience gaps
5. highest-leverage next actions
6. evidence references

Example report:

- [examples/murphyscan-report-example.md](./examples/murphyscan-report-example.md)

## Quickstart

Clone the rule repo:

```bash
git clone https://github.com/speedvibecode/murphyscan.git
cd murphyscan
```

Use MurphyScan from this repo, or copy the portable agent surfaces into another project.

### Codex

Copy:

```text
.agents/skills/murphyscan/
```

Then invoke:

```text
/murphyscan
```

### Claude Code

Copy:

```text
.claude/skills/murphyscan/
```

Then invoke:

```text
/murphyscan
```

### OpenCode

Copy:

```text
.opencode/commands/murphyscan.md
```

Then invoke:

```text
/murphyscan
```

For the full rule vault, also copy:

```text
00-Start/
01-Layers/
02-Concepts/
04-MurphyScan/
reel-transcripts/
```

## Scan Modes

MurphyScan has two operating tiers.

### Basic MurphyScan

Default `/murphyscan` behavior.

- checks all 13 production layers at the level supported by local evidence
- leads with Priority 0 launch blockers and Priority 1 cost or abuse risks
- includes visible scale and resilience gaps
- keeps the report compact enough to drive a launch decision

Use this for normal launch-readiness checks.

### Advanced MurphyScan

Exhaustive review mode for deeper scrutiny.

Use it when the request says advanced, exhaustive, super-deep, adversarial, token-burner, or every-last-nuance.

Advanced MurphyScan expands into:

- route, schema, workflow, dependency, prompt, skill, and automation review
- active tests where the project can be run safely
- dependency, secret-history, and client-exposure scans where available
- API and webhook contract review
- AI eval, output-validation, model-routing, and spend-control review
- load, backup, restore, rollback, and trust-boundary review
- clear separation between confirmed findings, suspicions, and unavailable production evidence

## Coverage Model

MurphyScan organizes launch readiness across 13 production layers:

| Layer | What MurphyScan Looks For |
| --- | --- |
| Frontend | Responsive behavior, UX states, accessibility basics, client trust boundaries, activation paths |
| APIs and backend logic | Input validation, schema contracts, wrappers, idempotency, async boundaries |
| Database and storage | Schema design, indexes, migrations, backups, object storage, workload fit |
| Auth and permissions | Authentication, authorization, sessions, roles, tenant boundaries |
| Hosting and deployment | Environments, previews, rollback, release control, platform fit |
| Cloud and compute | Runtime limits, serverless ceilings, background work, infrastructure ownership |
| CI/CD and version control | Blocking gates, review discipline, AI-code accountability, CI cost controls |
| Security and RLS | RLS enforcement, service-role bypasses, secret exposure, scanners, headers |
| Rate limiting | Abuse limits, paid endpoint protection, adaptive and tiered limits |
| Caching and CDN | Cache policy, invalidation, stale-data risk, stampede protection |
| Load balancing and scaling | Load tests, concurrency, pooling, replicas, scaling cliffs |
| Error tracking and logs | Error tracking, structured logs, traces, SLOs, business-outcome monitoring |
| Availability and recovery | Uptime alerts, runbooks, backup frequency, restore drills, failure domains |

## Evidence Base

MurphyScan is source-backed rather than invented from a blank checklist.

Current rule base:

- 128 cleaned source-backed reel notes
- 2 filtered low-signal source records tracked raw and manifest-only
- 13 layer hubs aligned to a production stack model
- consolidated concept notes for repeated risk patterns
- expanded coverage for API contracts, AI supply-chain trust, platform limits, recovery proof, cache staleness, and product activation
- portable wrappers for Codex, Claude Code, and OpenCode

The transcript corpus is included because it gives the rule system provenance and a controlled path for improvement. Source material lives in:

- [reel-transcripts/](./reel-transcripts/)
- [reel-transcripts/cleaned/](./reel-transcripts/cleaned/)
- [reel-transcripts/manifest.json](./reel-transcripts/manifest.json)

## Forward-Tested Case Studies

MurphyScan has been tested against real public repositories, not only its own vault.

- [Banter](./docs/case-studies/banter.md)
  Full-stack poll app. MurphyScan found launch-readiness gaps around durable rate limiting, admin auditability, and recovery posture.
- [Vercel AI Chatbot](./docs/case-studies/vercel-ai-chatbot.md)
  Strong AI app template. MurphyScan found cost/control and operational-proof gaps without collapsing into generic AI-review noise.
- [NextAuth.js Example](./docs/case-studies/next-auth-example.md)
  Strong auth demo. MurphyScan correctly classified it as an example app, not a launch-ready product.

The goal is not to punish example repos. The goal is to distinguish a working demo, a strong starter, and a product that is actually close to production.

## Repository Map

| Path | Purpose |
| --- | --- |
| `00-Start/` | Entry points, layer map, concept index, and agent routing notes |
| `01-Layers/` | The 13 production-readiness layer hubs |
| `02-Concepts/` | Reusable verification concepts such as RLS, secrets, API contracts, AI evals, and scaling cliffs |
| `03-Source-Reels/` | Source-backed routing into the cleaned reel corpus |
| `04-MurphyScan/` | Skill brief and prioritized scan rule backlog |
| `.agents/skills/murphyscan/` | Codex skill surface |
| `.claude/skills/murphyscan/` | Claude Code skill surface |
| `.opencode/commands/murphyscan.md` | OpenCode slash command |
| `reel-transcripts/` | Raw transcripts, cleaned summaries, source manifest, and batch intake files |
| `docs/` | Architecture, maintenance, scheduled ingest, fallback, and case-study docs |

## Keeping The Rulebase Current

MurphyScan is designed to keep improving without turning into note sprawl.

The active intake file is:

```text
reel-transcripts/next-batch.txt
```

Manual operator flow:

1. Paste new reel URLs into `reel-transcripts/next-batch.txt`.
2. Open a Codex chat in this repo.
3. Ask the agent to process the next reel batch.
4. Let it transcribe, clean, synthesize, archive, validate, commit, and push.

Scheduled operator flow:

- runs Monday, Wednesday, and Friday at 7:00 AM local Codex automation time
- discovers visible public profile reels with `npm run discover:instagram`
- adds discovered reels only after publish dates are verified
- warns when Instagram's visible window may hide recent reels
- skips already-indexed URLs without creating duplicate reel numbers
- filters low-signal, music-only, no-subtitle, and no-transcript reels without creating cleaned notes
- keeps provider, quota, network, and script failures retryable
- archives and clears the batch only after every URL is accounted for
- commits and pushes material successful runs to `origin/main`

Relevant docs:

- [docs/weekly-ingest-mode.md](./docs/weekly-ingest-mode.md)
- [docs/scheduled-ingest-pipeline.md](./docs/scheduled-ingest-pipeline.md)
- [docs/source-corpus-maintenance.md](./docs/source-corpus-maintenance.md)
- [docs/transcription-fallbacks.md](./docs/transcription-fallbacks.md)

## Versioning

Current version:

- `0.3.0`

Version surfaces:

- [VERSION](./VERSION)
- [CHANGELOG.md](./CHANGELOG.md)

Versioning rules:

- patch: copy edits, corpus cleanup, non-behavioral polish
- minor: meaningful rule growth, new source-backed coverage, improved agent behavior
- major: report-shape or operating-model changes that break expected use

## Recommended Team Setup

The cleanest setup is:

1. Keep this repository as the canonical MurphyScan rule repo.
2. Copy the portable skill folders into app repos where `/murphyscan` should be available.
3. Run Basic MurphyScan before launch decisions.
4. Run Advanced MurphyScan before serious external review, paid launch, or sensitive production rollout.
5. Keep improving the central rulebase through source-backed updates and real repo case studies.

This keeps readiness judgment consistent across Codex, Claude Code, OpenCode, and human reviewers.

## Attribution

MurphyScan is heavily inspired by the Instagram reel content of [`@mattmurphyai`](https://www.instagram.com/mattmurphyai/), whose posts on launch discipline, auth and RLS, secrets, deployment safety, monitoring, cost controls, and scaling risk shaped the system.

The repo includes source-derived summaries built from that reel corpus, plus the MurphyScan vault structure, synthesis, wrappers, and automation.

## Rights and Reuse

The MurphyScan framework, grouping, wrappers, and verification structure are intended to be reusable.

The reel-derived source material remains attributable to its original creator. Do not assume a permissive open-source license is appropriate for the full repository unless rights are clarified.

## Further Reading

- [docs/architecture.md](./docs/architecture.md)
- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [docs/case-studies/README.md](./docs/case-studies/README.md)
- [docs/source-corpus-maintenance.md](./docs/source-corpus-maintenance.md)
- [CHANGELOG.md](./CHANGELOG.md)
