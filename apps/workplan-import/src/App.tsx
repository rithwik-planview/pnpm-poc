import { HybridAppShell } from '@unity/shared.hybrid';
import WorkplanImport from '@unity/features.workplan-import/App';

const App = () => {
    return (
        <HybridAppShell
            title="Workplan Import"
            origin="https://qaapp1.clarizen.com"
            basePath="release_20250525_1072"
        >
            <WorkplanImport
                entityExternalId={'2kj78511vb7x5dnpimzr3y5w42'}
                entityType={'Workitem'}
            />
        </HybridAppShell>
    );
};

export default App;
