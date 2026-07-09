---
concept: "load-testing-scaling-cliffs"
tags: [murphyscan, concept, load-testing, scaling]
layers: ["11 Load Balancing and Scaling"]
source_reels: [reel-27, reel-62, reel-63, reel-115, reel-117, reel-120, reel-127]
---
# Load Testing and Scaling Cliffs

## Related Layers
- [[11 Load Balancing and Scaling]]

## Source Reels
- [[reel-27]] - survive a hundred concurrent users.
- [[reel-62]] - load test before first traffic.
- [[reel-63]] - find scaling cliffs before launch.
- [[reel-115]] - diagnose connection, query, and read/write bottlenecks before scaling blindly.
- [[reel-117]] - provider plan ceilings can become the first launch-day bottleneck.
- [[reel-120]] - timeout, payload, bandwidth, and concurrency limits must match real feature behavior.
- [[reel-127]] - cache stampedes can turn expiration into a traffic spike.

## Why It Matters
Apps often work at 10 users and fail at 100 or 1000 because queries, connections, API calls, and synchronous work were never stress tested.

## Verification Questions
- Has k6, Artillery, or equivalent simulated expected launch traffic?
- What was the first bottleneck?
- Did database connections, external APIs, or CPU saturate?
- Were heavy operations queued or cached after the test?
- Did the test cover provider plan limits such as serverless concurrency, function timeout, payload size, and bandwidth?
- Did it include cache-expiry or hot-key behavior where traffic can stampede the database?

## Agent Notes
Load testing should produce numbers: users, duration, failure rate, latency, and bottleneck.
