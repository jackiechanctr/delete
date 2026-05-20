# Aggregator Server

Central orchestration layer (port **3001**).

## Features

- JWT auth, RBAC, refresh token rotation
- Investor unification engine
- Wealth aggregation with circuit breakers
- Real estate, alerts, audit, notifications
- Socket.IO realtime events
- Upstash Redis caching
- BullMQ workers (when `REDIS_URL` is set)

## Commands

```bash
npm run dev
npm run db:push
npm run db:seed
```

API docs: http://localhost:3001/docs
