# MurphyScan Report Example

## Verdict

`Launch blocked by critical controls`

The app is not ready for public launch because user-data isolation and recovery controls are incomplete.

## Blockers

### 1. Auth and permissions

- Issue: API routes trust client-provided user IDs without enforcing ownership server-side.
- Why it matters: a logged-in user can potentially access another user's records.
- Evidence: protected route reads `userId` from request payload instead of deriving it from session context.
- Minimum fix: enforce server-side ownership checks and row-level security for user-owned tables.

### 2. Secrets and credential hygiene

- Issue: a public environment variable exposes a third-party API key in the frontend bundle.
- Why it matters: anyone opening the app can extract and abuse the key.
- Evidence: production bundle references `NEXT_PUBLIC_*` key for provider access.
- Minimum fix: move the integration behind a server-side route and rotate the exposed key.

### 3. Availability and recovery

- Issue: no restore-tested backup path or incident runbook is documented.
- Why it matters: a bad deploy or data incident has no proven recovery path.
- Evidence: no restore procedure, no runbook note, and no backup validation evidence.
- Minimum fix: enable backups, perform one restore test, and add a one-page incident checklist.

## Missing launch controls

- No preview or staging deploy flow before production merges.
- No uptime alerting or actionable error tracking evidence.
- No rate limits on paid AI endpoints.

## Scaling and resilience gaps

- Expensive AI requests are uncached and all use the highest-cost model tier.
- Database connections are not pooled for bursty traffic.
- No first-traffic load test evidence exists.

## Highest-leverage next actions

1. Lock down authorization and RLS first.
2. Remove and rotate exposed secrets.
3. Add monitoring, uptime alerts, and a recovery runbook.
4. Add rate limits, AI routing, and basic caching before public traffic.
5. Run one load test and fix the first real bottleneck it reveals.

## Evidence references

- API route ownership checks
- environment configuration and frontend bundle references
- deployment workflow files
- database policy and migration files
- monitoring and backup configuration surfaces

