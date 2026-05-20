# System Design

## Overview

The Unified Wealth Intelligence Platform uses a **multi-service orchestration** pattern. The Aggregator Server is the system of record for identity, wealth computation, and operations; Equity and Mutual Fund servers remain independently deployable domain services.

```
┌─────────────┐     JWT      ┌──────────────────┐
│  Next.js    │─────────────▶│ Aggregator :3001 │
│  Frontend   │◀──WebSocket──│  (Orchestrator)  │
└─────────────┘              └────────┬─────────┘
                                        │
                    ┌───────────────────┼───────────────────┐
                    ▼                   ▼                   ▼
            ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
            │ Equity :3002 │   │   MF :3003   │   │ Upstash Redis│
            │  JWT Auth    │   │  HMAC Auth   │   │ Cache/Queue  │
            └──────────────┘   └──────────────┘   └──────────────┘
                    │                   │
                    └─────────┬─────────┘
                              ▼
                    ┌──────────────────┐
                    │ Aiven PostgreSQL │
                    │ schemas: equity, │
                    │ mutual_fund,     │
                    │ aggregator       │
                    └──────────────────┘
```

## Core Engines

1. **Investor Unification** — PAN normalization, email deduplication, cross-source identity merge
2. **Wealth Engine** — Net worth, allocation, diversification (HHI-based), liquidity ratio, risk exposure
3. **Resilience Layer** — Opossum circuit breakers, stale Redis fallback, simulated downstream failures
4. **Operations** — Health probes, audit logs, alerts, BullMQ retry/sync jobs

## Authentication

- **Aggregator / Frontend**: JWT access + refresh rotation, brute-force lockout, token blacklist in Redis
- **Equity**: Independent JWT for service-to-service and direct API access
- **Mutual Fund**: `X-API-Key`, `X-Timestamp`, `X-Signature` (HMAC-SHA256)
