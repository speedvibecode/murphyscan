---
concept: "mobile-deep-links-app-links"
tags: [murphyscan, concept, mobile, deep-links]
layers: ["01 Frontend"]
source_reels: [reel-40]
---
# Mobile Deep Links and App Links

## Related Layers
- [[01 Frontend]]

## Source Reels
- [[reel-40]] - Apple Universal Links, Android App Links, and fallback.

## Why It Matters
Shared links should preserve user intent. If mobile content links open the wrong place or hit a login wall, the product loses users.

## Verification Questions
- Is the Apple app-site association file hosted correctly?
- Is the Android asset links file hosted correctly?
- Are Android intent filters configured?
- Does the website fallback show content and install path when the app is absent?

## Agent Notes
Deep linking is only relevant for mobile apps or mobile-web-to-app flows. Do not force this check onto pure web apps.

