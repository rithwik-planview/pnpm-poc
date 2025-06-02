import type { GridActionsMenuFullProps } from '@planview/pv-grid';
import type { EnrichedEntity } from '@unity/shared.hybrid';
import type { Props } from '../types/types';
export declare function useRelationActionsMenu(
    entityId: string,
    relationName: string,
    onContextMenuAction?: Props['onContextMenuAction'],
): (
    actionMenuProps: GridActionsMenuFullProps<EnrichedEntity>,
) => import('react/jsx-runtime').JSX.Element;
//# sourceMappingURL=useRelationActionsMenu.d.ts.map
