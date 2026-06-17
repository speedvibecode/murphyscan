---
concept: "load-testing-scaling-cliffs"
tags: [murphyscan, concept, load-testing, scaling]
layers: ["11 Load Balancing and Scaling"]
source_reels: [reel-27, reel-62, reel-63]
---
# Load Testing and Scaling Cliffs

## Related Layers
- [[11 Load Balancing and Scaling]]

## Source Reels
- [[reel-27]] - survive a hundred concurrent users.
- [[reel-62]] - load test before first traffic.
- [[reel-63]] - find scaling cliffs before launch.

## Why It Matters
Apps often work at 10 users and fail at 100 or 1000 because queries, connections, API calls, and synchronous work were never stress tested.

## Verification Questions
- Has k6, Artillery, or equivalent simulated expected launch traffic?
- What was the first bottleneck?
- Did database connections, external APIs, or CPU saturate?
- Were heavy operations queued or cached after the test?

## Agent Notes
Load testing should produce numbers: users, duration, failure rate, latency, and bottleneck.

