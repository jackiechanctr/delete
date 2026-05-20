export declare const env: {
    PORT: number;
    NODE_ENV: "development" | "production" | "test";
    DATABASE_URL: string;
    UPSTASH_REDIS_REST_URL: string;
    UPSTASH_REDIS_REST_TOKEN: string;
    REDIS_TTL: number;
    JWT_SECRET: string;
    JWT_EXPIRY: string;
    JWT_REFRESH_EXPIRY: string;
    EQUITY_SERVER_URL: string;
    MF_SERVER_URL: string;
    MF_API_KEY: string;
    MF_API_SECRET: string;
    CORS_ORIGIN: string;
    REDIS_URL?: string | undefined;
};
