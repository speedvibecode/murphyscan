---
reel: 90
source_file: "reel 90.txt"
source_url: "https://www.instagram.com/p/DaBItqrFHiF/"
scan_area: "ci-parity"
tags: [murphyscan, ci-cd, tests, env-vars, seed-data, timeouts]
---
# Reel 90 - CI Failing Means the Assumption Failed

## Summary
When tests pass locally and fail in CI, the environment is exposing hidden assumptions. The reel recommends checking fresh environment variables, deterministic database state, and race conditions or timeout behavior that only show up under CI constraints.

## Verification Checklist
- Compare local and CI environment variables and confirm tests fail loudly on missing values.
- Reset database state so tests do not rely on leftovers from prior local runs.
- Investigate race conditions, resource limits, and timeout assumptions instead of re-running until green.

## Skill Signal
Use this as a CI-parity scan for hidden local-state dependency.
