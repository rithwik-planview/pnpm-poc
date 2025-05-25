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
    return (
        <HybridAppShell
            title="Authenticated Hybrid Shell"
            origin="https://qaapp5.clarizen.com"
            basePath="release_20250421_1044"
        >
            <Content>
                <H1>Hi, {fullName} 👋</H1>
                <P>Welcome to an authenticated hybrid shell!</P>
            </Content>
        </HybridAppShell>
    );
};

export default App;
