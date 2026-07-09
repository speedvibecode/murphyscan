---
layer: 07
image_label: "CI/CD & VERSION CONTROL"
tags: [murphyscan, layer, ci-cd, git]
source_reels: [reel-20, reel-39, reel-42, reel-54, reel-56, reel-58, reel-65, reel-73, reel-86, reel-90, reel-97, reel-99, reel-103, reel-112, reel-113, reel-123, reel-124, reel-126]
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
- [[reel-65]] - automated baseline security scanning belongs before launch.
- [[reel-73]] - dependency audits and lockfiles are part of release safety.
- [[reel-86]] - pipelines should be parallelized, cached, and canary-aware.
- [[reel-90]] - CI exposes hidden local assumptions about env, seed data, and timing.
- [[reel-97]] - API changes need versioning and changelog discipline.
- [[reel-99]] - secret scans should include git history, not only working tree files.
- [[reel-103]] - external AI instructions and skill files are part of the release trust surface.
- [[reel-112]] - CI needs cost and runtime controls, not just pass/fail scripts.
- [[reel-113]] - AI-generated code still needs engineering review, tests, and accountable merge gates.
- [[reel-123]] - AI-generated code should be paired with security audits and operational checks.
- [[reel-124]] - AI assistants can be attacked through poisoned PR, issue, doc, or comment context.
- [[reel-126]] - CI free-tier ceilings can stop required checks or create surprise overage spend.

## What MurphyScan Should Verify
- The repo uses version control and a protected production branch.
- Pull requests run build, tests, lint, security, and review gates where appropriate.
- AI changes use evals instead of brittle exact-output assertions.
- Critical AI review findings block merge.
- Canary quality, latency, and error thresholds can block release.
- CI is trusted over local green runs when the two disagree, and the mismatch gets root-caused.
- CI usage is capped or alerted so automation cannot create runaway spend.
- AI-authored changes are reviewed for architecture, data flow, and edge cases before merge.
- CI quota exhaustion cannot silently remove required checks.
- PR descriptions, issues, docs, and comments are treated as untrusted AI-assistant context where tooling reads them.

## Repetition Notes
This is where `/murphyscan` should become most concrete: commands, status checks, CI files, and branch protections can be inspected directly.
