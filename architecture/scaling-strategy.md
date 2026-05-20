# Scaling Strategy

## Horizontal Scaling

- **Aggregator**: Stateless API instances behind load balancer; Redis for session/token blacklist; Socket.IO with Redis adapter for multi-node WebSocket
- **Equity / MF**: Independent horizontal scaling per asset class traffic patterns

## Data Layer

- PostgreSQL read replicas for investor/wealth read paths
- Redis cluster for cache hot keys (`wealth:{investorId}`)
- Partition audit_logs by month for archival (BullMQ `audit-archival` job pattern)

## Performance

- Wealth snapshots materialized on sync to avoid recomputation on every dashboard load
- Pagination default 20, max 100 on all list endpoints
- Prisma connection pooling via PgBouncer in production

## Observability

- Winston structured JSON logs with `correlationId`
- `/metrics` endpoints per service
- `service_health` table for downstream SLA tracking
