import { useCallback } from 'react';
import EntityActionsMenu from '../menuList/actionsMenu';
import type { GridActionsMenuFullProps } from '@planview/pv-grid';
import type { EnrichedEntity } from '@unity/shared.hybrid';
import type { Props } from '../types/types';

export function useRelationActionsMenu(
    entityId: string,
    relationName: string,
    onContextMenuAction?: Props['onContextMenuAction'],
) {
    return useCallback(
        (actionMenuProps: GridActionsMenuFullProps<EnrichedEntity>) => (
            <EntityActionsMenu
                {...actionMenuProps}
                onAction={onContextMenuAction}
                mainEntityId={entityId}
                relationName={relationName}
            />
        ),
        [entityId, relationName, onContextMenuAction],
    );
}
