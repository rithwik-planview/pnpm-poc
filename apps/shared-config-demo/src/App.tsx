import { HybridAppShell } from '@unity/shared.hybrid';
import { Content } from './Content';

const App = () => {
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
            <Content />
        </HybridAppShell>
    );
};

export default App;
