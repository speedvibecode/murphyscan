---
reel: 56
source_file: "reel 56.txt"
source_url: "https://www.instagram.com/p/DZiVwxixLrb/"
scan_area: "ai-ci-cd"
tags: [murphyscan, ai-evals, ci-cd, canary, cost-gates, quality-gates]
---
# Reel 56 - CI/CD for Non-Deterministic AI

## Summary
AI outputs are not deterministic, so exact string assertions create flaky pipelines. The reel recommends evaluation-based tests, inline cost checks, and canary quality gates for AI deployments.

## Verification Checklist
- Replace brittle exact-output tests with scored evaluation criteria.
- Estimate token and model cost for prompt or context changes before deploy.
- Canary AI changes and rollback automatically if quality or latency crosses thresholds.

## Skill Signal
Use this as an AI CI/CD scan for quality, cost, and deployment gates.

