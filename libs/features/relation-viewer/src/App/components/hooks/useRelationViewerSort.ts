import type { Props } from '../types/types';
import { useState } from 'react';
import type { GridColumnSort } from '@planview/pv-grid';
import { useRelationsDataLoader } from '@unity/shared.hybrid';

export function useRelationViewerSort({
    entityId,
    entityType,
    relationName,
    relationEntityType,
    fields,
}: Props) {
    const [sort, setSort] = useState<GridColumnSort[]>([]);

    const { loader, loading, error } = useRelationsDataLoader({
        entityType,
        entityId: entityId,
        relationName,
        relationEntityType,
        fields,
        sortBy: sort[0]?.columnId,
        sortStrategy: sort[0]?.direction === 'asc' ? 'Asc' : 'Desc',
    });

    return {
        rows: loader,
        loading,
        error,
        sort,
        setSort,
    };
}
