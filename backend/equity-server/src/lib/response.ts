export interface ApiMeta {
  page?: number;
  limit?: number;
  total?: number;
  correlationId?: string;
}

export function success<T>(data: T, meta?: ApiMeta) {
  return { success: true as const, data, meta };
}

export function paginated<T>(data: T[], total: number, page: number, limit: number, correlationId?: string) {
  return {
    success: true as const,
    data,
    meta: { page, limit, total, totalPages: Math.ceil(total / limit), correlationId },
  };
}

export function fail(message: string, code = 'BAD_REQUEST', statusCode = 400) {
  return { success: false as const, error: { message, code, statusCode } };
}
