---
title: "Cleaned Reel Summaries"
source_folder: "reel-transcripts"
note_count: 64
tags: [murphyscan, index, production-readiness]
---
# Cleaned Reel Summaries

This folder contains cleaned, source-traceable Markdown summaries for the reel transcript set. Raw `.txt` transcripts remain untouched in the parent folder, and the pre-existing `reel1.md` has been added here as `reel-64.md`.

## Corpus Shape
- Core theme: production-readiness checks for AI-assisted and vibe-coded apps.
- Best future use: convert these notes into `/murphyscan` scan categories, prompts, and verification gates.
- Strongest clusters: auth, secrets, RLS, deployment safety, observability, cost controls, caching, scaling, CI/CD, and AI evaluation.

## Theme Map
- **Security and auth:** [[reel-02]], [[reel-13]], [[reel-14]], [[reel-15]], [[reel-17]], [[reel-22]], [[reel-36]], [[reel-37]], [[reel-44]], [[reel-48]], [[reel-55]], [[reel-59]], [[reel-60]], [[reel-61]], [[reel-64]]
- **Deployment and operations:** [[reel-04]], [[reel-05]], [[reel-16]], [[reel-19]], [[reel-20]], [[reel-23]], [[reel-28]], [[reel-29]], [[reel-31]], [[reel-39]], [[reel-42]], [[reel-58]]
- **Data and backend architecture:** [[reel-06]], [[reel-11]], [[reel-12]], [[reel-26]], [[reel-32]], [[reel-33]], [[reel-34]], [[reel-35]], [[reel-41]], [[reel-51]], [[reel-57]]
- **AI product controls:** [[reel-01]], [[reel-24]], [[reel-25]], [[reel-38]], [[reel-47]], [[reel-49]], [[reel-50]], [[reel-52]], [[reel-54]], [[reel-56]]
- **QA, productization, and scaling:** [[reel-07]], [[reel-08]], [[reel-09]], [[reel-10]], [[reel-18]], [[reel-21]], [[reel-27]], [[reel-45]], [[reel-46]], [[reel-53]], [[reel-62]], [[reel-63]]
- **Billing and mobile product edges:** [[reel-30]], [[reel-40]], [[reel-43]]

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

