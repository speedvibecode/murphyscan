---
concept: "platform-fit-background-jobs"
tags: [murphyscan, concept, platform, compute]
layers: ["05 Hosting and Deployment", "06 Cloud and Compute"]
source_reels: [reel-18, reel-23, reel-28, reel-51]
---
# Platform Fit and Background Jobs

## Related Layers
- [[05 Hosting and Deployment]]
- [[06 Cloud and Compute]]

## Source Reels
- [[reel-18]] - free-tier limits for real work.
- [[reel-23]] - use Railway, Render, Fly.io, or similar when workload requires it.
- [[reel-28]] - persistent servers for scheduled and background work.
- [[reel-51]] - unbundle platforms when layers scale differently.

## Why It Matters
Hosting that is perfect for a landing page may fail for file processing, AI pipelines, cron jobs, websockets, or persistent workers.

## Verification Questions
- Does the app hit function timeout or response size limits?
- Are cron jobs, workers, or websockets required?
- Can frontend and backend be deployed separately?
- Does each platform choice map to a workload need?

## Agent Notes
Do not call Vercel or Supabase "bad"; identify fit and limits.

