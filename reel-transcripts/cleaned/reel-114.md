---
reel: 114
source_file: "reel 114.txt"
source_url: "https://www.instagram.com/p/DaQKiPRk6KN/"
published_at: "2026-07-01T13:51:31.000Z"
scan_area: "business-metric-alerting"
tags: [murphyscan, observability, payments, business-metrics, webhooks, production-readiness]
---
# Reel 114 - Green Dashboards Can Miss Revenue Failure

## Summary
Infrastructure and product analytics dashboards can stay green while a payment path is failing. The example is a Stripe webhook endpoint returning `200` even when charge handling fails, preventing retries and hiding six hours of failed revenue. MurphyScan should verify outcome-level business metrics, not only thrown errors and user-behavior analytics.

## Verification Checklist
- Check whether payment failures, checkout completions, signup conversions, and other business outcomes have alerts.
- Verify webhook handlers do not acknowledge success when required business side effects failed.
- Confirm failed business outcomes are retried, queued, or escalated instead of swallowed.
- Treat "no Sentry errors" and "normal analytics" as insufficient proof that revenue-critical flows work.

## Skill Signal
Use this as a business-metric alerting scan for silent revenue failure and webhook success semantics.
