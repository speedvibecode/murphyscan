---
concept: "deployment-safety-rollbacks"
tags: [murphyscan, concept, deployment, rollback]
layers: ["05 Hosting and Deployment", "07 CI-CD and Version Control", "13 Availability and Recovery"]
source_reels: [reel-05, reel-16, reel-19, reel-20, reel-39, reel-81, reel-86, reel-101]
---
# Deployment Safety and Rollbacks

## Related Layers
- [[05 Hosting and Deployment]]
- [[07 CI-CD and Version Control]]
- [[13 Availability and Recovery]]

## Source Reels
- [[reel-05]] - preview deploys, small changes, rollback readiness.
- [[reel-16]] - staging and health checks.
- [[reel-19]] - dev/staging/prod flow.
- [[reel-20]] - rollback depends on git and CI.
- [[reel-39]] - canary and feature flag rollback.
- [[reel-81]] - hosting model must match runtime shape before release.
- [[reel-86]] - deploy speed, dependency caching, and canary lanes affect release safety.
- [[reel-101]] - canary launch strategy applies to product access, not only infrastructure.

## Why It Matters
Bad deploys are inevitable. The question is whether they affect everyone and how quickly the system can return to a known-good state.

## Verification Questions
- Is production deployment gated by preview or staging?
- Are changes small enough to diagnose?
- Is rollback tested and documented?
- Are risky features behind flags or canaries?
- Are error thresholds wired to promotion or rollback?
- Does the hosting platform support the workload shape the release depends on?

## Agent Notes
The rollback path must be known before production, not discovered during an incident.
