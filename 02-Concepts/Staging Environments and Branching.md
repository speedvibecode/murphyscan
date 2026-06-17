---
concept: "staging-environments-branching"
tags: [murphyscan, concept, git, staging]
layers: ["05 Hosting and Deployment", "07 CI-CD and Version Control"]
source_reels: [reel-16, reel-19, reel-58]
---
# Staging Environments and Branching

## Related Layers
- [[05 Hosting and Deployment]]
- [[07 CI-CD and Version Control]]

## Source Reels
- [[reel-16]] - staging URLs and automated checks.
- [[reel-19]] - main as production, dev as playground.
- [[reel-58]] - GitHub Flow before GitFlow complexity.

## Why It Matters
Branching and environments determine where code can break safely. Without them, production becomes the test environment.

## Verification Questions
- Is `main` protected and mapped to production?
- Are feature branches short-lived and reviewed?
- Does each PR or branch get a preview or staging environment?
- Is GitFlow-style complexity justified by release process?

## Agent Notes
Start simple: protected main, feature branches, PRs, and preview deploys.

