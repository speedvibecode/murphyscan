---
layer: 04
image_label: "AUTH & PERMISSIONS"
tags: [murphyscan, layer, auth, permissions]
source_reels: [reel-13, reel-14, reel-15, reel-22, reel-26, reel-55, reel-59, reel-60, reel-64]
---
# 04 Auth and Permissions

Up: [[Layer Map]] | Home: [[MurphyScan Vault Home]]

## Purpose
The auth layer verifies who the user is, what they can do, and whether permissions survive direct URL, API, and token manipulation.

## Core Concepts
- [[Managed Auth and Session Security]]
- [[Authorization and Row-Level Security]]
- [[Client Trust Boundary]]
- [[Multi-Tenancy and Tenant Isolation]]

## Source Reels
- [[reel-13]] - test auth boundaries and secrets.
- [[reel-14]] - authentication is not authorization.
- [[reel-15]] - move secrets behind server-side proxy routes.
- [[reel-22]] - RLS policies for user-owned tables.
- [[reel-26]] - tenant isolation at database level.
- [[reel-55]] - permission checks do not belong only in React.
- [[reel-59]] - avoid custom auth.
- [[reel-60]] - token expiry, rotation, and true logout.
- [[reel-64]] - managed auth, logout testing, and RLS foundation.

## What MurphyScan Should Verify
- Managed auth provider or explicit deep review for custom auth.
- Protected routes cannot be accessed after logout.
- APIs enforce role, tenant, and resource ownership.
- Server-side session invalidation exists.
- RLS or equivalent database policies block cross-user data access.

## Repetition Notes
Auth is repeated across many reels because it is a root failure mode. Treat it as a launch-blocking layer, not a feature checklist.

