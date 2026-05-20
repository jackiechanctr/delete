import { PrismaClient } from '../generated/client/index.js';

const prisma = new PrismaClient();

async function main() {
  const funds = [
    { schemeCode: 'MF001', name: 'Bluechip Equity Fund', category: 'Large Cap', amc: 'Wealth AMC', riskLevel: 'Moderate' },
    { schemeCode: 'MF002', name: 'Midcap Growth Fund', category: 'Mid Cap', amc: 'Wealth AMC', riskLevel: 'High' },
    { schemeCode: 'MF003', name: 'Debt Stable Fund', category: 'Debt', amc: 'Wealth AMC', riskLevel: 'Low' },
    { schemeCode: 'MF004', name: 'Hybrid Balanced Fund', category: 'Hybrid', amc: 'Wealth AMC', riskLevel: 'Moderate' },
  ];

  const fundRecords = [];
  for (const f of funds) {
    const fund = await prisma.fund.upsert({
      where: { schemeCode: f.schemeCode },
      update: {},
      create: f,
    });
    fundRecords.push(fund);

    for (let i = 0; i < 12; i++) {
      const navDate = new Date();
      navDate.setMonth(navDate.getMonth() - i);
      const baseNav = 100 + fundRecords.length * 10;
      await prisma.navHistory.upsert({
        where: { fundId_navDate: { fundId: fund.id, navDate } },
        update: {},
        create: { fundId: fund.id, nav: baseNav + i * 0.5, navDate },
      }).catch(() =>
        prisma.navHistory.create({ data: { fundId: fund.id, nav: baseNav + i * 0.5, navDate } })
      );
    }
  }

  const investorRef = 'INV1001';
  for (const [i, fund] of fundRecords.entries()) {
    await prisma.sip.create({
      data: {
        investorRef,
        fundId: fund.id,
        amount: 5000 + i * 2500,
        frequency: 'MONTHLY',
        status: i === 2 ? 'FAILED' : 'ACTIVE',
        startDate: new Date('2023-01-01'),
        nextDueDate: new Date(Date.now() + 7 * 86400000),
        mandateId: `MANDATE-${i + 1}`,
      },
    }).catch(() => undefined);
  }

  for (const fund of fundRecords) {
    const nav = await prisma.navHistory.findFirst({ where: { fundId: fund.id }, orderBy: { navDate: 'desc' } });
    const navVal = nav ? Number(nav.nav) : 120;
    await prisma.mfTransaction.create({
      data: {
        investorRef,
        fundId: fund.id,
        type: 'SIP',
        units: 50,
        nav: navVal,
        amount: 50 * navVal,
        executedAt: new Date(Date.now() - 30 * 86400000),
      },
    });
  }

  console.log('MF seed completed');
}

main().catch(console.error).finally(() => prisma.$disconnect());
