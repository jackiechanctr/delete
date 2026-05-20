import type { Express } from 'express';
import { prisma } from '../lib/prisma.js';
import { success } from '../lib/response.js';
import { wealthEngine } from '../services/wealth-engine.service.js';

export async function dashboardRoutes(app: Express) {
  app.get('/api/v1/dashboard', app.locals.authenticate, async (_req, res) => {
    const [investorCount, alertCount, openAlerts, investors, services] = await Promise.all([
      prisma.investor.count(),
      prisma.alert.count(),
      prisma.alert.count({ where: { status: 'OPEN', severity: { in: ['WARNING', 'CRITICAL'] } } }),
      prisma.investor.findMany({ take: 5, orderBy: { totalNetWorth: 'desc' } }),
      prisma.serviceHealth.findMany(),
    ]);

    const primary = investors[0];
    let wealth = null;
    if (primary) {
      wealth = await wealthEngine.computeWealth(primary.id, 'INV1001').catch(() => null);
    }

    const snapshots = await prisma.wealthSnapshot.findMany({
      orderBy: { computedAt: 'desc' },
      take: 12,
    });

    return res.json(success({
        summary: {
          totalInvestors: investorCount,
          totalAlerts: alertCount,
          criticalAlerts: openAlerts,
          platformAum: investors.reduce((s, i) => s + Number(i.totalNetWorth ?? 0), 0),
        },
        wealth,
        topInvestors: investors.map((i) => ({
          id: i.id,
          unifiedId: i.unifiedId,
          displayName: i.displayName,
          totalNetWorth: Number(i.totalNetWorth ?? 0),
        })),
        wealthTrend: snapshots.reverse().map((s) => ({
          date: s.computedAt,
          value: Number(s.totalNetWorth),
        })),
        serviceHealth: services,
      }));
  });
}
