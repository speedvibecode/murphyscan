---
reel: 18
source_file: "reel 18.txt"
source_url: "https://www.instagram.com/p/DYsVm3PvLih/"
scan_area: "compute-limits"
tags: [murphyscan, infrastructure, serverless, background-jobs, platform-limits]
---
# Reel 18 - Free Tier Compute Limits

## Summary
Free hosting tiers work for demos but can fail once work exceeds function timeouts, response limits, or missing background job support. The reel says production architecture starts when the platform limits are acknowledged.

## Verification Checklist
- Identify hosting limits for timeouts, response size, deploy count, and background jobs.
- Check whether long-running work is being forced into request-response functions.
- Decide whether background jobs or persistent compute belong on a different platform.

## Skill Signal
Use this as an infrastructure-limit scan for serverless and free-tier assumptions.

