---
layer: 05
image_label: "HOSTING & DEPLOYMENT"
tags: [murphyscan, layer, deployment, hosting]
source_reels: [reel-05, reel-16, reel-19, reel-23, reel-28, reel-39, reel-81, reel-86, reel-88, reel-101]
---
# 05 Hosting and Deployment

Up: [[Layer Map]] | Home: [[MurphyScan Vault Home]]

## Purpose
The deployment layer verifies that releases are staged, observable, reversible, and matched to the hosting platform.

## Core Concepts
- [[Deployment Safety and Rollbacks]]
- [[Staging Environments and Branching]]
- [[Platform Fit and Background Jobs]]

## Source Reels
- [[reel-05]] - preview deploys, small changes, rollback paths.
- [[reel-16]] - staging before production.
- [[reel-19]] - dev, staging, and production environments.
- [[reel-23]] - split stack when Vercel-style hosting is not enough.
- [[reel-28]] - simple DevOps stack with monitoring, caching, and Railway.
- [[reel-39]] - canary rollouts and feature flags.
- [[reel-81]] - Vercel, Railway, and VPS have different workload and ops ceilings.
- [[reel-86]] - deployment speed, caching, and canary lanes affect release risk.
- [[reel-88]] - managed versus self-hosted is a real operating model decision.
- [[reel-101]] - staged launch access is part of rollout safety too.

## What MurphyScan Should Verify
- Production is not the first place a change is tested.
- Preview or staging URLs exist for risky changes.
- Rollback is documented and fast.
- Feature flags or canaries protect risky releases.
- Hosting limits are known before launch.
- Release flow can limit blast radius by audience or traffic slice, not only by branch.

## Repetition Notes
Deployment safety connects to [[07 CI-CD and Version Control]]. This layer is about release behavior; CI/CD is about automated gates before and during release.
