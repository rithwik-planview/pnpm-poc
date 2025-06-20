interface UseAuthProps {
    origin: string;
    basePath?: string;
    hybridBasePath?: string;
    username?: string;
    password?: string;
}
interface AuthUser {
    fullName: string;
    email: string;
}
export declare const useAuth: ({ origin, basePath, hybridBasePath, username, password, }: UseAuthProps) => {
    isAuthenticated: boolean;
    error: boolean;
    user: AuthUser;
    handleLogout: () => void;
};
export {};
//# sourceMappingURL=useAuth.d.ts.map