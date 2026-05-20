import { PrismaClient } from '../generated/client/index.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('Admin@123', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@wealth-intelligence.com' },
    update: {},
    create: {
      email: 'admin@wealth-intelligence.com',
      passwordHash,
      firstName: 'Platform',
      lastName: 'Admin',
      role: 'SUPER_ADMIN',
    },
  });

  await prisma.user.upsert({
    where: { email: 'advisor@wealth-intelligence.com' },
    update: {},
    create: {
      email: 'advisor@wealth-intelligence.com',
      passwordHash: await bcrypt.hash('Advisor@123', 12),
      firstName: 'Wealth',
      lastName: 'Advisor',
      role: 'ADVISOR',
    },
  });

  const permissions = [
    { code: 'investors:read', description: 'View investors' },
    { code: 'investors:write', description: 'Manage investors' },
    { code: 'audit:read', description: 'View audit logs' },
    { code: 'alerts:manage', description: 'Manage alerts' },
    { code: 'admin:all', description: 'Full admin access' },
  ];

  for (const p of permissions) {
    await prisma.permission.upsert({ where: { code: p.code }, update: {}, create: p });
  }

  const { investorUnification } = await import('../src/services/investor-unification.service.js');
  const { investor } = await investorUnification.seedRahulSharmaProfile();

  const property = await prisma.property.create({
    data: {
      investorId: investor.id,
      name: 'Palm Heights Apartment',
      category: 'RESIDENTIAL',
      address: '12 MG Road',
      city: 'Bangalore',
      purchasePrice: 8500000,
      purchaseDate: new Date('2019-06-01'),
    },
  });

  await prisma.valuation.createMany({
    data: [
      { propertyId: property.id, value: 9200000, valuedAt: new Date('2024-01-01'), source: 'market' },
      { propertyId: property.id, value: 10100000, valuedAt: new Date('2025-01-01'), source: 'market' },
    ],
  });

  await prisma.rentalIncome.create({
    data: {
      propertyId: property.id,
      amount: 45000,
      periodStart: new Date('2025-01-01'),
      periodEnd: new Date('2025-01-31'),
    },
  });

  await prisma.property.create({
    data: {
      investorId: investor.id,
      name: 'Tech Park Commercial Unit',
      category: 'COMMERCIAL',
      city: 'Hyderabad',
      purchasePrice: 15000000,
      purchaseDate: new Date('2021-03-15'),
      valuations: { create: { value: 17800000, valuedAt: new Date('2025-01-01'), source: 'appraisal' } },
    },
  });

  await prisma.alert.createMany({
    data: [
      { title: 'SIP Failure Detected', message: 'Debt Stable Fund SIP failed for INV1001', severity: 'CRITICAL', source: 'mutual-fund', investorId: investor.id },
      { title: 'Equity Sync Complete', message: 'Holdings synchronized successfully', severity: 'INFO', source: 'equity', investorId: investor.id },
      { title: 'High Portfolio Concentration', message: 'Equity allocation exceeds 60%', severity: 'WARNING', source: 'wealth-engine', investorId: investor.id },
    ],
  });

  await prisma.notification.create({
    data: { userId: admin.id, title: 'Welcome', body: 'Unified Wealth Intelligence Platform is ready.', channel: 'in_app' },
  });

  await prisma.auditLog.create({
    data: { userId: admin.id, action: 'SEED', resource: 'system', metadata: { version: '1.0.0' } },
  });

  console.log('Aggregator seed completed. Unified investor:', investor.unifiedId);
  console.log('Login: admin@wealth-intelligence.com / Admin@123');
}

main().catch(console.error).finally(() => prisma.$disconnect());
