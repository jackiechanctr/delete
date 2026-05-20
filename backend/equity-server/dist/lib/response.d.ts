export interface ApiMeta {
    page?: number;
    limit?: number;
    total?: number;
    correlationId?: string;
}
export declare function success<T>(data: T, meta?: ApiMeta): {
    success: true;
    data: T;
    meta: ApiMeta | undefined;
};
export declare function paginated<T>(data: T[], total: number, page: number, limit: number, correlationId?: string): {
    success: true;
    data: T[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        correlationId: string | undefined;
    };
};
export declare function fail(message: string, code?: string, statusCode?: number): {
    success: false;
    error: {
        message: string;
        code: string;
        statusCode: number;
    };
};
