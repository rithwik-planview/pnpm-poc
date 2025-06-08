import { HybridAppShell } from '@unity/shared.hybrid';
import RelationViewer from '@unity/features.relation-viewer/App';
import { relations } from './relations';

const filteredRelations = relations.Project.filter(({ relationName }) =>
    ['documents', 'resourcesAndPlaceholders', 'children'].includes(relationName),
);

const App = () => {
    let origin, basePath, hybridBasePath, username, password, entityType, entityId;
    try {
        origin = import.meta.env.PUBLIC_HYBRID_AUTH_ORIGIN;
        basePath = import.meta.env.PUBLIC_HYBRID_AUTH_BASE_PATH;
        hybridBasePath = import.meta.env.PUBLIC_HYBRID_AUTH_HYBRID_BASE_PATH;
        username = import.meta.env.PUBLIC_HYBRID_AUTH_USERNAME;
        password = import.meta.env.PUBLIC_HYBRID_AUTH_PASSWORD;
        entityType = import.meta.env.PUBLIC_ENTITY_TYPE;
        entityId = import.meta.env.PUBLIC_ENTITY_ID;
    } catch (error) {
        console.error('Some environment variables not set, using defaults:', error);
        origin = origin || 'https://qaapp1.clarizen.com';
        basePath = basePath || 'release.latest';
        hybridBasePath = hybridBasePath || 'HybridSolutions';
        username = username || 'Admin_User';
        password = password || 'Password1!';
        entityType = entityType || 'Project';
        entityId = entityId || '6.2165876948.902941';
    }
    return (
        <HybridAppShell
            title="Relation Viewer"
            origin={origin}
            basePath={basePath}
            hybridBasePath={hybridBasePath}
            username={username}
            password={password}
        >
            {filteredRelations.map(({ relationName, title, relationEntityType, displayField }) => (
                <RelationViewer
                    key={relationName}
                    entityId={entityId}
                    entityType={entityType}
                    fields={[displayField, 'createdBy', 'createdOn'].map((fieldName) => ({
                        entityType: relationEntityType,
                        fieldName,
                    }))}
                    relationName={relationName}
                    relationEntityType={relationEntityType}
                    title={title}
                    onContextMenuAction={(args: { [key: string]: unknown }) => {
                        console.log('onContextMenuAction', { ...args });
                    }}
                    onAddRelation={() => {
                        console.log(`Add - ${relationName}`);
                    }}
                />
            ))}
        </HybridAppShell>
    );
};

export default App;
