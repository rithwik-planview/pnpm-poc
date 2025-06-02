import { type GridRowIndexes } from '@planview/pv-grid';
import type { EntitySortStrategy } from '../../client/types.gen';
import type { EnrichedEntity } from './types';
export type Loader = {
    data: Record<string, EnrichedEntity>;
    ids: string[];
    fetch: (i: GridRowIndexes) => void;
};
type Field = {
    entityType: string;
    fieldName: string;
};
type Options = {
    entityType: string;
    entityId: string;
    relationName: string;
    relationEntityType: string;
    sortBy?: string;
    sortStrategy?: EntitySortStrategy;
    fields: Field[];
};
export declare function useRelationsDataLoader(
    {
        entityType,
        entityId,
        relationName,
        relationEntityType,
        sortBy,
        sortStrategy,
        fields,
    }: Options,
    limit?: number,
): {
    loading: boolean;
    error: boolean;
    loader: Loader;
};
export default useRelationsDataLoader;
//# sourceMappingURL=useRelationsDataLoader.d.ts.map
