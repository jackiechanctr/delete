import axios from 'axios';
import CircuitBreaker from 'opossum';
import { env } from '../config/env.js';
import { cacheGet, cacheSet } from '../lib/redis.js';
import { logger } from '../lib/logger.js';
const http = axios.create({ baseURL: env.EQUITY_SERVER_URL, timeout: 8000 });
let serviceToken = null;
async function getServiceToken() {
    if (serviceToken)
        return serviceToken;
    const res = await http.post('/api/v1/auth/login', {
        email: 'equity.service@wealth.local',
        password: 'Equity@123',
    });
    serviceToken = res.data.data.accessToken;
    return serviceToken;
}
const breaker = new CircuitBreaker(async (investorRef) => {
    const token = await getServiceToken();
    const res = await http.get(`/api/v1/holdings/${investorRef}/summary`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res.data.data;
}, { timeout: 10000, errorThresholdPercentage: 50, resetTimeout: 30000 });
breaker.on('open', () => logger.warn('Equity circuit breaker OPEN'));
breaker.on('halfOpen', () => logger.info('Equity circuit breaker HALF_OPEN'));
export const equityClient = {
    async getHoldingsSummary(investorRef) {
        const cacheKey = `equity:summary:${investorRef}`;
        try {
            const data = await breaker.fire(investorRef);
            await cacheSet(cacheKey, data, 300);
            return data;
        }
        catch (err) {
            const stale = await cacheGet(cacheKey);
            if (stale)
                return { ...stale, stale: true };
            throw err;
        }
    },
    async getHoldings(investorRef) {
        const cacheKey = `equity:holdings:${investorRef}`;
        try {
            const token = await getServiceToken();
            const res = await http.get('/api/v1/holdings', {
                params: { investorRef, limit: 50 },
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = res.data.data;
            await cacheSet(cacheKey, data, 300);
            return data;
        }
        catch {
            return (await cacheGet(cacheKey)) ?? [];
        }
    },
};
