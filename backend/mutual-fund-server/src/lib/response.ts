export function success<T>(data: T, meta?: Record<string, unknown>) {
  return { success: true as const, data, meta };
}

export function paginated<T>(data: T[], total: number, page: number, limit: number) {
  return { success: true as const, data, meta: { page, limit, total, totalPages: Math.ceil(total / limit) } };
}

export function fail(message: string, code = 'BAD_REQUEST') {
  return { success: false as const, error: { message, code } };
}
