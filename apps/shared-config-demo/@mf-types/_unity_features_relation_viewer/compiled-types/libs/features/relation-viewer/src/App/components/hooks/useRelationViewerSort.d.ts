import type { Props } from '../types/types';
import type { GridColumnSort } from '@planview/pv-grid';
export declare function useRelationViewerSort({ entityId, entityType, relationName, relationEntityType, fields, }: Props): {
    rows: import("@unity/shared.hybrid").Loader;
    loading: boolean;
    error: boolean;
    sort: GridColumnSort[];
    setSort: import("react").Dispatch<import("react").SetStateAction<GridColumnSort[]>>;
};
//# sourceMappingURL=useRelationViewerSort.d.ts.map