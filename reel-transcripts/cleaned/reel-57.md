---
reel: 57
source_file: "reel 57.txt"
source_url: "https://www.instagram.com/p/DZisZ_9v0RW/"
scan_area: "vector-storage-choice"
tags: [murphyscan, pgvector, vector-database, rag, postgres, operational-complexity]
---
# Reel 57 - PGVector Before Another Database

## Summary
Not every AI search feature needs a dedicated vector database. The reel recommends using PGVector for many application-level RAG and recommendation use cases, while reserving specialized vector databases for massive-scale similarity search.

## Verification Checklist
- Check whether embeddings can live beside relational data in Postgres.
- Use a dedicated vector database only when scale, latency, or product focus demands it.
- Account for backup, monitoring, connection strings, and failure modes before adding another database.

## Skill Signal
Use this as a vector-storage scan for operational complexity.

