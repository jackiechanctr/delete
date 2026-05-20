import { PrismaClient } from '../generated/client/index.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('Equity@123', 12);
  const user = await prisma.equityUser.upsert({
    where: { email: 'equity.service@wealth.local' },
    update: {},
    create: {
      email: 'equity.service@wealth.local',
      passwordHash,
      externalId: 'equity-svc',
    },
  });

  const investorRef = 'INV1001';
  const holdings = [
    { symbol: 'RELIANCE', companyName: 'Reliance Industries', quantity: 50, avgBuyPrice: 2450, currentPrice: 2680, sector: 'Energy' },
    { symbol: 'TCS', companyName: 'Tata Consultancy Services', quantity: 30, avgBuyPrice: 3600, currentPrice: 3850, sector: 'IT' },
    { symbol: 'HDFCBANK', companyName: 'HDFC Bank', quantity: 40, avgBuyPrice: 1580, currentPrice: 1720, sector: 'Banking' },
    { symbol: 'INFY', companyName: 'Infosys', quantity: 60, avgBuyPrice: 1420, currentPrice: 1550, sector: 'IT' },
  ];

  for (const h of holdings) {
    await prisma.holding.upsert({
      where: { investorRef_symbol: { investorRef, symbol: h.symbol } },
      update: { currentPrice: h.currentPrice },
      create: { userId: user.id, investorRef, ...h, quantity: h.quantity, avgBuyPrice: h.avgBuyPrice, currentPrice: h.currentPrice },
    });
  }

  const txns = [
    { symbol: 'RELIANCE', type: 'BUY' as const, quantity: 50, price: 2450, daysAgo: 90 },
    { symbol: 'TCS', type: 'BUY' as const, quantity: 30, price: 3600, daysAgo: 60 },
    { symbol: 'HDFCBANK', type: 'BUY' as const, quantity: 40, price: 1580, daysAgo: 45 },
    { symbol: 'INFY', type: 'BUY' as const, quantity: 60, price: 1420, daysAgo: 30 },
  ];

  for (const t of txns) {
    const executedAt = new Date(Date.now() - t.daysAgo * 86400000);
    const totalAmount = t.quantity * t.price;
    await prisma.transaction.create({
      data: {
        userId: user.id,
        investorRef,
        symbol: t.symbol,
        type: t.type,
        quantity: t.quantity,
        price: t.price,
        totalAmount,
        executedAt,
      },
    });
  }

  await prisma.watchlist.upsert({
    where: { id: '00000000-0000-0000-0000-000000000001' },
    update: {},
    create: {
      id: '00000000-0000-0000-0000-000000000001',
      userId: user.id,
      investorRef,
      name: 'Core Portfolio',
      symbols: ['RELIANCE', 'TCS', 'HDFCBANK', 'INFY', 'ICICIBANK'],
    },
  }).catch(async () => {
    await prisma.watchlist.create({
      data: { userId: user.id, investorRef, name: 'Core Portfolio', symbols: ['RELIANCE', 'TCS', 'HDFCBANK'] },
    });
  });

  const prices = [
    { symbol: 'RELIANCE', price: 2680, changePct: 1.2 },
    { symbol: 'TCS', price: 3850, changePct: 0.8 },
    { symbol: 'HDFCBANK', price: 1720, changePct: -0.3 },
    { symbol: 'INFY', price: 1550, changePct: 1.5 },
    { symbol: 'ICICIBANK', price: 1120, changePct: 0.5 },
  ];

  for (const p of prices) {
    await prisma.marketPrice.upsert({
      where: { symbol: p.symbol },
      update: { price: p.price, changePct: p.changePct },
      create: { symbol: p.symbol, price: p.price, changePct: p.changePct, volume: BigInt(1000000) },
    });
  }

  console.log('Equity seed completed for investor', investorRef);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
