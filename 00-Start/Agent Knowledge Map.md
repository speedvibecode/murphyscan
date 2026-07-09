---
title: "Agent Knowledge Map"
tags: [murphyscan, agent-map, synthesis]
---
# Agent Knowledge Map

## First Principle
`/murphyscan` should not be a generic checklist. It should be a production verification system that maps each risk to a layer, a concept, source evidence, and a concrete pass/fail check.

## Read by Decision
| If the task is... | Read first | Then inspect |
| --- | --- | --- |
| Launch readiness | [[Layer Map]] | [[Scan Rule Backlog]], [[Source Reel Index]] |
| Auth or data exposure | [[04 Auth and Permissions]] | [[Authorization and Row-Level Security]], [[Managed Auth and Session Security]], [[Secrets and Credential Rotation]] |
| Backend/API hardening | [[02 APIs and Backend Logic]] | [[Backend Boundary and API Wrappers]], [[API Contracts and Versioning]], [[Rate Limiting and API Gateways]], [[Async Jobs and Idempotency]], [[Client Trust Boundary]] |
| Database architecture | [[03 Database and Storage]] | [[Database Design and Indexing]], [[Multi-Tenancy and Tenant Isolation]], [[Database Scaling and Connection Pooling]] |
| Deployment safety | [[05 Hosting and Deployment]] | [[Deployment Safety and Rollbacks]], [[Staging Environments and Branching]], [[CI Gates and AI Review]] |
| AI app controls | [[AI Cost Controls and Model Routing]] | [[AI Output Validation and Evals]], [[Agent Memory and Vector Storage]], [[AI Endpoint Protection]] |
| Scaling and reliability | [[11 Load Balancing and Scaling]] | [[Load Testing and Scaling Cliffs]], [[Caching Strategy]], [[Observability and Incident Response]] |
| Agent or skill trust review | [[08 Security and RLS]] | [[AI Supply Chain Trust]], [[Security Scanning and Pen Test Lite]], [[Secrets and Credential Rotation]] |
| Scheduled corpus ingest | `docs/source-corpus-maintenance.md` | `docs/weekly-ingest-mode.md`, `docs/scheduled-ingest-pipeline.md`, `reel-transcripts/manifest.json` |
| Transcription failure or low-signal reel | `docs/source-corpus-maintenance.md` | `docs/transcription-fallbacks.md`, `reel-transcripts/next-batch.txt`, `reel-transcripts/manifest.json` |
| New concept candidate | [[Concept Index]] | relevant layer note, [[Scan Rule Backlog]], [[Source Reel Index]] |

## Knowledge-Density Tiers
- **Layer notes** answer where a risk belongs in the production stack.
- **Concept notes** answer what the repeated risk means and how to verify it.
- **Source reel notes** preserve the extracted evidence and exact origin.
- **MurphyScan notes** translate the vault into future skill behavior.

## Growth Invariants
- Start from layer notes, concept notes, and scan backlog before reading the full corpus.
- Keep source notes as evidence. Do not let the source corpus become the navigation system.
- Create a new concept only when a new reel introduces reusable verification behavior that does not fit an existing concept.
- Filtered reels are accounting records, not cleaned source-backed notes.
- Update stale home, index, README, and changelog surfaces in the same change as material corpus, automation, or skill behavior updates.

## Anti-Bloat Rule
Only create a new note when it changes routing, verification behavior, or source interpretation. Otherwise update the closest existing layer or concept note.
