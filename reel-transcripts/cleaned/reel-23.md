---
reel: 23
source_file: "reel 23.txt"
source_url: "https://www.instagram.com/p/DYzc-WUAOlA/"
scan_area: "platform-fit"
tags: [murphyscan, vercel, railway, render, background-jobs, architecture]
---
# Reel 23 - Know When to Graduate Platforms

## Summary
Serverless frontend platforms are excellent for many web apps but become a mismatch for long-running tasks, background jobs, websockets, and persistent compute. The reel recommends splitting the stack when the workload outgrows the hosting model.

## Verification Checklist
- Identify functions or requests hitting timeout limits.
- Check whether background jobs, cron tasks, or websockets require persistent compute.
- Consider keeping the frontend on an edge platform while moving backend work to Railway, Render, Fly.io, or similar.

## Skill Signal
Use this as a platform-fit scan for serverless timeout and background-job failures.

