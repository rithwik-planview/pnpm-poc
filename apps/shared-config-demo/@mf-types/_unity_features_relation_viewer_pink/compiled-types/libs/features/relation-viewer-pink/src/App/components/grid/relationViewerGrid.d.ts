import React from 'react';
import type { Column, GridActionsMenu, GridColumnSort, GridRowMeta } from '@planview/pv-grid';
import type { EnrichedEntity, Loader } from '@unity/shared.hybrid';
type Props = {
    loading: boolean;
    columns: Column<EnrichedEntity>[];
    rows: Loader;
    sort: GridColumnSort[];
    onSortChange: (sort: GridColumnSort[]) => void;
    error: unknown;
    actionsMenu?: GridActionsMenu<EnrichedEntity, GridRowMeta<EnrichedEntity>> | undefined;
};
export declare const RelationViewerGrid: React.FC<Props>;
export {};
//# sourceMappingURL=relationViewerGrid.d.ts.map