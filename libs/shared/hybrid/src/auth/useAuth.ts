import { useCallback, useEffect, useState } from 'react';
import { createDataLibrary } from '@unity/core.data-access';
import { decodeToken, validateToken } from '../utils/jwt';
import { HYBRID_BASE_URL, SESSION_ID, TIME_DELTA } from '../constants';

interface AuthResponse {
    sessionId: string;
    userId: string;
    organizationId: string;
    serverTime: string;
}

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

export const useAuth = ({
    origin,
    basePath = 'release.latest',
    hybridBasePath = 'HybridSolutions',
    username = 'Admin_User',
    password = 'Password1!',
}: UseAuthProps) => {
    const [hybridClient] = useState(() => {
        return createDataLibrary(`${origin}/${basePath}_ApiV2/services/`, {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        });
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(false);

    const updateSessionIdAndReload = useCallback(async () => {
        try {
            const response = await hybridClient.fetch<AuthResponse>(
                'post',
                '/authentication/login',
                {
                    params: {
                        username,
                        password,
                    },
                },
            );
            const { sessionId } = response;
            const serverTime = new Date(response.serverTime);
            const localTime = new Date();
            const timeDelta = (serverTime.getTime() - localTime.getTime()) / 1000;
            const baseUrl = `${origin}/${hybridBasePath}`;
            localStorage.setItem(TIME_DELTA, `${timeDelta}`);
            localStorage.setItem(HYBRID_BASE_URL, baseUrl);
            localStorage.setItem(SESSION_ID, sessionId);
            window.location.reload();
        } catch (e) {
            console.error('Authentication failed:', e);
            setError(true);
        }
    }, [hybridBasePath, hybridClient, origin, password, username]);

    useEffect(() => {
        const sessionId = localStorage.getItem(SESSION_ID);
        const timeDelta = +(localStorage.getItem(TIME_DELTA) ?? 0);

        if (sessionId && validateToken(sessionId, { username, origin, timeDelta })) {
            setIsAuthenticated(true);
        } else {
            updateSessionIdAndReload();
        }
    }, [origin, username, updateSessionIdAndReload]);

    const handleLogout = useCallback(() => {
        localStorage.removeItem(SESSION_ID);
        localStorage.removeItem(TIME_DELTA);
        localStorage.removeItem(HYBRID_BASE_URL);
        window.location.reload();
    }, []);

    const user: AuthUser = {
        fullName: decodeToken(localStorage.getItem(SESSION_ID))?.clzUserName ?? '',
        email: decodeToken(localStorage.getItem(SESSION_ID))?.email ?? '',
    };

    return {
        isAuthenticated,
        error,
        user,
        handleLogout,
    };
};
