export declare class WealthEngineService {
    computeWealth(investorId: string, investorRef?: string): Promise<{
        investorId: string;
        totalNetWorth: number;
        equityValue: number;
        mfValue: number;
        realEstateValue: number;
        diversificationScore: number;
        liquidityRatio: number;
        riskExposure: string;
        allocation: {
            equity: number;
            mutualFunds: number;
            realEstate: number;
        };
        rentalIncomeAnnual: number;
        equityDegraded: boolean;
        mfDegraded: boolean;
        computedAt: string;
    } | {
        fromCache: boolean;
    }>;
    private calcDiversification;
}
export declare const wealthEngine: WealthEngineService;
