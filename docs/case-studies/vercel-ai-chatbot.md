# Case Study: Vercel AI Chatbot

## Repo context

- Target repo: [`vercel/ai-chatbot`](https://github.com/vercel/ai-chatbot)
- Product shape: production-style AI chat app template with Auth.js, Neon/Postgres, Redis-backed rate limiting, Vercel AI Gateway, Blob uploads, and Playwright coverage
- Scan date: June 18, 2026
- Scan basis: real repo review plus local install/build validation

## Why this was a good MurphyScan target

This repo is useful because it already looks like a serious modern AI app:
- authentication
- database persistence
- file uploads
- paid model routing
- rate limiting
- telemetry
- test workflows

That makes it a better signal test than a toy chatbot.

## Execution evidence

Local validation performed:
- `npm install` failed with dependency resolution errors
- `corepack pnpm install --frozen-lockfile` succeeded
- `corepack pnpm build` succeeded

Build note:
- the build printed `POSTGRES_URL not defined, skipping migrations`

## MurphyScan verdict

`Strong launch candidate, but not fully launch-proven from repo evidence alone.`

This is one of the strongest forward-test repos MurphyScan has scanned so far. It has real controls in place. The remaining gaps are not "missing framework setup" problems. They are operational-proof problems around expensive AI traffic, environment hardening, and recovery evidence.

## What MurphyScan found

### What was already strong

#### Auth and ownership boundaries are real

The repo enforces authenticated access for chat APIs and checks ownership before reading or mutating user-scoped resources.

Evidence:
- `app/(chat)/api/chat/route.ts`
- `app/(chat)/api/document/route.ts`
- `app/(chat)/api/history/route.ts`
- `app/(chat)/api/messages/route.ts`
- `app/(chat)/api/vote/route.ts`

#### AI abuse controls are better than average

The chat route layers multiple controls:
- BotID check
- IP-based rate limiting
- per-user hourly message caps
- user entitlements by user type

That is materially better than most public AI templates.

Evidence:
- `app/(chat)/api/chat/route.ts`
- `lib/ratelimit.ts`
- `lib/ai/entitlements.ts`

#### Observability is at least wired

The repo registers OpenTelemetry through Vercel’s OTel integration. MurphyScan does not treat that as proof of alerting, but it does count as better-than-decorative instrumentation groundwork.

Evidence:
- `instrumentation.ts`

#### CI and validation surface exist

The repo includes Playwright workflows and a real test suite. That is meaningful release discipline, even if it is not the whole launch story.

Evidence:
- `.github/workflows/playwright.yml`
- `.github/workflows/lint.yml`
- `tests/`

### What MurphyScan caught

#### 1. The install path is not frictionless across package managers

`npm install` failed on a dependency tree conflict involving OpenTelemetry packages, while the intended `pnpm` install path succeeded.

MurphyScan classification:
- missing launch control

Why it matters:
- this is not a production blocker for teams using the intended toolchain
- it is still real operational friction for adopters, contributors, and quick validation workflows

Evidence:
- local `npm install` result on June 18, 2026
- `package.json`
- `pnpm-lock.yaml`

#### 2. Expensive endpoint protection still depends on optional infrastructure being present

The repo has IP rate limiting, but it only becomes active in production and only when `REDIS_URL` is configured and the client is ready.

If Redis is absent or unavailable, the IP rate limit path silently does nothing.

MurphyScan classification:
- missing launch control
- scale/cost risk

Evidence:
- `lib/ratelimit.ts`
- `app/(chat)/api/chat/route.ts`
- `.env.example`

#### 3. Build success does not prove database readiness

The build passed while explicitly skipping migrations because `POSTGRES_URL` was not set.

That means:
- buildability is good
- migration and database readiness are still external to the build proof

MurphyScan classification:
- missing launch control

Evidence:
- local `corepack pnpm build` result on June 18, 2026
- `lib/db/migrate.ts`
- `package.json`

#### 4. Telemetry exists, but alerting and recovery proof are not visible

MurphyScan treats OTel registration as instrumentation, not as incident readiness.

The repo does not visibly prove:
- alert routing
- incident thresholds
- backup verification
- restore runbooks

MurphyScan classification:
- scale/resilience gap

Evidence:
- `instrumentation.ts`
- repo-level docs and workflows reviewed on June 18, 2026

## Launch blockers vs improvements

### Notable launch controls still worth tightening

1. Make expensive-endpoint rate limiting fail closed, or at least surface a strong warning, when Redis is missing in production.
2. Add a release preflight that proves required env vars and external backing services are present before shipping.
3. Add explicit operational evidence for backup, restore, and alerting instead of relying on integrations being implied.

### Scale and resilience improvements

1. Add stronger visibility into Redis/rate-limit health.
2. Add clear AI cost dashboards and alerting evidence.
3. Add recovery/runbook documentation for Postgres, Blob, and Redis dependency failure.

## What MurphyScan learned from this repo

This repo showed MurphyScan something important:

`A strong AI app template can still be under-proven operationally.`

The implementation quality here is high. MurphyScan did not need to invent weak findings. The useful output was to distinguish solid application engineering from still-missing operational proof.
