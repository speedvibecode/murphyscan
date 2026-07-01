# MurphyScan Report Example

This example reflects a MurphyScan `0.2.x` style report generated from the Banter case-study evidence in `docs/case-studies/banter.md`.

## 1. Verdict

`Not launch ready`

The app is structurally solid and buildable, but it is missing enough abuse-resistance and recovery controls that a serious public rollout would still be premature.

## 2. Blockers

### Layer: 09 Rate Limiting

- Issue: auth and sensitive write paths do not have durable, shared-instance rate limiting.
- Why it matters: brute-force and abuse controls are weak when limits live only in memory and reset per instance or restart.
- Evidence: `lib/rateLimit.ts` uses an in-memory `Map`; signup and login flows were not covered by the same durable protection surface in the case-study evidence.
- Minimum fix: move rate limiting to a shared store or edge-safe control surface and extend it to auth plus other sensitive mutation routes.

### Layer: 13 Availability and Recovery

- Issue: recovery posture is under-specified for production database mistakes or incidents.
- Why it matters: a live app with accounts, votes, and moderation needs proven restore and rollback behavior, not just assumptions that backups exist.
- Evidence: the Banter case-study found no restore-tested backup path or operational runbook evidence in the reviewed repo surfaces.
- Minimum fix: define backup ownership, run one full restore drill, and document an operator-facing recovery checklist.

## 3. Missing launch controls

### Auth, moderation, and trust

- Admin moderation actions exist, but explicit auditability for who changed what and when is thin.
- Production auth and session behavior need a clearer release-proof surface, not only code-level confidence.

### Deployment and verification

- Build and lint passed, but the repo did not show a strong production preflight surface around database connectivity and required runtime variables.
- There was no stronger launch gate showing the app is safe beyond "the build passed."

### Monitoring and incident visibility

- The case-study evidence did not show enough uptime, alerting, or operational monitoring proof for a public app.

## 4. Scaling and resilience gaps

- In-memory rate limiting will degrade further under horizontal or ephemeral execution.
- Recovery posture around database mistakes becomes more painful as real user data accumulates.
- The app has real architecture, but the operational controls are still behind the product maturity.

## 5. Highest-leverage next actions

1. Replace in-memory rate limiting with a durable shared control and extend it to auth flows.
2. Add moderation audit logs and durable admin action traceability.
3. Prove the backup and restore path with one real recovery drill.
4. Add a release preflight for required environment variables and database readiness.
5. Add visible uptime and incident-detection surfaces before a wider public rollout.

## 6. Evidence references

- `docs/case-studies/banter.md`
- `lib/rateLimit.ts`
- `app/api/auth/signup/route.ts`
- `app/api/polls/create/route.ts`
- `app/api/polls/vote/route.ts`
- `app/api/report/route.ts`
- `app/api/admin/reports/route.ts`
