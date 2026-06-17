---
concept: "billing-usage-events"
tags: [murphyscan, concept, billing, stripe]
layers: []
source_reels: [reel-30, reel-43]
---
# Billing and Usage Events

## Related Layers
- [[02 APIs and Backend Logic]]
- [[03 Database and Storage]]

## Source Reels
- [[reel-30]] - Stripe Checkout and billing portal.
- [[reel-43]] - pricing metric, credits, and billable event stream.

## Why It Matters
Billing should be simple enough to ship and structured enough to audit. Reconstructing billing from logs later is fragile.

## Verification Questions
- Is the pricing metric aligned with customer value?
- Is hosted checkout used unless custom payment collection is justified?
- Is the billing portal available for customer self-service?
- Does every billable action create an event?

## Agent Notes
For `/murphyscan`, billing is a product edge rather than one of the 13 screenshot layers, but it becomes critical for paid apps.

