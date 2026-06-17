---
concept: "rate-limiting-api-gateways"
tags: [murphyscan, concept, rate-limiting, gateway]
layers: ["02 APIs and Backend Logic", "09 Rate Limiting"]
source_reels: [reel-11, reel-24, reel-28, reel-49]
---
# Rate Limiting and API Gateways

## Related Layers
- [[02 APIs and Backend Logic]]
- [[09 Rate Limiting]]

## Source Reels
- [[reel-11]] - backend must enforce rate limits.
- [[reel-24]] - rate limit AI, auth, and public data endpoints.
- [[reel-28]] - Redis-backed rate limits via Upstash or similar.
- [[reel-49]] - gateway-level validation and spend caps for AI endpoints.

## Why It Matters
Unauthenticated or uncapped endpoints allow bots to create outages, brute-force accounts, scrape data, or burn paid API budget.

## Verification Questions
- Which endpoints cost money per request?
- Which endpoints can be brute-forced or scraped?
- Are limits per IP, per user, per tenant, or per plan?
- Are payload size and schema checked before expensive processing?

## Agent Notes
Rate limiting should be near the edge or gateway for expensive public endpoints, not buried after the costly call.

