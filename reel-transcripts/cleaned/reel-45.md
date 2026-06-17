---
reel: 45
source_file: "reel 45.txt"
source_url: "https://www.instagram.com/p/DZSYNBNxE1k/"
scan_area: "async-jobs"
tags: [murphyscan, background-jobs, queues, idempotency, retries, timeouts]
---
# Reel 45 - Move Slow Work to Background Jobs

## Summary
Long-running requests create timeouts and duplicate work when users retry. The reel recommends creating job records, returning job IDs immediately, processing work asynchronously, retrying failures, and using idempotency keys.

## Verification Checklist
- Convert long-running exports, reports, emails, or AI jobs into background jobs.
- Return a job ID and status immediately instead of holding the HTTP request open.
- Use idempotency keys so repeated clicks or retries do not create duplicate jobs.

## Skill Signal
Use this as an async-work scan for timeout-prone operations.

