---
layer: 07
image_label: "CI/CD & VERSION CONTROL"
tags: [murphyscan, layer, ci-cd, git]
source_reels: [reel-20, reel-39, reel-42, reel-54, reel-56, reel-58]
---
# 07 CI-CD and Version Control

Up: [[Layer Map]] | Home: [[MurphyScan Vault Home]]

## Purpose
The CI/CD layer verifies that code changes are traceable, reviewed, tested, and automatically blocked when they fail quality, security, or cost gates.

## Core Concepts
- [[Staging Environments and Branching]]
- [[CI Gates and AI Review]]
- [[AI Output Validation and Evals]]
- [[Deployment Safety and Rollbacks]]

## Source Reels
- [[reel-20]] - CI/CD as a safety net.
- [[reel-39]] - automated canary promotion and rollback.
- [[reel-42]] - AI reviewer in the PR pipeline.
- [[reel-54]] - model-as-judge and regression evals.
- [[reel-56]] - eval-based AI CI/CD and cost gates.
- [[reel-58]] - branching strategy and protected main.

## What MurphyScan Should Verify
- The repo uses version control and a protected production branch.
- Pull requests run build, tests, lint, security, and review gates where appropriate.
- AI changes use evals instead of brittle exact-output assertions.
- Critical AI review findings block merge.
- Canary quality, latency, and error thresholds can block release.

## Repetition Notes
This is where `/murphyscan` should become most concrete: commands, status checks, CI files, and branch protections can be inspected directly.

