const ROLE_RANK = {
    VIEWER: 1,
    ADVISOR: 2,
    OPERATIONS: 3,
    ADMIN: 4,
    SUPER_ADMIN: 5,
};
export function requireRole(...roles) {
    const minRank = Math.min(...roles.map((r) => ROLE_RANK[r]));
    return async (req, reply) => {
        const user = req.user;
        if (!user?.role) {
            return reply.status(401).send({ success: false, error: { message: 'Unauthorized' } });
        }
        if (ROLE_RANK[user.role] < minRank) {
            return reply.status(403).send({ success: false, error: { message: 'Forbidden', code: 'FORBIDDEN' } });
        }
    };
}
