import { type GridRowIndexes } from '@planview/pv-grid';
import { useQueries, type UseQueryResult } from '@tanstack/react-query';
import debounce from 'lodash.debounce';
import { useCallback, useMemo, useRef, useState } from 'react';
import { genericEntityGetRelationsOptions } from '../../client/@tanstack/react-query.gen';
import type { EntitiesResponse, EntitySortStrategy } from '../../client/types.gen';
import { getEnrichedEntitiesResponse } from './utils';
import type { EnrichedEntity } from './types';
import useMetadataFieldsQuery from '../metadata/useMetadataFieldsQuery';

const OVER_SCAN = 5;

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
export function useRelationsDataLoader(
    {
        entityType,
        entityId,
        relationName,
        relationEntityType,
        sortBy,
        sortStrategy = 'Asc',
        fields,
    }: Options,
    limit = 25,
): {
    loading: boolean;
    error: boolean;
    loader: Loader;
} {
    const [pages, setPages] = useState<number[]>([]);
    const combine = useCallback((results: UseQueryResult<EntitiesResponse>[]) => {
        let data;
        if (results.length && results.every((r) => r.data)) {
            data = {
                total: (results[0].data as EntitiesResponse).grandTotal,
                entities: results.map((r) => r.data as EntitiesResponse),
                pages: results.map((r) => {
                    const data = r.data as EntitiesResponse;
                    const { offset, limit } = data;
                    const page = ~~((Number(offset) - 1) / Number(limit)) + 1;
                    return page;
                }),
            };
        }

        return {
            data,
            isPending: results.some((r) => r.isPending),
            error: results.some((r) => !!r.error),
        };
    }, []);
    const entityRelations = useQueries({
        queries: pages.map((page) => ({
            ...genericEntityGetRelationsOptions({
                path: {
                    entityType,
                    entityId: entityId,
                    relationName,
                },
                body: {
                    limit,
                    offset: (page - 1) * limit,
                    fields: fields
                        .filter(({ entityType: e }) => e === relationEntityType)
                        .map(({ fieldName }) => fieldName),
                    relations: [],
                    dataFilters: [],
                    excludePermissions: true,
                    sortBy,
                    sortStrategy,
                },
            }),
            staleTime: Infinity,
        })),
        combine,
    });
    const relationMetadata = useMetadataFieldsQuery(relationEntityType);
    const data = useMemo(() => {
        if (entityRelations.data && relationMetadata.data) {
            return {
                total: entityRelations.data.total,
                items: entityRelations.data.entities
                    .map((entityResponse) =>
                        getEnrichedEntitiesResponse(entityResponse, relationMetadata.data),
                    )
                    .flatMap(({ entities }) => entities),
                pages: entityRelations.data.pages,
            };
        }
    }, [entityRelations.data, relationMetadata.data]);
    const fetch = useMemo(() => {
        const internalFetch = ([start, end]: GridRowIndexes) => {
            start = Math.max(0, start - OVER_SCAN);
            end = end + OVER_SCAN;
            const startPage = Math.floor(start / limit) + 1;
            const endPage = Math.floor(end / limit) + 1;
            const newPages = Array.from({ length: endPage - startPage + 1 }).map(
                (_, i) => startPage + i,
            );
            setPages((pages) => {
                if (newPages.some((p, i) => p !== pages[i])) {
                    return newPages;
                }
                return pages;
            });
        };
        return debounce(internalFetch, 200);
    }, [limit]);
    const previousLoader = useRef<Loader>({
        ids: [],
        data: {},
        fetch,
    });
    const loader = useMemo(() => {
        // While the subscription is being fetched, simply return the previousRow
        if (!data) {
            return previousLoader.current;
        }
        const offset = (data.pages[0] - 1) * limit;
        const length = data.items.length;
        // Update previousRow value
        previousLoader.current = {
            ids: Array.from({ length: data.total }).map((_, i) =>
                i < offset || i >= offset + length
                    ? // If the index is outside the currently subscribed pages, return a placeholder id to show loading row
                      `loading-row-${i}`
                    : // If the index is within the bounds of currently subscribed page, fetch the id from data
                      data.items[i - offset].id,
            ),
            data: Object.fromEntries(data.items.map((item) => [item.id, item])),
            fetch,
        };
        return previousLoader.current;
    }, [data, fetch, limit]);

    return {
        loader,
        error:
            !Object.keys(loader.data).length && (entityRelations.error || !!relationMetadata.error),
        loading:
            !Object.keys(loader.data).length &&
            (entityRelations.isPending || relationMetadata.isPending),
    };
}

export default useRelationsDataLoader;
