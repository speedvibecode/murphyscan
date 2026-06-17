---
concept: "ai-output-validation-evals"
tags: [murphyscan, concept, ai, evals]
layers: ["02 APIs and Backend Logic", "07 CI-CD and Version Control", "12 Error Tracking and Logs"]
source_reels: [reel-52, reel-54, reel-56]
---
# AI Output Validation and Evals

## Related Layers
- [[02 APIs and Backend Logic]]
- [[07 CI-CD and Version Control]]
- [[12 Error Tracking and Logs]]

## Source Reels
- [[reel-52]] - validate, retry, and degrade AI output.
- [[reel-54]] - model-as-judge, real failure test suites, version comparisons.
- [[reel-56]] - eval-based CI/CD and quality-gated canaries.

## Why It Matters
AI features fail probabilistically. Production systems need schema validation, safety checks, retries with feedback, regression evals, and canary quality gates.

## Verification Questions
- Are model outputs validated before user display or persistence?
- Are retries bounded and guided by validation failures?
- Does a regression suite include real user-reported failures?
- Are prompt and model changes compared on the same test set?
- Are quality, latency, and cost thresholds part of CI or canary gates?

## Agent Notes
Exact string matching is usually the wrong test for generative output.

