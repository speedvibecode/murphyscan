---
layer: 06
image_label: "CLOUD & COMPUTE"
tags: [murphyscan, layer, cloud, compute]
source_reels: [reel-18, reel-23, reel-28, reel-45, reel-46, reel-51, reel-69, reel-74, reel-80, reel-81, reel-87, reel-88, reel-102, reel-104]
---
# 06 Cloud and Compute

Up: [[Layer Map]] | Home: [[MurphyScan Vault Home]]

## Purpose
The compute layer checks whether the infrastructure can actually run the workload, especially long-running, scheduled, background, websocket, or AI-heavy work.

## Core Concepts
- [[Platform Fit and Background Jobs]]
- [[Async Jobs and Idempotency]]
- [[Cloud Cost Discipline]]

## Source Reels
- [[reel-18]] - free-tier compute limits and background job gaps.
- [[reel-23]] - graduate to platforms suited for persistent compute.
- [[reel-28]] - Railway, Upstash, and Sentry as a practical ops stack.
- [[reel-45]] - job records, workers, retries, and idempotency.
- [[reel-46]] - right-size resources and set spend alerts.
- [[reel-51]] - unbundle infrastructure layers when they scale differently.
- [[reel-69]] - serverless database engine and branching fit still matter operationally.
- [[reel-74]] - object storage and CDN should own file delivery.
- [[reel-80]] - platform convenience can trade away portability.
- [[reel-81]] - deployment platform must fit runtime shape.
- [[reel-87]] - idle resources, right-sizing, and egress dominate surprise cloud spend.
- [[reel-88]] - managed services often buy time more cheaply than self-hosting.
- [[reel-102]] - leaving Supabase means choosing a new architecture ceiling.
- [[reel-104]] - database platform choice should follow throughput shape.

## What MurphyScan Should Verify
- Timeouts, memory limits, response size limits, and background job support.
- Long-running actions are not forced through synchronous HTTP.
- Compute can scale down or up based on real usage.
- Cost alerts and hard caps exist where providers support them.
- Platform choices fit workload shape, not just demo convenience.
- Cross-region or cross-provider egress is understood before it becomes a hidden bill.

## Repetition Notes
Cloud compute overlaps with deployment and scaling. Use this layer when the question is "can this workload run here?"
