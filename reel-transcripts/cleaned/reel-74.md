---
reel: 74
source_file: "reel 74.txt"
source_url: "https://www.instagram.com/p/DZxfOW9xsFD/"
scan_area: "object-storage-and-cdn"
tags: [murphyscan, storage, object-storage, cdn, database-design, media]
---
# Reel 74 - Store Files Like Files

## Summary
Databases should store metadata, not heavy blobs. The reel recommends moving user-uploaded files to object storage, serving them through a CDN, and keeping only references in the relational data model.

## Verification Checklist
- Keep images, PDFs, and videos in object storage rather than relational blob columns.
- Serve public or cacheable files through a CDN instead of the origin application where possible.
- Store URLs or object references in the database instead of embedding file payloads in rows.

## Skill Signal
Use this as a storage-architecture scan for media handling and CDN posture.
