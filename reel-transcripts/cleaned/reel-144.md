---
reel: 144
source_file: "reel 144.txt"
source_url: "https://www.instagram.com/reel/DavJP42gfEJ/"
published_at: "2026-07-13T14:36:44.000Z"
scan_area: "account-deletion-lifecycle"
tags: [murphyscan, deletion, retention, privacy, data-lifecycle]
---
# Reel 144 - Treat Account Deletion as a Data Lifecycle

## Summary
Account deletion is not a single UI action. It requires a dependency map across user-linked data, an explicit retention policy, automated terminal deletion, and evidence that deletion requests were completed across primary and derived systems.

## Verification Checklist
- Map every user-linked table, object, upload, session, support record, and provider copy.
- Define delete, anonymize, retain, or legally preserve behavior for each record class.
- Disable access immediately when policy requires a delayed hard delete.
- Automate terminal deletion after the approved retention window.
- Include caches, analytics, search indexes, exports, backups, and subprocessors in the lifecycle.
- Produce auditable request and completion evidence without inventing universal legal deadlines.

## Skill Signal
Verify end-to-end deletion behavior and policy alignment rather than accepting a delete button as proof.
