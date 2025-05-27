import { HybridAppShell } from '@unity/shared.hybrid';
import RelationViewer from '@unity/features.relation-viewer/App';
import { relations } from './relations';

const filteredRelations = relations.Project.filter(({ relationName }) =>
    ['documents', 'resourcesAndPlaceholders', 'children'].includes(relationName),
);

const App = () => {
    return (
        <HybridAppShell
            title="Relation Viewer"
            origin="https://qaapp1.clarizen.com"
            basePath="release_20250525_1072"
        >
            {filteredRelations.map(({ relationName, title, relationEntityType, displayField }) => (
                <RelationViewer
                    key={relationName}
                    entityId="6.2165876948.902941"
                    entityType="Project"
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
