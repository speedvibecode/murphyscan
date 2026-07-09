---
concept: "cloud-cost-discipline"
tags: [murphyscan, concept, cost, infrastructure]
layers: ["06 Cloud and Compute", "13 Availability and Recovery"]
source_reels: [reel-01, reel-38, reel-46, reel-87, reel-88, reel-126]
---
# Cloud Cost Discipline

## Related Layers
- [[06 Cloud and Compute]]
- [[13 Availability and Recovery]]

## Source Reels
- [[reel-01]] - AI spend caps before launch.
- [[reel-38]] - model routing, caching, and batching.
- [[reel-46]] - audit always-on resources and right-size plans.
- [[reel-87]] - idle resources, over-provisioned compute, and egress drive surprise bills.
- [[reel-88]] - managed services can be the right spend when team time is scarcer than cloud dollars.
- [[reel-126]] - CI minute ceilings and overage pricing can become surprise infrastructure spend.

## Why It Matters
Runaway spend can kill a product even if the app works. Cost controls are reliability controls for the business.

## Verification Questions
- Are billing alerts set for every provider?
- Are hard caps configured where available?
- Are always-on resources justified by usage?
- Are database, compute, and model tiers right-sized?
- Is data moving between regions or providers in ways that quietly create egress cost?
- Are CI/CD usage limits and overage prices monitored before the pipeline stops or spend spikes?

## Agent Notes
Cost controls should be checked before public traffic, not after the first bill.
