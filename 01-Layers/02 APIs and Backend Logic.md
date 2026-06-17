---
layer: 02
image_label: "APIS & BACKEND LOGIC"
tags: [murphyscan, layer, backend, api]
source_reels: [reel-06, reel-11, reel-23, reel-45, reel-49, reel-52, reel-55]
---
# 02 APIs and Backend Logic

Up: [[Layer Map]] | Home: [[MurphyScan Vault Home]]

## Purpose
The backend layer is the enforcement point for business rules, validation, external calls, async work, and paid endpoints.

## Core Concepts
- [[Backend Boundary and API Wrappers]]
- [[Async Jobs and Idempotency]]
- [[Rate Limiting and API Gateways]]
- [[AI Output Validation and Evals]]
- [[Client Trust Boundary]]

## Source Reels
- [[reel-06]] - isolate third-party APIs behind wrappers.
- [[reel-11]] - backend enforces validation, auth, and rate limits.
- [[reel-23]] - split frontend and backend when the platform fit changes.
- [[reel-45]] - slow work belongs in jobs, not HTTP requests.
- [[reel-49]] - AI endpoints need gateway protection.
- [[reel-52]] - validate AI output before users see it.
- [[reel-55]] - business rules belong server-side.

## What MurphyScan Should Verify
- API calls to providers are centralized and failure-aware.
- Server-side validation exists for every privileged or paid operation.
- Long-running actions use jobs, status, retries, and idempotency keys.
- Expensive endpoints are authenticated, schema-validated, and capped.
- The frontend is treated as untrusted input.

## Repetition Notes
This layer overlaps heavily with [[09 Rate Limiting]] and [[08 Security and RLS]]. Keep enforcement mechanics here; keep policy and abuse controls in their dedicated layers.

