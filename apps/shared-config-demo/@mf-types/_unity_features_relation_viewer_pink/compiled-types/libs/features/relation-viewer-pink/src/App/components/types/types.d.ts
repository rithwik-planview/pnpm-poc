export type Field = {
    entityType: string;
    fieldName: string;
};
export type Props = {
    entityId: string;
    entityType: string;
    relationName: string;
    relationEntityType: string;
    fields: Field[];
    title: string;
    onContextMenuAction?: ({ actionId, additionalData, relationEntityId, relationEntityName, relationEntityType, relationLinkId, }: {
        actionId: string;
        additionalData?: boolean;
        relationEntityId: string;
        relationEntityName?: string;
        relationEntityType: string;
        relationLinkId: string;
    }) => void;
    onAddRelation: () => void;
};
export type RelationViewerHandle = {
    refresh: () => void;
};
export type DeletePayload = {
    relationEntityId: string;
    relationEntityType: string;
    relationLinkId: string;
};
//# sourceMappingURL=types.d.ts.map