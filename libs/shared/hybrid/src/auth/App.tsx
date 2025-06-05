import React, { useCallback, useEffect, useState } from 'react';
import { createDataLibrary } from '@unity/core.data-access';
import { decodeToken, validateToken } from '../utils/jwt';
import {
    NavigationBar,
    ToolbarSectionLeft,
    ToolbarSectionRight,
    LogoAdaptiveWork,
    UserMenu,
    ToolbarButtonEmptyInverse,
} from '@planview/pv-toolbar';
import { Avatar, EmptyStateError, ListItem, ListItemDivider, Spinner } from '@planview/pv-uikit';
import { Logout, Mail, User, WarningFilled } from '@planview/pv-icons';
import styled from 'styled-components';
import { align, color } from '@planview/pv-utilities';
import { HYBRID_BASE_URL, SESSION_ID, TIME_DELTA } from '../constants';

interface AuthResponse {
    sessionId: string;
    userId: string;
    organizationId: string;
    serverTime: string;
}

interface AppShellProps {
    title: string;
    origin: string;
    basePath?: string;
    hybridBasePath?: string;
    username?: string;
    password?: string;
    children: React.ReactNode;
}

const AppLayout = styled.div`
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
`;

const ContentLayout = styled.div`
    flex: 1 1 auto;
    overflow: auto;
`;

const LoadingLayout = styled.div`
    height: 100%;
    ${align.center};
`;

export const HybridAppShell: React.FC<AppShellProps> = ({
    title,
    origin,
    basePath = 'release.latest',
    hybridBasePath = 'HybridSolutions',
    username = 'Admin_User',
    password = 'Password1!',
    children,
}) => {
    const [hybridClient] = React.useState(() => {
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
    }, [basePath, updateSessionIdAndReload, hybridClient, origin, password, username]);

    const handleLogout = useCallback(() => {
        localStorage.removeItem(SESSION_ID);
        localStorage.removeItem(TIME_DELTA);
        localStorage.removeItem(HYBRID_BASE_URL);
        window.location.reload();
    }, []);

    const fullName = decodeToken(localStorage.getItem(SESSION_ID))?.clzUserName ?? '';
    const email = decodeToken(localStorage.getItem(SESSION_ID))?.email ?? '';
    return (
        <AppLayout>
            <NavigationBar aria-label="Main navigation" logo={<LogoAdaptiveWork />}>
                <ToolbarSectionLeft>
                    <ToolbarButtonEmptyInverse preventLabelCollapse>
                        {title}
                    </ToolbarButtonEmptyInverse>
                </ToolbarSectionLeft>
                <ToolbarSectionRight>
                    <UserMenu
                        triggerElement={
                            isAuthenticated ? (
                                <Avatar
                                    size="medium"
                                    initials={fullName
                                        .split(/[\s._]/)
                                        .map((s) => s.charAt(0))
                                        .join('')}
                                />
                            ) : error ? (
                                <WarningFilled color={color.iconError} />
                            ) : (
                                <Spinner size="medium" inverse />
                            )
                        }
                    >
                        <ListItem icon={<User />} label={fullName} />
                        <ListItem icon={<Mail />} label={email} />
                        <ListItemDivider />
                        <ListItem
                            icon={<Logout />}
                            label="Refresh session"
                            onActivate={handleLogout}
                        />
                    </UserMenu>
                </ToolbarSectionRight>
            </NavigationBar>
            <ContentLayout>
                {isAuthenticated ? (
                    children
                ) : error ? (
                    <LoadingLayout>
                        <EmptyStateError />
                    </LoadingLayout>
                ) : (
                    <LoadingLayout>
                        <Spinner size="xlarge" />
                    </LoadingLayout>
                )}
            </ContentLayout>
        </AppLayout>
    );
};
