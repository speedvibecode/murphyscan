---
reel: 118
source_file: "reel 118.txt"
source_url: "https://www.instagram.com/p/DaTGbRGFSM0/"
published_at: "2026-07-02T17:13:41.000Z"
scan_area: "correlated-observability-slo"
tags: [murphyscan, observability, tracing, slo, health-checks, production-readiness]
---
# Reel 118 - Monitoring Is a System That Calls You

## Summary
Monitoring is not a dashboard. Useful observability answers how the team finds out about outages, whether one request can be traced quickly, and what good looks like before failure. The reel emphasizes outside-in health checks, correlated logs/metrics/traces, request IDs, OpenTelemetry, and SLOs.

## Verification Checklist
- Verify external health checks run from outside the app and from relevant regions.
- Check whether logs, metrics, and traces are correlated by request or trace ID.
- Confirm SLOs or comparable service objectives define acceptable error and availability budgets.
- Look for alert routing that calls the operator before customers report the outage.

## Skill Signal
Use this as a correlated observability scan for outside-in monitoring, request tracing, and SLO evidence.
