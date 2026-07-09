---
concept: "async-jobs-idempotency"
tags: [murphyscan, concept, jobs, reliability]
layers: ["02 APIs and Backend Logic", "06 Cloud and Compute", "13 Availability and Recovery"]
source_reels: [reel-18, reel-23, reel-45, reel-63, reel-111]
---
# Async Jobs and Idempotency

## Related Layers
- [[02 APIs and Backend Logic]]
- [[06 Cloud and Compute]]
- [[13 Availability and Recovery]]

## Source Reels
- [[reel-18]] - serverless timeouts expose missing background architecture.
- [[reel-23]] - use platforms built for persistent or background work.
- [[reel-45]] - job IDs, workers, retries, and idempotency keys.
- [[reel-63]] - heavy operations should be queued before launch.
- [[reel-111]] - checkout should return after durable payment success while non-critical follow-up work runs in monitored queues.

## Why It Matters
Long-running HTTP requests time out, users click again, and duplicate jobs or partial work follow. Async design makes slow work recoverable and observable.

## Verification Questions
- Do exports, report generation, email batches, and AI pipelines use background jobs?
- Does the API return a job ID and status quickly?
- Are retries bounded and exponential?
- Are idempotency keys used for user-triggered jobs?
- Are checkout follow-up tasks such as email, analytics, CRM sync, or fulfillment side work decoupled from the user-facing response?
- Are queue failures logged and alerted instead of silently accumulating?

## Agent Notes
Flag any request expected to run longer than platform limits. It belongs in a queue or worker.
