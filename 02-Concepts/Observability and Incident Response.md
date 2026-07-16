---
concept: "observability-incident-response"
tags: [murphyscan, concept, observability, incident-response]
layers: ["12 Error Tracking and Logs", "13 Availability and Recovery"]
source_reels: [reel-04, reel-29, reel-31, reel-37, reel-85, reel-91, reel-92, reel-98, reel-106, reel-108, reel-109, reel-114, reel-116, reel-118, reel-119, reel-130, reel-132, reel-139, reel-141, reel-150, reel-151]
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
- [[reel-85]] - health checks, external uptime monitoring, and alert routing.
- [[reel-91]] - structured logs, correlation IDs, and real log levels.
- [[reel-92]] - architecture decisions, setup docs, and failure-mode playbooks.
- [[reel-98]] - restore drills prove recovery, not just backup existence.
- [[reel-106]] - tenant isolation failures need immediate blast-radius evidence.
- [[reel-108]] - session replay and rage-click detection reduce support ambiguity.
- [[reel-109]] - monitoring should detect business failures, not only server failures.
- [[reel-114]] - green infrastructure dashboards can miss failed revenue outcomes.
- [[reel-116]] - synthetic transactions and dead-letter queues catch failures that return `200`.
- [[reel-118]] - outside-in health checks, correlated traces, and SLOs turn dashboards into operations.
- [[reel-119]] - swallowed webhook failures need business outcome monitoring and dead-letter handling.
- [[reel-130]] - early activation and churn signals should be observable when retention drives launch success.
- [[reel-132]] - support playbooks and tiered escalation should be built alongside production features.
- [[reel-139]] - production AI agents need security, monitoring, fallback, escalation, and recovery beyond a working demo.
- [[reel-141]] - support-ticket root causes expose user-health failures that infrastructure monitoring misses.
- [[reel-150]] - automated support needs explicit human escalation for conflicting evidence, judgment, and customer-history cases.
- [[reel-151]] - postmortem templates, time-bound reviews, corrective-action ownership, and an incident library turn failures into reusable learning.

## Why It Matters
If the owner cannot see failures, users become the monitoring system. Observability must produce actionable evidence, not just dashboards.

## Verification Questions
- Are frontend and backend errors captured with stack traces?
- Are uptime alerts routed to a human?
- Are key user flows tracked enough to spot drop-off?
- Is there a one-page incident runbook?
- Are backups restored in tests?
- Are logs structured enough to trace a request across services?
- Are setup docs and failure-mode playbooks good enough for the next operator, not only the current one?
- Are revenue-critical and entitlement-critical business states monitored for silent divergence?
- Are session replays or equivalent user-context tools available where support ambiguity creates material risk?
- Can the team measure incident blast radius quickly, including affected tenants, users, payments, or data objects?
- Do critical paths have synthetic checks that prove the business outcome, not just endpoint liveness?
- Are logs, metrics, and traces correlated by request or trace ID?
- Are SLOs or equivalent health objectives defined before incidents happen?
- Are activation, aha moment, and early churn signals tracked for products that depend on repeat use?
- Does every material feature have an owned support playbook covering known failures and escalation?
- Are repeated support causes converted into UX, observability, or business-logic fixes?
- For AI agents, are quality, tool failures, cost, and shutdown behavior observable and exercised?
- Do automated support paths escalate conflicting evidence, policy decisions, billing corrections, and emotionally complex repeat failures to an authorized human with sufficient history?
- Does every material incident produce a time-bound postmortem with owned prevention actions, and are prior reviews searchable during related incidents?

## Agent Notes
Ask for evidence that monitoring is wired and alerting, not just installed.
