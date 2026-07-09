---
title: "Scan Rule Backlog"
tags: [murphyscan, rules, backlog]
---
# Scan Rule Backlog

## Priority 0 - Launch Blockers
- [[Authorization and Row-Level Security]] - user A must not access user B data.
- [[Managed Auth and Session Security]] - no custom auth without deep review; sessions must expire and logout must invalidate server-side state.
- [[Secrets and Credential Rotation]] - no secrets in frontend, committed env files, or git history.
- [[Deployment Safety and Rollbacks]] - deploys need preview/staging and a known rollback path.
- [[Observability and Incident Response]] - app needs error tracking, logs, uptime alerts, business-event failure monitoring, and a recovery runbook.
- [[API Contracts and Versioning]] - production-facing APIs and webhooks need schema validation, defined contracts, versioning, and idempotent event handling.
- [[Multi-Tenancy and Tenant Isolation]] - tenant data must not leak through APIs, caches, background jobs, exports, or observability paths.

## Priority 1 - Cost and Abuse Controls
- [[Rate Limiting and API Gateways]] - paid endpoints and auth endpoints need limits.
- [[AI Cost Controls and Model Routing]] - expensive model calls need caching, routing, batching, and spend caps.
- [[Caching Strategy]] - repeated reads and expensive queries need cache policy and invalidation.
- [[Cloud Cost Discipline]] - budget alerts and resource right-sizing must exist.
- [[AI Supply Chain Trust]] - unvetted prompts, skill files, and shared instructions must not quietly influence production.
- [[CI Gates and AI Review]] - CI and agent-driven automation need spend controls and AI-authored code needs accountable review gates.

## Priority 2 - Scale and Quality
- [[Database Design and Indexing]] - schema, indexes, migrations, backups, and query patterns are reviewed.
- [[Database Scaling and Connection Pooling]] - pooling, partitions, replicas, and sharding decisions are evidence-based.
- [[Async Jobs and Idempotency]] - long-running work must not block HTTP requests or duplicate on retry.
- [[AI Output Validation and Evals]] - AI responses are validated and quality-gated before users see them.
- [[Load Testing and Scaling Cliffs]] - first-traffic load tests run before launch.

## Priority 3 - Product Edge Checks
- [[Product Activation and Retention]] - products that depend on repeat use need activation, aha-moment, early churn, and follow-up evidence.
- [[Billing and Usage Events]] - paid apps need a value-aligned pricing metric and durable billable events.
- [[Mobile Deep Links and App Links]] - mobile apps need verified universal/app links and web fallback.
- [[Legal and Compliance Basics]] - user-data apps need privacy, terms, deletion, platform-risk, insurance, domain requirements, and evidence where applicable.
