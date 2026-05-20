# Resilience Strategy

## Downstream Protection

- **Circuit breakers** (Opossum) on equity and MF clients — open after 50% failures, 30s reset
- **Timeouts** — 8s equity, 12s MF
- **Stale cache fallback** — Redis keys `equity:summary:*`, `mf:summary:*` with 300s TTL
- **Graceful degradation** — Dashboard returns partial wealth with `equityDegraded` / `mfDegraded` flags

## Equity / MF Simulation

- Configurable latency (`SIMULATED_LATENCY_MS`)
- Random failure injection (`FAILURE_RATE`) for resilience testing

## Retry & Queues

- BullMQ `wealth-sync` and `alerts` queues (requires `REDIS_URL` TCP)
- Fallback `retry_jobs` table in PostgreSQL when BullMQ unavailable
- Exponential backoff on sync jobs (3 attempts)

## Idempotency

- MF transactions support `idempotencyKey` unique constraint

## Realtime

- Socket.IO events: `alert:new`, `portfolio:update`, `sync:complete`, `service:outage`, `system:health`
