---
title: "Cleaned Reel Summaries"
source_folder: "reel-transcripts"
note_count: 104
tags: [murphyscan, index, production-readiness]
---
# Cleaned Reel Summaries

This folder contains cleaned, source-traceable Markdown summaries for the reel transcript set. Raw `.txt` transcripts remain untouched in the parent folder, and the pre-existing `reel1.md` has been added here as `reel-64.md`.

## Corpus Shape
- Core theme: production-readiness checks for AI-assisted and vibe-coded apps.
- Best future use: convert these notes into `/murphyscan` scan categories, prompts, and verification gates.
- Strongest clusters: auth, secrets, RLS, deployment safety, observability, cost controls, caching, scaling, CI/CD, and AI evaluation.

## Theme Map
- **Security and auth:** [[reel-02]], [[reel-13]], [[reel-14]], [[reel-15]], [[reel-17]], [[reel-22]], [[reel-36]], [[reel-37]], [[reel-44]], [[reel-48]], [[reel-55]], [[reel-59]], [[reel-60]], [[reel-61]], [[reel-64]], [[reel-65]], [[reel-70]], [[reel-71]], [[reel-72]], [[reel-73]], [[reel-75]], [[reel-77]], [[reel-78]], [[reel-84]], [[reel-89]], [[reel-95]], [[reel-96]], [[reel-99]], [[reel-100]], [[reel-103]]
- **Deployment and operations:** [[reel-04]], [[reel-05]], [[reel-16]], [[reel-19]], [[reel-20]], [[reel-23]], [[reel-28]], [[reel-29]], [[reel-31]], [[reel-39]], [[reel-42]], [[reel-58]], [[reel-81]], [[reel-83]], [[reel-85]], [[reel-86]], [[reel-87]], [[reel-88]], [[reel-90]], [[reel-91]], [[reel-92]], [[reel-98]], [[reel-101]]
- **Data and backend architecture:** [[reel-06]], [[reel-11]], [[reel-12]], [[reel-26]], [[reel-32]], [[reel-33]], [[reel-34]], [[reel-35]], [[reel-41]], [[reel-51]], [[reel-57]], [[reel-66]], [[reel-67]], [[reel-69]], [[reel-74]], [[reel-79]], [[reel-80]], [[reel-97]], [[reel-102]], [[reel-104]]
- **AI product controls:** [[reel-01]], [[reel-24]], [[reel-25]], [[reel-38]], [[reel-47]], [[reel-49]], [[reel-50]], [[reel-52]], [[reel-54]], [[reel-56]]
- **QA, productization, and scaling:** [[reel-07]], [[reel-08]], [[reel-09]], [[reel-10]], [[reel-18]], [[reel-21]], [[reel-27]], [[reel-45]], [[reel-46]], [[reel-53]], [[reel-62]], [[reel-63]], [[reel-76]], [[reel-82]], [[reel-93]], [[reel-94]]
- **Billing and mobile product edges:** [[reel-30]], [[reel-40]], [[reel-43]], [[reel-68]]

## Note Index
| Reel | Topic | Scan Area |
| --- | --- | --- |
| [[reel-01]] | AI Cost Controls | ai-cost-controls |
| [[reel-02]] | First Security Baseline | production-security-baseline |
| [[reel-03]] | Dependency Hygiene | dependency-hygiene |
| [[reel-04]] | Make the App Talk Back | observability |
| [[reel-05]] | Boring Deploys | deployment-safety |
| [[reel-06]] | Third-Party API Resilience | third-party-api-resilience |
| [[reel-07]] | Demo to Product | demo-to-product |
| [[reel-08]] | Happy Path Trap | error-state-coverage |
| [[reel-09]] | Frontend Is More Than UI | frontend-production-layer |
| [[reel-10]] | Users Are Not Your QA Team | real-device-qa |
| [[reel-11]] | Backend Boundary | backend-boundary |
| [[reel-12]] | Database Is Not a Spreadsheet | database-design |
| [[reel-13]] | Thirty-Minute Security Audit | thirty-minute-security-audit |
| [[reel-14]] | Authentication Is Not Authorization | authorization |
| [[reel-15]] | Keep API Keys Out of the Browser | secret-exposure |
| [[reel-16]] | Staging Before Production | staging-and-release-flow |
| [[reel-17]] | Privacy and Terms Basics | legal-and-privacy-basics |
| [[reel-18]] | Free Tier Compute Limits | compute-limits |
| [[reel-19]] | Three Environments | environment-strategy |
| [[reel-20]] | CI/CD Safety Net | ci-cd |
| [[reel-21]] | Own the AI-Written Code | code-ownership |
| [[reel-22]] | Row-Level Security | row-level-security |
| [[reel-23]] | Know When to Graduate Platforms | platform-fit |
| [[reel-24]] | Rate Limiting Protects the Wallet | rate-limiting |
| [[reel-25]] | Stop Paying for the Same Query | caching-and-cdn |
| [[reel-26]] | Multi-Tenant Data Architecture | multi-tenancy |
| [[reel-27]] | Survive Concurrent Users | scaling-bottlenecks |
| [[reel-28]] | Simple DevOps Stack | simple-devops-stack |
| [[reel-29]] | Stop Guessing and Start Watching | logs-and-error-tracking |
| [[reel-30]] | Start Charging with Stripe | payments-and-billing |
| [[reel-31]] | Availability and Recovery | availability-and-recovery |
| [[reel-32]] | Pick the Database by Data Shape | database-selection |
| [[reel-33]] | Multi-Region Without Overbuilding | multi-region-latency |
| [[reel-34]] | Partition Before Sharding | database-scale |
| [[reel-35]] | Conflict Resolution Strategy | conflict-resolution |
| [[reel-36]] | Rotate Secrets Without Downtime | secret-rotation |
| [[reel-37]] | Prepare for SOC 2 | soc2-prep |
| [[reel-38]] | Reduce AI Cost Without Hurting UX | ai-cost-optimization |
| [[reel-39]] | Canary Rollouts and Feature Flags | safe-rollouts |
| [[reel-40]] | Mobile Deep Links | mobile-deep-linking |
| [[reel-41]] | Database Connection Pooling | database-connection-pooling |
| [[reel-42]] | AI Reviewer in the PR Pipeline | ai-code-review |
| [[reel-43]] | Pricing Metric and Usage Events | pricing-and-usage-events |
| [[reel-44]] | Try to Hack Your Own App | security-testing |
| [[reel-45]] | Move Slow Work to Background Jobs | async-jobs |
| [[reel-46]] | Infrastructure Cost Discipline | infrastructure-cost |
| [[reel-47]] | Route AI Requests by Complexity | model-routing |
| [[reel-48]] | Dynamic Database Credentials | dynamic-database-secrets |
| [[reel-49]] | Protect AI Endpoints with a Gateway | ai-api-gateway |
| [[reel-50]] | Agent Memory That Helps | agent-memory |
| [[reel-51]] | Know When to Unbundle Supabase | unbundling-platforms |
| [[reel-52]] | Validate AI Output Before Users See It | ai-output-validation |
| [[reel-53]] | Cache at Memory, Edge, and Query Layers | response-caching |
| [[reel-54]] | Make AI Quality Measurable | ai-evaluation |
| [[reel-55]] | Frontend Is Not a Trust Layer | client-trust-boundary |
| [[reel-56]] | CI/CD for Non-Deterministic AI | ai-ci-cd |
| [[reel-57]] | PGVector Before Another Database | vector-storage-choice |
| [[reel-58]] | Branch Like You Deploy | branching-strategy |
| [[reel-59]] | Do Not Build Auth from Scratch | managed-auth |
| [[reel-60]] | Sessions Must Expire | session-security |
| [[reel-61]] | Assume Keys Will Leak | secret-scanning |
| [[reel-62]] | Survive the First 100 Users | first-100-users |
| [[reel-63]] | Find the Scaling Cliff Before Launch | scaling-cliff |
| [[reel-64]] | Auth Is the Foundation | auth-foundation |
| [[reel-65]] | ZAP First, Burp Later | security-scanner-staging |
| [[reel-66]] | Match Tenant Walls to the Contract | multi-tenant-isolation-model |
| [[reel-67]] | Measure the Database, Do Not Guess | database-performance-diagnostics |
| [[reel-68]] | Payments Start at the Webhook | payment-webhook-integrity |
| [[reel-69]] | Pick the Serverless Database by Engine and Scale | serverless-database-selection |
| [[reel-70]] | RLS Is a Database Firewall | row-level-security-foundation |
| [[reel-71]] | Roles Only Count Where They Are Enforced | rbac-basics |
| [[reel-72]] | Match the Auth Provider to the Customer | auth-provider-fit |
| [[reel-73]] | Dependencies Are Trusted Strangers | dependency-supply-chain |
| [[reel-74]] | Store Files Like Files | object-storage-and-cdn |
| [[reel-75]] | Scan Before Attackers Do | automated-security-scanning |
| [[reel-76]] | Cache Speed Without Cache Confusion | cache-invalidation |
| [[reel-77]] | Self-Hosted Auth Buys Control and Work | self-hosted-auth-tradeoffs |
| [[reel-78]] | Let the Browser Help Defend the App | browser-security-headers |
| [[reel-79]] | Pick the ORM for the Team You Have | orm-selection |
| [[reel-80]] | Realtime Magic Versus Portable Boring | realtime-platform-fit |
| [[reel-81]] | Match Hosting to the Operational Shape | deployment-platform-fit |
| [[reel-82]] | Price for the World, Not One City | regional-pricing |
| [[reel-83]] | SOC 2 Is a Trust Gate, Not a Late Add-On | enterprise-readiness-soc2 |
| [[reel-84]] | Validate the Token Rules Explicitly | jwt-validation |
| [[reel-85]] | Do Not Learn About Downtime from Customers | uptime-monitoring |
| [[reel-86]] | Fast Deploys Are a Reliability Feature | deployment-pipeline-speed |
| [[reel-87]] | Cloud Bills Reflect Architecture | cloud-cost-audit |
| [[reel-88]] | Managed Buys Time, Self-Hosted Buys Responsibility | build-vs-buy-infrastructure |
| [[reel-89]] | Services Need Identity Too | service-authentication |
| [[reel-90]] | CI Failing Means the Assumption Failed | ci-parity |
| [[reel-91]] | Logs Need Structure to Be Useful | structured-logging |
| [[reel-92]] | Documentation Is Part of the System | operational-documentation |
| [[reel-93]] | Caching Is Also a Consistency Policy | cache-consistency |
| [[reel-94]] | Cache the Repeat Offenders and Measure the Result | caching-measurement |
| [[reel-95]] | Privacy Pages Need Backing Systems | privacy-architecture |
| [[reel-96]] | Model Permissions Before Roles Calcify | permission-modeling |
| [[reel-97]] | Treat the API Like a Product | api-contracts |
| [[reel-98]] | Backups Only Count If Restores Work | backup-restore-verification |
| [[reel-99]] | Deleted Secrets Still Live in Git History | secrets-management |
| [[reel-100]] | Service Roles Can Walk Around RLS | rls-bypass-paths |
| [[reel-101]] | Open the Gates in Stages | canary-launch |
| [[reel-102]] | Outgrowing Supabase Means Choosing a New Ceiling | post-supabase-platform-fit |
| [[reel-103]] | AI Supply Chain Trust Is Now a Real Attack Surface | ai-supply-chain-trust |
| [[reel-104]] | Choose the Database by Workload, Not Brand | database-workload-fit |
