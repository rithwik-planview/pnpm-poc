import React from 'react';
import type { Column, GridActionsMenu, GridColumnSort, GridRowMeta } from '@planview/pv-grid';
import { Grid } from '@planview/pv-grid';
import { EmptyState, EmptyStateError } from '@planview/pv-uikit';
import type { EnrichedEntity, Loader } from '@unity/shared.hybrid';
import { size } from '@planview/pv-utilities';

type Props = {
    loading: boolean;
    columns: Column<EnrichedEntity>[];
    rows: Loader;
    sort: GridColumnSort[];
    onSortChange: (sort: GridColumnSort[]) => void;
    error: unknown;
    actionsMenu?: GridActionsMenu<EnrichedEntity, GridRowMeta<EnrichedEntity>> | undefined;
};

function clamp(min: number, value: number, max: number): number {
    return Math.max(min, Math.min(value, max));
}

const MAX_VISIBLE_ROWS = 5;
const MIN_VISIBLE_ROWS = 1;

export const RelationViewerGrid: React.FC<Props> = ({
    loading,
    columns,
    rows,
    sort,
    onSortChange,
    error,
    actionsMenu,
}) => {
    const height = (clamp(MIN_VISIBLE_ROWS, rows.ids.length, MAX_VISIBLE_ROWS) + 1) * size.medium;
    return (
        <div style={{ height }}>
            <Grid
                loading={loading}
                columns={columns}
                rows={rows}
                actionsMenu={actionsMenu}
                emptyContent={
                    error ? <EmptyStateError /> : <EmptyState header="Nothing found here." />
                }
                sortMode="external"
                sort={sort}
                onSortChange={onSortChange}
                multiColumnSort={false}
            />
        </div>
    );
};
