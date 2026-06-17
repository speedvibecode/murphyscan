---
concept: "observability-incident-response"
tags: [murphyscan, concept, observability, incident-response]
layers: ["12 Error Tracking and Logs", "13 Availability and Recovery"]
source_reels: [reel-04, reel-29, reel-31, reel-37]
---
# Observability and Incident Response

## Related Layers
- [[12 Error Tracking and Logs]]
- [[13 Availability and Recovery]]

## Source Reels
- [[reel-04]] - error tracking, analytics, uptime monitoring.
- [[reel-29]] - error tracking tells you what broke before users do.
- [[reel-31]] - backups, uptime, and incident runbooks.
- [[reel-37]] - automated compliance evidence.

## Why It Matters
If the owner cannot see failures, users become the monitoring system. Observability must produce actionable evidence, not just dashboards.

## Verification Questions
- Are frontend and backend errors captured with stack traces?
- Are uptime alerts routed to a human?
- Are key user flows tracked enough to spot drop-off?
- Is there a one-page incident runbook?
- Are backups restored in tests?

## Agent Notes
Ask for evidence that monitoring is wired and alerting, not just installed.

