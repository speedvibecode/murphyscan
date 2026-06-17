---
concept: "ai-endpoint-protection"
tags: [murphyscan, concept, ai, gateway, spend-caps]
layers: ["09 Rate Limiting", "02 APIs and Backend Logic"]
source_reels: [reel-24, reel-49]
---
# AI Endpoint Protection

## Related Layers
- [[09 Rate Limiting]]
- [[02 APIs and Backend Logic]]

## Source Reels
- [[reel-24]] - paid AI endpoints must be rate limited.
- [[reel-49]] - use gateway authentication, validation, and spend caps.

## Why It Matters
AI endpoints convert abuse directly into cost. A public URL with no auth, schema limits, or spend limits can become a four-figure mistake quickly.

## Verification Questions
- Can an unauthenticated caller reach any model call?
- Are token limits and payload sizes enforced before the provider request?
- Are requests tagged by user, tenant, and plan?
- Are daily and monthly caps enforced outside normal app UI flows?

## Agent Notes
Treat paid model calls as financial surfaces, not only technical endpoints.

