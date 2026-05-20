export function success(data, meta) {
    return { success: true, data, meta };
}
export function paginated(data, total, page, limit, correlationId) {
    return {
        success: true,
        data,
        meta: { page, limit, total, totalPages: Math.ceil(total / limit), correlationId },
    };
}
export function fail(message, code = 'BAD_REQUEST', statusCode = 400) {
    return { success: false, error: { message, code, statusCode } };
}
