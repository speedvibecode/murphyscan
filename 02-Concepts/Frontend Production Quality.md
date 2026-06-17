---
concept: "frontend-production-quality"
tags: [murphyscan, concept, frontend]
layers: ["01 Frontend"]
source_reels: [reel-09, reel-10]
---
# Frontend Production Quality

## Related Layers
- [[01 Frontend]]

## Source Reels
- [[reel-09]] - frontend is a production system, not just a pretty page.
- [[reel-10]] - test weak devices, slow connections, and stranger usage.

## Why It Matters
AI-generated UI often handles the happy visual path but misses accessibility, mobile constraints, performance, state leaks, offline behavior, and error boundaries.

## Verification Questions
- Does the UI work on small screens, old devices, and slow networks?
- Are keyboard navigation and screen reader basics covered?
- Are bundle size, loading performance, and animation performance acceptable?
- Do major routes have error boundaries and recovery paths?

## Agent Notes
Do not score frontend readiness by screenshots alone. Require runtime or code evidence for state handling, accessibility, and responsiveness.

