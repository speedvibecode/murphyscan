---
concept: "ai-cost-controls-model-routing"
tags: [murphyscan, concept, ai, cost]
layers: ["09 Rate Limiting", "10 Caching and CDN"]
source_reels: [reel-01, reel-24, reel-38, reel-47, reel-49]
---
# AI Cost Controls and Model Routing

## Related Layers
- [[09 Rate Limiting]]
- [[10 Caching and CDN]]

## Source Reels
- [[reel-01]] - cache, route smart, and set spend caps.
- [[reel-24]] - rate limiting protects paid endpoints.
- [[reel-38]] - semantic caching, routing, batching, debouncing.
- [[reel-47]] - complexity classifier and tiered models.
- [[reel-49]] - gateway spend tracking and caps.

## Why It Matters
AI app economics are architectural. The same user experience can cost far less with semantic caching, request routing, batching, debouncing, and per-user spend tracking.

## Verification Questions
- Are model calls classified by complexity?
- Can simpler requests use cheaper models?
- Are repeated or semantically similar prompts cached?
- Are usage and token costs tracked per user or tenant?
- Are provider and app-level spend caps configured?

## Agent Notes
Cost optimization must not silently degrade quality. Pair this with [[AI Output Validation and Evals]].

