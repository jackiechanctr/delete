# API Contracts

All services use `/api/v1/` with standardized envelopes:

```json
{
  "success": true,
  "data": {},
  "meta": { "page": 1, "limit": 20, "total": 100 }
}
```

## Aggregator (JWT)

| Method | Path | Description |
|--------|------|-------------|
| POST | /api/v1/auth/login | Login |
| POST | /api/v1/auth/register | Register |
| POST | /api/v1/auth/refresh | Refresh tokens |
| GET | /api/v1/dashboard | Dashboard aggregate |
| GET | /api/v1/investors | List investors (paginated) |
| GET | /api/v1/investors/:id/wealth | Wealth computation |
| POST | /api/v1/investors/reconcile | Identity reconciliation |
| GET | /api/v1/real-estate | Property portfolio |
| GET | /api/v1/alerts | Operational alerts |

## Equity (JWT)

| Method | Path | Description |
|--------|------|-------------|
| GET | /api/v1/holdings | Holdings (filter: investorRef) |
| GET | /api/v1/holdings/:ref/summary | Portfolio summary |
| GET | /api/v1/transactions | Transaction history |

## Mutual Fund (HMAC)

Headers: `X-API-Key`, `X-Timestamp`, `X-Signature`

Signature payload: `{METHOD}\n{URL}\n{timestamp}\n{body}`

| Method | Path | Description |
|--------|------|-------------|
| GET | /api/v1/sips | SIP list |
| GET | /api/v1/nav/:schemeCode | NAV history |
