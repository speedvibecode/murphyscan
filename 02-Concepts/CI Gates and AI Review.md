---
concept: "ci-gates-ai-review"
tags: [murphyscan, concept, ci-cd, code-review]
layers: ["07 CI-CD and Version Control"]
source_reels: [reel-20, reel-42, reel-54, reel-56, reel-65, reel-73, reel-86, reel-90, reel-97, reel-103, reel-112, reel-113, reel-123, reel-124, reel-126]
---
# CI Gates and AI Review

## Related Layers
- [[07 CI-CD and Version Control]]

## Source Reels
- [[reel-20]] - CI/CD checks before deploy.
- [[reel-42]] - AI reviewer focused on production risk.
- [[reel-54]] - model-as-judge and regression evals.
- [[reel-56]] - eval-based tests and cost gates for AI.
- [[reel-65]] - automated baseline security scans belong before launch.
- [[reel-73]] - dependency scanning and lockfiles are part of CI discipline.
- [[reel-86]] - parallelized pipelines and cached builds reduce risky release batching.
- [[reel-90]] - CI failures often expose hidden local assumptions.
- [[reel-97]] - API changes need versioning and changelog discipline.
- [[reel-103]] - external AI instructions and skill files need trust review too.
- [[reel-112]] - CI cost controls include runner strategy, path filters, and usage alerts.
- [[reel-113]] - AI-generated code needs explicit review discipline before production trust.
- [[reel-123]] - AI-generated code should be paired with security audits and operational checks.
- [[reel-124]] - AI assistant context from PRs and docs can become a security attack vector.
- [[reel-126]] - CI free-tier ceilings can stop required gates or create surprise overage spend.

## Why It Matters
AI can help write code and review it, but only if the review is specific to architecture, security, logic, and production failure modes.

## Verification Questions
- Do PRs run automated build, test, lint, and security checks?
- Is AI review configured to ignore style noise and focus on correctness and risk?
- Do critical review findings block merge?
- Do AI features have eval gates and cost checks?
- Are local and CI environments close enough that test results mean the same thing?
- Are untrusted automation artifacts or AI resources reviewed before they influence release-critical work?
- Are expensive CI stages conditional where safe, and are usage alerts configured before hard limits stop the team?
- Does AI-generated code receive production-risk review in auth, data, payments, secrets, and API boundary paths?
- Do CI quotas, minute limits, and overage prices have alerts before required checks stop running?
- Are PR descriptions, issues, docs, and comments treated as untrusted AI-assistant context in review workflows?

## Agent Notes
Require explicit thresholds. "AI reviewed it" is not enough.
