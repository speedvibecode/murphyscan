# Case Study: NextAuth.js Example

## Repo context

- Target repo: [`nextauthjs/next-auth-example`](https://github.com/nextauthjs/next-auth-example)
- Product shape: authentication example app for Auth.js / NextAuth.js
- Scan date: June 18, 2026
- Scan basis: real repo review plus local install/build validation

## Why this was a useful MurphyScan target

This is a good MurphyScan calibration repo because it is easy for agents to over-credit it.

It has:
- real auth flows
- protected routes
- multiple providers
- a deployable Next.js app

But it is still an example app, not a production-ready product. MurphyScan should be able to say that clearly.

## Execution evidence

Local validation performed:
- `npm install` succeeded
- `npm run build` succeeded

Build note:
- Next.js emitted a warning that `middleware` is deprecated in favor of `proxy`

## MurphyScan verdict

`Good auth example, not launch ready as a real public app without product-specific hardening.`

This repo passes the "does the auth example work" bar. It does not pass the "is this a production app somebody should launch as-is" bar.

## What MurphyScan found

### What was already strong

#### Auth patterns are demonstrated cleanly

The repo shows:
- route protection with `auth()`
- middleware-based gating
- provider configuration
- JWT-backed session strategy

Evidence:
- `auth.ts`
- `middleware.ts`
- `app/api/protected/route.ts`

#### Buildability is real

The repo installs and builds successfully, which matters for credibility.

Evidence:
- local `npm install` result on June 18, 2026
- local `npm run build` result on June 18, 2026

### What MurphyScan caught

#### 1. This is an example app, not a launch-ready product surface

The README and repo structure make that explicit. MurphyScan should not confuse an auth demonstration with a full product readiness surface.

MurphyScan classification:
- scope warning
- missing launch controls

Evidence:
- `README.md`

#### 2. Session and WebAuthn state are intentionally non-durable in the demo setup

Outside Vercel, the repo falls back to in-memory storage. The privacy policy also states that the KV-backed demo session/authenticator data resets every two hours and is deleted by cron.

That is acceptable for an example. It is not acceptable as a production persistence model for most real apps.

MurphyScan classification:
- launch blocker if used as-is for a real product

Evidence:
- `auth.ts`
- `app/policy/page.tsx`

#### 3. There is no product-specific authorization model

The repo demonstrates authentication and some protected paths, but there is no real application authorization surface such as tenant isolation, role hierarchy, resource ownership model, or admin auditability.

That is fine for a library example. It is still missing from a launch-readiness perspective.

MurphyScan classification:
- missing launch control

Evidence:
- `auth.ts`
- `app/`

#### 4. Rate limiting, incident recovery, and operational runbooks are not part of the example

MurphyScan did not find meaningful repo-level evidence for:
- rate limiting
- alerting
- backup and restore proof
- rollback procedure

Again, that is expected for an example app. It still means the repo is not production-ready as an app.

MurphyScan classification:
- missing launch controls
- scale/resilience gaps

Evidence:
- repo-level scan on June 18, 2026

#### 5. The build surfaced a maintenance warning on middleware

The build completed, but Next.js warned that the `middleware` convention is deprecated in favor of `proxy`.

MurphyScan classification:
- maintenance gap

Evidence:
- local `npm run build` result on June 18, 2026
- `middleware.ts`

## Launch blockers vs improvements

### Why this would be blocked as a real app launch

1. Non-durable or reset-prone persistence model for sessions/authenticator state in the example setup.
2. No product-specific authorization layer.
3. No meaningful operational controls for abuse, alerting, recovery, or rollback.

### What this repo is actually strong at

1. Demonstrating Auth.js integration patterns.
2. Showing protected-route mechanics.
3. Providing a clean starting point for auth implementation.

## What MurphyScan learned from this repo

This case study matters because it proves MurphyScan can avoid a common mistake:

`Auth example quality is not the same thing as app launch readiness.`

A weaker audit would praise the build and auth flows, then stop. MurphyScan correctly keeps going and asks whether there is a durable, operationally safe product behind the example. In this case, there is not, and the right answer is to say so plainly.
