---
reel: 67
source_file: "reel 67.txt"
source_url: "https://www.instagram.com/p/DZp7APuRdvP/"
scan_area: "database-performance-diagnostics"
tags: [murphyscan, database, performance, explain-analyze, pg-stat-statements, pgbouncer]
---
# Reel 67 - Measure the Database, Do Not Guess

## Summary
Indexes alone do not explain a slow application. The reel recommends reading actual query plans, using `pg_stat_statements` to find the heaviest recurring queries, and checking connection pooling before blaming scale.

## Verification Checklist
- Use `EXPLAIN ANALYZE` or equivalent to inspect real execution plans for slow queries.
- Track query frequency and total cost with `pg_stat_statements` or an equivalent telemetry surface.
- Verify connection pooling and connection ceilings instead of opening a fresh database connection per request.

## Skill Signal
Use this as a database-performance scan for plan visibility, query cost, and connection pressure.
