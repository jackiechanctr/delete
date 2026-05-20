export declare class AuthService {
    register(email: string, password: string, externalId?: string): Promise<{
        id: string;
        email: string;
        externalId: string | null;
        createdAt: Date;
    }>;
    validateUser(email: string, password: string): Promise<{
        id: string;
        email: string;
        externalId: string | null;
    } | null>;
    hashToken(token: string): string;
    storeRefreshToken(userId: string, token: string, expiresAt: Date): Promise<{
        id: string;
        createdAt: Date;
        tokenHash: string;
        expiresAt: Date;
        revoked: boolean;
        userId: string;
    }>;
    rotateRefreshToken(oldToken: string, newToken: string, expiresAt: Date): Promise<{
        id: string;
        createdAt: Date;
        tokenHash: string;
        expiresAt: Date;
        revoked: boolean;
        userId: string;
    }>;
    generateRefreshToken(): string;
}
export declare const authService: AuthService;
