export declare function success<T>(data: T, meta?: Record<string, unknown>): {
    success: true;
    data: T;
    meta: Record<string, unknown> | undefined;
};
export declare function paginated<T>(data: T[], total: number, page: number, limit: number): {
    success: true;
    data: T[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
};
export declare function fail(message: string, code?: string): {
    success: false;
    error: {
        message: string;
        code: string;
    };
};
