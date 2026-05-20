export function success(data, meta) {
    return { success: true, data, meta };
}
export function paginated(data, total, page, limit) {
    return { success: true, data, meta: { page, limit, total, totalPages: Math.ceil(total / limit) } };
}
export function fail(message, code = 'BAD_REQUEST') {
    return { success: false, error: { message, code } };
}
