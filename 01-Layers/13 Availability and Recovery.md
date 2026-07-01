---
layer: 13
image_label: "AVAILABILITY & RECOVERY"
tags: [murphyscan, layer, availability, recovery]
source_reels: [reel-05, reel-06, reel-16, reel-20, reel-31, reel-36, reel-39, reel-45, reel-46, reel-60, reel-61, reel-68, reel-85, reel-86, reel-89, reel-98, reel-99, reel-101]
---
# 13 Availability and Recovery

Up: [[Layer Map]] | Home: [[MurphyScan Vault Home]]

## Purpose
The recovery layer verifies that the app can survive bad deploys, provider outages, credential leaks, user retries, and database failures.

## Core Concepts
- [[Observability and Incident Response]]
- [[Deployment Safety and Rollbacks]]
- [[Secrets and Credential Rotation]]
- [[Async Jobs and Idempotency]]
- [[Cloud Cost Discipline]]

## Source Reels
- [[reel-05]] - rollback before production deploys.
- [[reel-06]] - fallbacks for third-party API outages.
- [[reel-16]] - staging, checks, and rollback strategy.
- [[reel-20]] - CI/CD rollback capability.
- [[reel-31]] - backups, restore tests, uptime, runbooks.
- [[reel-36]] - dual-key secret rotation.
- [[reel-39]] - canary auto-rollback.
- [[reel-45]] - retries and idempotency for jobs.
- [[reel-46]] - spend alerts as survival control.
- [[reel-60]] - server-side session invalidation.
- [[reel-61]] - rotate leaked keys and scope blast radius.
- [[reel-68]] - webhook idempotency prevents duplicate payment side effects.
- [[reel-85]] - health checks and external monitoring shrink outage detection time.
- [[reel-86]] - fast pipelines and canary paths reduce release blast radius.
- [[reel-89]] - service-to-service identity failure can become systemic access loss.
- [[reel-98]] - restore drills define whether backups are real.
- [[reel-99]] - secrets in git history require response beyond file cleanup.
- [[reel-101]] - controlled rollout protects availability during launch.

## What MurphyScan Should Verify
- Backups exist and restore has been tested.
- Rollback steps are known and fast.
- Incidents have a one-page runbook.
- Secret leaks have a rotation path.
- External API outages and duplicate user retries degrade gracefully.
- Monitoring can tell the owner about regional or external-facing outages before customers do.

## Repetition Notes
Availability is the final aggregation layer. It pulls from deployment, observability, secrets, backend jobs, and database recovery.
