import type { UserRole } from '../../generated/client/index.js';
export declare class AuthService {
    register(data: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        role?: UserRole;
    }): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        role: import("../../generated/client/index.js").$Enums.UserRole;
    }>;
    login(email: string, password: string): Promise<{
        id: string;
        email: string;
        passwordHash: string;
        firstName: string;
        lastName: string;
        role: import("../../generated/client/index.js").$Enums.UserRole;
        active: boolean;
        failedLogins: number;
        lockedUntil: Date | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    hashToken(token: string): string;
    generateRefreshToken(): string;
    storeRefreshToken(userId: string, token: string, expiresAt: Date): Promise<{
        id: string;
        createdAt: Date;
        tokenHash: string;
        expiresAt: Date;
        revoked: boolean;
        userId: string;
    }>;
    revokeRefreshToken(token: string): Promise<void>;
    validateRefreshToken(token: string): Promise<({
        user: {
            id: string;
            email: string;
            passwordHash: string;
            firstName: string;
            lastName: string;
            role: import("../../generated/client/index.js").$Enums.UserRole;
            active: boolean;
            failedLogins: number;
            lockedUntil: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        tokenHash: string;
        expiresAt: Date;
        revoked: boolean;
        userId: string;
    }) | null>;
}
export declare const authService: AuthService;
