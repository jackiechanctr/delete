# Unified Wealth Intelligence Platform

Enterprise-grade wealth aggregation platform unifying equities, mutual funds, SIPs, real estate, and operational intelligence across three independent backend services and a Next.js dashboard.

## Architecture

| Service | Port | Auth | Responsibility |
|---------|------|------|----------------|
| **Aggregator** | 3001 | JWT + RBAC | Auth, investor unification, wealth engine, WebSocket, Redis, BullMQ |
| **Equity** | 3002 | JWT | Holdings, transactions, watchlists, market prices |
| **Mutual Fund** | 3003 | HMAC + API Key | SIPs, NAV, MF transactions |
| **Frontend** | 3000 | JWT (via aggregator) | Premium dashboard UI |

## Prerequisites

- Node.js 20+
- npm 10+
- Aiven PostgreSQL (configured in `.env` files)
- Upstash Redis (REST + optional TCP URL for BullMQ)

## Quick Start

```bash
cd wealth-intelligence-platform
npm install

# Generate Prisma clients and push schemas (equity, mutual_fund, aggregator)
npm run db:generate
npm run db:push

# Seed all services (order matters: equity & MF first, then aggregator)
npm run db:seed

# Run all services
npm run dev
```

Open http://localhost:3000 — login with `admin@wealth-intelligence.com` / `Admin@123`

## Environment

Each backend service has its own `.env`. The aggregator connects to equity/MF via `EQUITY_SERVER_URL` and `MF_SERVER_URL`.

Frontend uses `NEXT_PUBLIC_API_URL=http://localhost:3001`.

## API Documentation

- Aggregator Swagger: http://localhost:3001/docs
- Equity Swagger: http://localhost:3002/docs
- Mutual Fund Swagger: http://localhost:3003/docs

## Investor Unification

Seed data unifies **INV1001**, **CUST-1001**, **rahul.sharma@example.com**, and **ABCDE1234F** into one investor via PAN/email reconciliation.

## Testing

```bash
npm run test
```

## Project Structure

See `architecture/` for system design, database design, API contracts, resilience, and scaling documentation.
