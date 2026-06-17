---
reel: 6
source_file: "reel 06.txt"
source_url: "https://www.instagram.com/p/DYXGdH4AtnZ/"
scan_area: "third-party-api-resilience"
tags: [murphyscan, api, wrappers, fallbacks, data-ownership]
---
# Reel 06 - Third-Party API Resilience

## Summary
External APIs are dependencies, not foundations. The reel recommends isolating API calls behind wrappers, providing graceful fallbacks, and storing important data in systems the product controls.

## Verification Checklist
- Check whether third-party API calls are centralized behind a wrapper or service module.
- Verify outage behavior: cached response, retry queue, user-facing status, or graceful fallback.
- Confirm the app keeps durable copies of business-critical data instead of relying only on external APIs.

## Skill Signal
Use this as an external-dependency scan for API sprawl, outage handling, and data ownership.

