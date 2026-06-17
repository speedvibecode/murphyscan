---
reel: 19
source_file: "reel 19.txt"
source_url: "https://www.instagram.com/p/DYuVqaeRi8q/"
scan_area: "environment-strategy"
tags: [murphyscan, environments, branches, staging, deployment-checklist]
---
# Reel 19 - Three Environments

## Summary
One environment is fragile because every change lands where users are. The reel recommends a simple branch/environment strategy: dev for work, staging for validation, main for production.

## Verification Checklist
- Confirm `main` maps to production and active work happens outside it.
- Verify staging URLs exist for branches or previews.
- Check the deploy checklist: test staging, review diff, merge to main, then deploy.

## Skill Signal
Use this as an environment-strategy scan for projects that deploy directly from local or main.

