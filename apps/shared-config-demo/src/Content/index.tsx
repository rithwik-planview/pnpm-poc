import { align, spacing } from '@planview/pv-utilities';
import styled from 'styled-components';
import { DropdownMenu, ListItem, ButtonGhost } from '@planview/pv-uikit';
import { relations } from '../relations';
import { loadRemote } from '@unity/core.shell';
import { getUnityBasePath } from '@unity/shared.utils';
import { useCallback } from 'react';

type ModuleType = Awaited<ReturnType<typeof loadRemote>>;
type MenuItemType = { label: string };

const filteredRelations = relations.Project.filter(({ relationName }) =>
    ['resourcesAndPlaceholders', 'documents', 'children'].includes(relationName),
);

const Container = styled.div`
    height: calc(100vh - 48px); /* 48px is the standard navigation bar height */
    width: 100%;
    display: flex;
    ${align.center};
    flex-direction: row;
    gap: ${spacing.large}px;
    padding: ${spacing.large}px;
    box-sizing: border-box;
`;

const RelationContainer = styled.div`
    ${align.centerV};
    ${spacing.medium};
    display: flex;
    flex-direction: column;
    gap: ${spacing.medium}px;
    height: calc(100vh - 48px - ${spacing.large * 2}px);
    flex: 1;
    border: 1px dotted #ccc;
    padding: ${spacing.medium}px;
    box-sizing: border-box;
    width: 100%;
`;

const RelationContent = styled.div`
    width: 100%;
`;

const elementModuleMap = new Map<string, ModuleType>();

let baseUrl: string | undefined = undefined;
try {
    if (!import.meta.env.DEV) {
        baseUrl = getUnityBasePath();
    }
} catch (error) {
    console.log('Running in local mode', error);
}

export const Content = () => {
    const renderRelation = useCallback(
        (relation: (typeof filteredRelations)[number], index: number) => {
            const elementId = `relation-viewer-${index}`;
            const element = document.getElementById(elementId);
            if (element) {
                if (elementModuleMap.has(elementId)) {
                    const existingModule = elementModuleMap.get(elementId);
                    if (existingModule) {
                        existingModule.default.destroy(element);
                    }
                    elementModuleMap.delete(elementId);
                }
                const suffix = index % 2 === 1 ? '-pink' : '';
                loadRemote({
                    remoteName: `@unity/features.relation-viewer${suffix}`,
                    baseUrl,
                }).then((module: ModuleType) => {
                    if (module) {
                        elementModuleMap.set(elementId, module);
                        module.default.render(element, {
                            entityId: '6.2165876948.902941',
                            entityType: 'Project',
                            fields: [
                                {
                                    entityType: relation.relationEntityType,
                                    fieldName: relation.displayField,
                                },
                                { entityType: relation.relationEntityType, fieldName: 'createdBy' },
                                { entityType: relation.relationEntityType, fieldName: 'createdOn' },
                            ],
                            relationName: relation.relationName,
                            relationEntityType: relation.relationEntityType,
                            title: relation.title,
                            onContextMenuAction: () => {
                                console.log('onContextMenuAction');
                            },
                            onAddRelation: () => {
                                console.log(`Add - ${relation.relationName}`);
                            },
                        });
                    }
                });
            }
        },
        [],
    );
    return (
        <Container>
            {[0, 1, 2, 3].map((index) => (
                <RelationContainer key={index}>
                    <DropdownMenu
                        label="Select a relation"
                        trigger={{
                            elementType: ButtonGhost,
                            label: 'Select Relation',
                            withCaret: true,
                        }}
                        onActivateItem={(item: MenuItemType) => {
                            const relation = filteredRelations.find(
                                (r) => r.relationName === item.label,
                            );
                            if (relation) {
                                renderRelation(relation, index);
                            }
                        }}
                    >
                        {filteredRelations.map((relation) => (
                            <ListItem
                                key={relation.relationName}
                                label={relation.relationName}
                                onActivate={() => relation.relationName}
                            />
                        ))}
                    </DropdownMenu>
                    <RelationContent id={`relation-viewer-${index}`}></RelationContent>
                </RelationContainer>
            ))}
        </Container>
    );
};
