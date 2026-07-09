---
title: "MurphyScan Skill Brief"
tags: [murphyscan, skill-brief]
---
# MurphyScan Skill Brief

This note describes the operating model behind the portable `/murphyscan` skill surfaces in this repo.

## Purpose
`/murphyscan` should help an agent verify whether an AI-assisted app is production-ready across the 13 layers in [[Layer Map]].

## Rule Shape
Each rule should include:
- **Layer:** one of the 13 production layers.
- **Concept:** a linked concept note explaining the risk.
- **Evidence:** source reel links.
- **Inspection:** files, commands, dashboards, or config surfaces to check.
- **Pass condition:** what must be true.
- **Failure condition:** what should block launch or require explicit owner acceptance.

## Scan Tiers

- **Basic MurphyScan:** the default `/murphyscan` path. Inspect all 13 layer hubs at the level supported by local evidence, prioritize Priority 0 and Priority 1 risks, include visible scale gaps, and keep the report compact enough to drive launch decisions.
- **Advanced MurphyScan:** the explicit token-burner path. Use when the owner asks for advanced, exhaustive, super-deep, adversarial, or every-last-nuance review. Inspect every relevant layer, concept, route, schema, workflow, dependency, prompt, skill, and automation boundary available locally. Add active tests, load/scaling review, bundle/client exposure checks, dependency and secret-history scans, API and webhook contract review, AI eval review, backup/restore review, and trust-boundary review where applicable.

Quick scans are a narrowed Basic MurphyScan pass focused on launch blockers and cost or abuse controls.

## Corpus Growth Rules

- Scheduled ingest runs Monday, Wednesday, and Friday at 7:00 AM local Codex automation time.
- Auto-discovered reels require verified post dates before intake.
- A full visible profile window is a manual-link warning, not proof that all recent reels were discovered.
- Low-signal, music-only, no-subtitle, and no-transcript reels stay raw and manifest-only as filtered records.
- Provider, quota, network, and script failures stay retryable and should not be treated as safely indexed.
- New concepts are allowed only when a reel introduces reusable verification behavior that does not fit the existing concept map.
- Material corpus, automation, or skill behavior changes must update stale-prone surfaces such as the vault home, source index, README, and changelog.

## Rule Additions From Reels 65-104
- Treat service-role database access as a first-class RLS bypass path.
- Review API contracts, versioning, and changelog discipline for user-facing or partner-facing APIs.
- Include uptime checks, structured logs, and restore drills in the default recovery story.
- Treat external prompts, downloaded skills, and copied agent instructions as part of the AI supply chain.

## Rule Additions From Reels 105-127 and 130
- Validate API payloads at the backend boundary before privileged or paid business logic runs.
- Treat tenant isolation as an observable business boundary across caches, jobs, exports, and API paths.
- Include business-event failures, session replay evidence, and checkout follow-up jobs in launch-readiness checks.
- Check CI cost controls and require engineering review for AI-generated code.
- Route legal, insurance, platform, and industry-specific requirements through compliance review when the product domain raises them.
- Diagnose database scale in order: connections, query cost, then read/write shape.
- Verify platform plan limits for concurrency, runtime, payload, bandwidth, and function size before launch.
- Treat business-metric alerts, synthetic transactions, and dead-letter queues as observability for outcomes that error trackers miss.
- Require backup frequency, failure-domain separation, point-in-time recovery where needed, and restore drills.
- Treat AI assistant context from PRs, issues, docs, comments, and prompts as a security input surface.
- Model rate limits as hard limits, adaptive limits, and tiered product limits.
- Treat cache staleness and invalidation ownership as product-risk decisions, not only performance tuning.
- Treat first-48-hour activation, aha-moment reach, early churn signals, and follow-up nudges as launch-readiness checks when a product depends on repeat use.

## Non-Goals
- Do not rewrite the app automatically.
- Do not invent missing policy decisions.
- Do not treat tool presence as proof; require evidence that the control is wired and working.
