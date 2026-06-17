---
layer: 05
image_label: "HOSTING & DEPLOYMENT"
tags: [murphyscan, layer, deployment, hosting]
source_reels: [reel-05, reel-16, reel-19, reel-23, reel-28, reel-39]
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

## What MurphyScan Should Verify
- Production is not the first place a change is tested.
- Preview or staging URLs exist for risky changes.
- Rollback is documented and fast.
- Feature flags or canaries protect risky releases.
- Hosting limits are known before launch.

## Repetition Notes
Deployment safety connects to [[07 CI-CD and Version Control]]. This layer is about release behavior; CI/CD is about automated gates before and during release.

