import type { Express } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { success, paginated } from '../lib/response.js';

export async function realEstateRoutes(app: Express) {
  app.get('/api/v1/real-estate', app.locals.authenticate, async (req, res) => {
    const { investorId, page = 1, limit = 20 } = z
      .object({ investorId: z.string().uuid().optional(), page: z.coerce.number().default(1), limit: z.coerce.number().default(20) })
      .parse(req.query);

    const where = investorId ? { investorId } : {};
    const [items, total] = await Promise.all([
      prisma.property.findMany({
        where,
        include: { valuations: { orderBy: { valuedAt: 'desc' }, take: 1 }, rentalIncomes: { take: 6 } },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.property.count({ where }),
    ]);

    const enriched = items.map((p) => {
      const currentValue = p.valuations[0] ? Number(p.valuations[0].value) : Number(p.purchasePrice);
      const purchase = Number(p.purchasePrice);
      const appreciation = purchase > 0 ? ((currentValue - purchase) / purchase) * 100 : 0;
      const rentalYtd = p.rentalIncomes.reduce((s, r) => s + Number(r.amount), 0);
      const roi = purchase > 0 ? (rentalYtd / purchase) * 100 : 0;
      return { ...p, purchasePrice: purchase, currentValue, appreciationPct: appreciation, rentalYtd, roiPct: roi };
    });

    return res.json(paginated(enriched, total, page, limit));
  });

  app.get('/api/v1/real-estate/:id/analytics', app.locals.authenticate, async (req, res) => {
    const { id } = req.params as { id: string };
    const property = await prisma.property.findUnique({
      where: { id },
      include: { valuations: { orderBy: { valuedAt: 'asc' } }, rentalIncomes: true },
    });
    if (!property) return res.status(404).json({ success: false, error: { message: 'Not found' } });

    const purchase = Number(property.purchasePrice);
    const latest = property.valuations[property.valuations.length - 1];
    const current = latest ? Number(latest.value) : purchase;

    return res.json(success({
      propertyId: id,
      category: property.category,
      purchasePrice: purchase,
      currentValue: current,
      appreciationPct: purchase > 0 ? ((current - purchase) / purchase) * 100 : 0,
      totalRentalIncome: property.rentalIncomes.reduce((s, r) => s + Number(r.amount), 0),
      valuationHistory: property.valuations.map((v) => ({ date: v.valuedAt, value: Number(v.value) })),
    }));
  });
}
