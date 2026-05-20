# Database Design

Single Aiven PostgreSQL instance with **schema isolation**:

| Schema | Owner Service | Key Entities |
|--------|---------------|--------------|
| `equity` | equity-server | users, holdings, transactions, watchlists, market_prices |
| `mutual_fund` | mutual-fund-server | funds, nav_history, sips, transactions |
| `aggregator` | aggregator-server | users, investors, identities, properties, wealth_snapshots, alerts, audit_logs |

## Normalization Highlights

- UUID primary keys across all tables
- `investor_identities` unique on `(source, external_id)`
- `investors.pan` unique for reconciliation
- Composite indexes on `(investor_ref, executed_at)` for transaction history
- Wealth snapshots denormalized for dashboard performance with JSON allocation payload

## Unified Investor Example

| Source | External ID | PAN | Email |
|--------|-------------|-----|-------|
| CRM | CUST-1001 | ABCDE1234F | rahul.sharma@example.com |
| EQUITY | INV1001 | ABCDE1234F | rahul.sharma@example.com |
| MUTUAL_FUND | INV1001 | ABCDE1234F | rahul.sharma@example.com |

All map to one `investors` row with generated `unified_id`.
