---
title: "Layer Map"
tags: [murphyscan, layers, map]
---
# Layer Map

The vault is organized around the 13 production layers shown in the reference image. Each layer links to its source reels and the consolidated concept notes it depends on.

| Order | Layer | Core Question |
| --- | --- | --- |
| 01 | [[01 Frontend]] | Does the UI work for real users, devices, states, and constraints? |
| 02 | [[02 APIs and Backend Logic]] | Does the server enforce business rules and protect expensive work? |
| 03 | [[03 Database and Storage]] | Is data modeled, owned, indexed, backed up, and scalable? |
| 04 | [[04 Auth and Permissions]] | Are identity, sessions, roles, and ownership boundaries enforced? |
| 05 | [[05 Hosting and Deployment]] | Can changes be previewed, released, and rolled back safely? |
| 06 | [[06 Cloud and Compute]] | Does the infrastructure fit the workload beyond free-tier assumptions? |
| 07 | [[07 CI-CD and Version Control]] | Do git and automated gates prevent unsafe changes from shipping? |
| 08 | [[08 Security and RLS]] | Are secrets, policies, scans, and compliance controls in place? |
| 09 | [[09 Rate Limiting]] | Are paid and abuse-prone endpoints capped before they are exploited? |
| 10 | [[10 Caching and CDN]] | Does the app avoid repeating the same expensive work? |
| 11 | [[11 Load Balancing and Scaling]] | Can the system survive real concurrency and growth? |
| 12 | [[12 Error Tracking and Logs]] | Can the owner see what is broken before users report it? |
| 13 | [[13 Availability and Recovery]] | Can the app recover from outages, bad deploys, and credential incidents? |

## Cross-Layer Concepts
- [[Managed Auth and Session Security]]
- [[Authorization and Row-Level Security]]
- [[Secrets and Credential Rotation]]
- [[Deployment Safety and Rollbacks]]
- [[AI Cost Controls and Model Routing]]
- [[Caching Strategy]]
- [[Database Scaling and Connection Pooling]]
- [[Observability and Incident Response]]
- [[AI Output Validation and Evals]]
- [[Load Testing and Scaling Cliffs]]

