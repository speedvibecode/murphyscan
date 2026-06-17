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
| Backend/API hardening | [[02 APIs and Backend Logic]] | [[Rate Limiting and API Gateways]], [[Async Jobs and Idempotency]], [[Client Trust Boundary]] |
| Database architecture | [[03 Database and Storage]] | [[Database Design and Indexing]], [[Multi-Tenancy and Tenant Isolation]], [[Database Scaling and Connection Pooling]] |
| Deployment safety | [[05 Hosting and Deployment]] | [[Deployment Safety and Rollbacks]], [[Staging Environments and Branching]], [[CI Gates and AI Review]] |
| AI app controls | [[AI Cost Controls and Model Routing]] | [[AI Output Validation and Evals]], [[Agent Memory and Vector Storage]], [[AI Endpoint Protection]] |
| Scaling and reliability | [[11 Load Balancing and Scaling]] | [[Load Testing and Scaling Cliffs]], [[Caching Strategy]], [[Observability and Incident Response]] |

## Knowledge-Density Tiers
- **Layer notes** answer where a risk belongs in the production stack.
- **Concept notes** answer what the repeated risk means and how to verify it.
- **Source reel notes** preserve the extracted evidence and exact origin.
- **MurphyScan notes** translate the vault into future skill behavior.

## Anti-Bloat Rule
Only create a new note when it changes routing, verification behavior, or source interpretation. Otherwise update the closest existing layer or concept note.

