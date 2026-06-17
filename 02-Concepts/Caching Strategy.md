---
concept: "caching-strategy"
tags: [murphyscan, concept, caching, cdn]
layers: ["10 Caching and CDN", "11 Load Balancing and Scaling"]
source_reels: [reel-01, reel-25, reel-28, reel-33, reel-38, reel-53, reel-62, reel-63]
---
# Caching Strategy

## Related Layers
- [[10 Caching and CDN]]
- [[11 Load Balancing and Scaling]]

## Source Reels
- [[reel-01]] - semantic cache for AI costs.
- [[reel-25]] - browser, CDN, and application caching.
- [[reel-28]] - Redis for cache and rate limits.
- [[reel-33]] - edge delivery and read replicas.
- [[reel-38]] - semantic AI cache.
- [[reel-53]] - response, edge, and database query caching.
- [[reel-62]] - cache repeated data before first traffic.
- [[reel-63]] - repeated work creates scaling cliffs.

## Why It Matters
Caching reduces latency, database load, and paid API spend. Bad caching can also leak data or serve stale business-critical state.

## Verification Questions
- Which endpoints and queries are safe to cache?
- What is the TTL and invalidation path?
- Are user-specific and tenant-specific responses protected from shared caches?
- Is cache hit rate measurable?

## Agent Notes
Always pair cache recommendations with invalidation and data-isolation notes.

