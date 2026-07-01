---
layer: 04
image_label: "AUTH & PERMISSIONS"
tags: [murphyscan, layer, auth, permissions]
source_reels: [reel-13, reel-14, reel-15, reel-22, reel-26, reel-55, reel-59, reel-60, reel-64, reel-70, reel-71, reel-72, reel-77, reel-84, reel-96, reel-100]
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
- [[reel-70]] - database-enforced RLS beats application filtering.
- [[reel-71]] - roles only count where the API enforces them.
- [[reel-72]] - auth providers should match the future customer and compliance shape.
- [[reel-77]] - self-hosted auth buys control and operational burden together.
- [[reel-84]] - unsafe JWT defaults can invalidate the whole auth story.
- [[reel-96]] - permissions should scale beyond an `is_admin` boolean.
- [[reel-100]] - service-role paths can bypass every RLS policy you wrote.

## What MurphyScan Should Verify
- Managed auth provider or explicit deep review for custom auth.
- Protected routes cannot be accessed after logout.
- APIs enforce role, tenant, and resource ownership.
- Server-side session invalidation exists.
- RLS or equivalent database policies block cross-user data access.
- JWT validation pins expected algorithms and rejects unsafe token forms.
- Service-role or bypass credentials are not used carelessly on user-facing data paths.

## Repetition Notes
Auth is repeated across many reels because it is a root failure mode. Treat it as a launch-blocking layer, not a feature checklist.
