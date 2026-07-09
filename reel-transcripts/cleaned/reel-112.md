---
reel: 112
source_file: "reel 112.txt"
source_url: "https://www.instagram.com/reel/DabfLrfF-OA/"
published_at: "2026-07-05T23:23:32.000Z"
scan_area: "ci-cost-controls"
tags: [murphyscan, ci-cd, cost, self-hosted-runners, path-filters, usage-alerts]
---
# Reel 112 - Keep CI From Surprising the Team

## Summary
CI/CD scale includes cost. The reel recommends self-hosted runners when minutes become expensive, path-based conditional pipelines so small changes do not run irrelevant suites, and usage alerts before the monthly allocation is exhausted.

## Verification Checklist
- Check whether CI minute consumption, concurrency, and hosted-runner cost are visible to the team.
- Verify path filters or conditional jobs avoid running expensive suites for docs, marketing, or unrelated changes.
- Consider self-hosted runners only when the operational burden is justified by repeated CI cost pressure.
- Confirm usage alerts fire before the team hits a hard limit mid-sprint.

## Skill Signal
Use this as a CI-cost scan for runner strategy, conditional pipeline design, and usage monitoring.
