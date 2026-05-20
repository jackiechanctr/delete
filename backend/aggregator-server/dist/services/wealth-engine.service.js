import { prisma } from '../lib/prisma.js';
import { equityClient } from '../clients/equity.client.js';
import { mfClient } from '../clients/mf.client.js';
import { cacheGet, cacheSet } from '../lib/redis.js';
import { logger } from '../lib/logger.js';
export class WealthEngineService {
    async computeWealth(investorId, investorRef = 'INV1001') {
        const cacheKey = `wealth:${investorId}`;
        const cached = await cacheGet(cacheKey);
        if (cached)
            return { ...cached, fromCache: true };
        const [equityResult, mfResult, investor] = await Promise.all([
            equityClient.getHoldingsSummary(investorRef).catch((e) => ({ error: String(e), totalValue: 0, totalPnl: 0 })),
            mfClient.getPortfolioSummary(investorRef).catch((e) => ({ error: String(e), estimatedValue: 0 })),
            prisma.investor.findUnique({
                where: { id: investorId },
                include: {
                    properties: {
                        include: {
                            valuations: { orderBy: { valuedAt: 'desc' }, take: 1 },
                            rentalIncomes: { take: 12 },
                        },
                    },
                },
            }),
        ]);
        const equityValue = 'totalValue' in equityResult ? Number(equityResult.totalValue) : 0;
        const mfValue = 'estimatedValue' in mfResult ? Number(mfResult.estimatedValue) : ('totalValue' in mfResult ? 0 : 0);
        let realEstateValue = 0;
        let rentalIncomeAnnual = 0;
        for (const prop of investor?.properties ?? []) {
            const latest = prop.valuations[0];
            realEstateValue += latest ? Number(latest.value) : Number(prop.purchasePrice);
            rentalIncomeAnnual += prop.rentalIncomes.reduce((s, r) => s + Number(r.amount), 0);
        }
        const totalNetWorth = equityValue + mfValue + realEstateValue;
        const allocation = {
            equity: totalNetWorth > 0 ? (equityValue / totalNetWorth) * 100 : 0,
            mutualFunds: totalNetWorth > 0 ? (mfValue / totalNetWorth) * 100 : 0,
            realEstate: totalNetWorth > 0 ? (realEstateValue / totalNetWorth) * 100 : 0,
        };
        const diversificationScore = this.calcDiversification(allocation);
        const liquidityRatio = totalNetWorth > 0 ? (equityValue + mfValue) / totalNetWorth : 0;
        const riskExposure = equityValue / totalNetWorth > 0.6 ? 'HIGH' : mfValue / totalNetWorth > 0.5 ? 'MODERATE' : 'BALANCED';
        const snapshot = {
            investorId,
            totalNetWorth,
            equityValue,
            mfValue,
            realEstateValue,
            diversificationScore,
            liquidityRatio,
            riskExposure,
            allocation,
            rentalIncomeAnnual,
            equityDegraded: 'error' in equityResult,
            mfDegraded: 'error' in mfResult,
            computedAt: new Date().toISOString(),
        };
        await prisma.wealthSnapshot.create({
            data: {
                investorId,
                totalNetWorth,
                equityValue,
                mfValue,
                realEstateValue,
                diversificationScore,
                liquidityRatio,
                riskExposure,
                allocationJson: allocation,
            },
        });
        await prisma.investor.update({
            where: { id: investorId },
            data: { totalNetWorth },
        });
        await cacheSet(cacheKey, snapshot);
        logger.info('Wealth computed', { investorId, totalNetWorth });
        return snapshot;
    }
    calcDiversification(allocation) {
        const values = Object.values(allocation).map((v) => v / 100);
        const hhi = values.reduce((s, v) => s + v * v, 0);
        return Math.round((1 - hhi) * 100 * 100) / 100;
    }
}
export const wealthEngine = new WealthEngineService();
