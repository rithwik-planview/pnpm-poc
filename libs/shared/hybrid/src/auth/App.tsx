import React from 'react';
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
import { useAuth } from './useAuth';

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
    basePath,
    hybridBasePath,
    username,
    password,
    children,
}) => {
    const { isAuthenticated, error, user, handleLogout } = useAuth({
        origin,
        basePath,
        hybridBasePath,
        username,
        password,
    });

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
                                    initials={user.fullName
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
                        <ListItem icon={<User />} label={user.fullName} />
                        <ListItem icon={<Mail />} label={user.email} />
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
