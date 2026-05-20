import axios from 'axios';
import CircuitBreaker from 'opossum';
import { env } from '../config/env.js';
import { signMfRequest } from '../lib/hmac.js';
import { cacheGet, cacheSet } from '../lib/redis.js';
import { logger } from '../lib/logger.js';

const http = axios.create({ baseURL: env.MF_SERVER_URL, timeout: 12000 });

function signedHeaders(method: string, url: string, body = '') {
  const timestamp = Date.now().toString();
  const signature = signMfRequest(method, url, body, timestamp, env.MF_API_SECRET);
  return {
    'x-api-key': env.MF_API_KEY,
    'x-timestamp': timestamp,
    'x-signature': signature,
  };
}

const summaryBreaker = new CircuitBreaker(
  async (investorRef: string) => {
    const url = `/api/v1/sips/${investorRef}/summary`;
    const res = await http.get(url, { headers: signedHeaders('GET', url) });
    const summary = res.data.data;
    const txUrl = `/api/v1/transactions?investorRef=${investorRef}&limit=50`;
    const txRes = await http.get(txUrl, { headers: signedHeaders('GET', txUrl) });
    const txTotal = (txRes.data.data as { amount: number }[]).reduce((s, t) => s + (t.amount ?? 0), 0);
    return { ...summary, estimatedValue: txTotal || summary.monthlyCommitment * 24 };
  },
  { timeout: 15000, errorThresholdPercentage: 50, resetTimeout: 30000 }
);

summaryBreaker.on('open', () => logger.warn('MF circuit breaker OPEN'));

export const mfClient = {
  async getPortfolioSummary(investorRef: string) {
    const cacheKey = `mf:summary:${investorRef}`;
    try {
      const data = await summaryBreaker.fire(investorRef);
      await cacheSet(cacheKey, data, 300);
      return data;
    } catch (err) {
      const stale = await cacheGet<Record<string, unknown>>(cacheKey);
      if (stale) return { ...stale, stale: true };
      throw err;
    }
  },

  async getSips(investorRef: string) {
    const url = `/api/v1/sips?investorRef=${investorRef}`;
    try {
      const res = await http.get(url, { headers: signedHeaders('GET', url) });
      return res.data.data;
    } catch {
      return (await cacheGet(`mf:sips:${investorRef}`)) ?? [];
    }
  },
};
