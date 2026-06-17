---
concept: "client-trust-boundary"
tags: [murphyscan, concept, frontend, security]
layers: ["01 Frontend", "02 APIs and Backend Logic", "04 Auth and Permissions", "08 Security and RLS"]
source_reels: [reel-11, reel-15, reel-55]
---
# Client Trust Boundary

## Related Layers
- [[01 Frontend]]
- [[02 APIs and Backend Logic]]
- [[04 Auth and Permissions]]
- [[08 Security and RLS]]

## Source Reels
- [[reel-11]] - client-to-database access is not a production architecture.
- [[reel-15]] - browser-visible keys are exposed keys.
- [[reel-55]] - frontend is a display layer, not a trust layer.

## Why It Matters
Browser code can be inspected, modified, and bypassed. Any rule enforced only in the frontend is advisory, not security.

## Verification Questions
- Are pricing, permissions, discounts, and feature gates enforced server-side?
- Does the backend revalidate every important input?
- Are public env vars intentionally public?
- Does the production bundle expose keys, internal endpoints, or sensitive config?

## Agent Notes
When in doubt, assume a user can bypass the UI and call the API directly.

