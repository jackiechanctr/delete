import { Queue } from 'bullmq';
export declare const syncQueue: Queue<any, any, string, any, any, string> | null;
export declare const alertQueue: Queue<any, any, string, any, any, string> | null;
export declare function startWorkers(): void;
export declare function enqueueSync(investorId: string, investorRef: string): Promise<void>;
export declare function checkRedisHealth(): Promise<boolean>;
