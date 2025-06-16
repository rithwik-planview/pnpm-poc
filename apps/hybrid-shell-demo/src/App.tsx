import { align, spacing, text } from '@planview/pv-utilities';
import { HybridAppShell } from '@unity/shared.hybrid';
import styled from 'styled-components';
import { decodeToken } from '@unity/shared.hybrid';

const Content = styled.div`
    height: 100%;
    ${align.center};
    flex-direction: column;
    gap: ${spacing.large}px;
`;

const H1 = styled.h1`
    ${text.h1};
    font-size: 48px;
`;

const P = styled.p`
    ${text.regular};
`;

const App = () => {
    const fullName = decodeToken(localStorage.getItem('sessionId'))?.clzUserName ?? '';
    let origin, basePath, hybridBasePath, username, password;
    try {
        origin = import.meta.env.PUBLIC_HYBRID_AUTH_ORIGIN;
        basePath = import.meta.env.PUBLIC_HYBRID_AUTH_BASE_PATH;
        hybridBasePath = import.meta.env.PUBLIC_HYBRID_AUTH_HYBRID_BASE_PATH;
        username = import.meta.env.PUBLIC_HYBRID_AUTH_USERNAME;
        password = import.meta.env.PUBLIC_HYBRID_AUTH_PASSWORD;
    } catch (error) {
        console.error('Some environment variables not set, using defaults:', error);
        origin = origin || 'https://qaapp1.clarizen.com';
        basePath = basePath || 'release.latest';
        hybridBasePath = hybridBasePath || 'HybridSolutions';
        username = username || 'Admin_User';
        password = password || 'Password1!';
    }
    return (
        <HybridAppShell
            origin={origin}
            basePath={basePath}
            hybridBasePath={hybridBasePath}
            username={username}
            password={password}
            title="Authenticated Hybrid Shell"
        >
            <Content>
                <H1>Hi, {fullName} 👋</H1>
                <P>Welcome to an authenticated hybrid shell!</P>
            </Content>
        </HybridAppShell>
    );
};

export default App;
