import type { IdentitySource, Prisma } from '../../generated/client/index.js';
export declare class InvestorUnificationService {
    reconcileIdentity(input: {
        source: IdentitySource;
        externalId: string;
        email?: string;
        pan?: string;
        displayName?: string;
        metadata?: Prisma.InputJsonValue;
    }): Promise<{
        investor: {
            id: string;
            email: string | null;
            createdAt: Date;
            updatedAt: Date;
            unifiedId: string;
            pan: string | null;
            displayName: string;
            phone: string | null;
            riskProfile: string | null;
            totalNetWorth: Prisma.Decimal | null;
        };
        identity: {
            id: string;
            email: string | null;
            createdAt: Date;
            pan: string | null;
            investorId: string;
            source: import("../../generated/client/index.js").$Enums.IdentitySource;
            metadata: Prisma.JsonValue | null;
            externalId: string;
            confidence: Prisma.Decimal;
            isPrimary: boolean;
            reconciledAt: Date | null;
        };
    }>;
    private deduplicateByPanOrEmail;
    seedRahulSharmaProfile(): Promise<{
        investor: {
            id: string;
            email: string | null;
            createdAt: Date;
            updatedAt: Date;
            unifiedId: string;
            pan: string | null;
            displayName: string;
            phone: string | null;
            riskProfile: string | null;
            totalNetWorth: Prisma.Decimal | null;
        };
        identity: {
            id: string;
            email: string | null;
            createdAt: Date;
            pan: string | null;
            investorId: string;
            source: import("../../generated/client/index.js").$Enums.IdentitySource;
            metadata: Prisma.JsonValue | null;
            externalId: string;
            confidence: Prisma.Decimal;
            isPrimary: boolean;
            reconciledAt: Date | null;
        };
    }>;
    getUnifiedProfile(investorId: string): Promise<({
        identities: {
            id: string;
            email: string | null;
            createdAt: Date;
            pan: string | null;
            investorId: string;
            source: import("../../generated/client/index.js").$Enums.IdentitySource;
            metadata: Prisma.JsonValue | null;
            externalId: string;
            confidence: Prisma.Decimal;
            isPrimary: boolean;
            reconciledAt: Date | null;
        }[];
        properties: ({
            valuations: {
                value: Prisma.Decimal;
                id: string;
                createdAt: Date;
                valuedAt: Date;
                propertyId: string;
                source: string | null;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            investorId: string;
            category: import("../../generated/client/index.js").$Enums.PropertyCategory;
            address: string | null;
            city: string | null;
            purchasePrice: Prisma.Decimal;
            purchaseDate: Date;
        })[];
    } & {
        id: string;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        unifiedId: string;
        pan: string | null;
        displayName: string;
        phone: string | null;
        riskProfile: string | null;
        totalNetWorth: Prisma.Decimal | null;
    }) | null>;
}
export declare const investorUnification: InvestorUnificationService;
