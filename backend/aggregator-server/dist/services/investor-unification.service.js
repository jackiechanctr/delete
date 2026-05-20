import { prisma } from '../lib/prisma.js';
import { logger } from '../lib/logger.js';
function normalizeEmail(email) {
    return email?.trim().toLowerCase() ?? null;
}
function normalizePan(pan) {
    return pan?.trim().toUpperCase() ?? null;
}
export class InvestorUnificationService {
    async reconcileIdentity(input) {
        const email = normalizeEmail(input.email);
        const pan = normalizePan(input.pan);
        let investor = null;
        if (pan) {
            investor = await prisma.investor.findUnique({ where: { pan } });
        }
        if (!investor && email) {
            investor = await prisma.investor.findFirst({ where: { email } });
        }
        if (!investor) {
            const existingIdentity = await prisma.investorIdentity.findUnique({
                where: { source_externalId: { source: input.source, externalId: input.externalId } },
                include: { investor: true },
            });
            investor = existingIdentity?.investor ?? null;
        }
        if (!investor) {
            const unifiedId = `UWI-${Date.now().toString(36).toUpperCase()}`;
            investor = await prisma.investor.create({
                data: {
                    unifiedId,
                    displayName: input.displayName ?? `Investor ${input.externalId}`,
                    email: email ?? undefined,
                    pan: pan ?? undefined,
                },
            });
            logger.info('Created unified investor', { unifiedId: investor.unifiedId });
        }
        else if (email && !investor.email) {
            investor = await prisma.investor.update({ where: { id: investor.id }, data: { email } });
        }
        const identity = await prisma.investorIdentity.upsert({
            where: { source_externalId: { source: input.source, externalId: input.externalId } },
            update: {
                email: email ?? undefined,
                pan: pan ?? undefined,
                metadata: input.metadata ?? undefined,
                reconciledAt: new Date(),
                investorId: investor.id,
            },
            create: {
                investorId: investor.id,
                source: input.source,
                externalId: input.externalId,
                email: email ?? undefined,
                pan: pan ?? undefined,
                metadata: input.metadata ?? undefined,
                isPrimary: true,
                reconciledAt: new Date(),
            },
        });
        if (pan || email) {
            await this.deduplicateByPanOrEmail(investor.id, pan, email);
        }
        return { investor, identity };
    }
    async deduplicateByPanOrEmail(keepId, pan, email) {
        const duplicates = await prisma.investor.findMany({
            where: {
                id: { not: keepId },
                OR: [...(pan ? [{ pan }] : []), ...(email ? [{ email }] : [])],
            },
        });
        for (const dup of duplicates) {
            await prisma.investorIdentity.updateMany({
                where: { investorId: dup.id },
                data: { investorId: keepId, confidence: 0.95 },
            });
            await prisma.investor.delete({ where: { id: dup.id } });
            logger.info('Merged duplicate investor', { from: dup.unifiedId, into: keepId });
        }
    }
    async seedRahulSharmaProfile() {
        return this.reconcileIdentity({
            source: 'CRM',
            externalId: 'CUST-1001',
            email: 'rahul.sharma@example.com',
            pan: 'ABCDE1234F',
            displayName: 'Rahul Sharma',
            metadata: { legacyIds: ['INV1001', 'CUST-1001'] },
        }).then(async (result) => {
            await this.reconcileIdentity({
                source: 'EQUITY',
                externalId: 'INV1001',
                email: 'rahul.sharma@example.com',
                pan: 'ABCDE1234F',
                displayName: 'Rahul Sharma',
            });
            await this.reconcileIdentity({
                source: 'MUTUAL_FUND',
                externalId: 'INV1001',
                email: 'rahul.sharma@example.com',
                pan: 'ABCDE1234F',
            });
            return result;
        });
    }
    async getUnifiedProfile(investorId) {
        const investor = await prisma.investor.findUnique({
            where: { id: investorId },
            include: { identities: { orderBy: { createdAt: 'asc' } }, properties: { include: { valuations: { orderBy: { valuedAt: 'desc' }, take: 1 } } } },
        });
        return investor;
    }
}
export const investorUnification = new InvestorUnificationService();
