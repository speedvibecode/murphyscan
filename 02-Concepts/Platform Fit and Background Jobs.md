---
concept: "platform-fit-background-jobs"
tags: [murphyscan, concept, platform, compute]
layers: ["05 Hosting and Deployment", "06 Cloud and Compute"]
source_reels: [reel-18, reel-23, reel-28, reel-51, reel-69, reel-74, reel-80, reel-81, reel-88, reel-102, reel-104]
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
- [[reel-69]] - serverless database choice still depends on engine and migration fit.
- [[reel-74]] - object storage and CDN should own media delivery, not the primary database.
- [[reel-80]] - reactive platforms trade portability for convenience.
- [[reel-81]] - Vercel, Railway, and VPS each fit different operational shapes.
- [[reel-88]] - managed versus self-hosted is a time-versus-money decision.
- [[reel-102]] - graduating from a bundled platform means choosing a new ceiling.
- [[reel-104]] - database platform choice follows workload shape and portability goals.

## Why It Matters
Hosting that is perfect for a landing page may fail for file processing, AI pipelines, cron jobs, websockets, or persistent workers.

## Verification Questions
- Does the app hit function timeout or response size limits?
- Are cron jobs, workers, or websockets required?
- Can frontend and backend be deployed separately?
- Does each platform choice map to a workload need?
- Are media storage, databases, and compute each deployed on infrastructure suited to their job?

## Agent Notes
Do not call Vercel or Supabase "bad"; identify fit and limits.
