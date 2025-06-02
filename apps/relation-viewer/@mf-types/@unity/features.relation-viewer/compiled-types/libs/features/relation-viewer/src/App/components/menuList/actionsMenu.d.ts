import type { GridActionsMenuFullProps } from '@planview/pv-grid';
import { type EnrichedEntity } from '@unity/shared.hybrid';
type Props = GridActionsMenuFullProps<EnrichedEntity> & {
    mainEntityId: string;
    relationName: string;
    onAction?: ({
        actionId,
        additionalData,
        relationEntityId,
        relationEntityName,
        relationEntityType,
        relationLinkId,
    }: {
        actionId: string;
        additionalData?: boolean;
        relationEntityId: string;
        relationEntityName?: string;
        relationEntityType: string;
        relationLinkId: string;
    }) => void;
};
export default function EntityActionsMenu({
    row,
    menuProps,
    mainEntityId,
    relationName,
    onAction,
}: Props): import('react/jsx-runtime').JSX.Element;
export {};
//# sourceMappingURL=actionsMenu.d.ts.map
