import { useState, useMemo, useCallback } from 'react';
import { debounce } from '../utils/debounce';
import { useQuery } from '@tanstack/react-query';
import { genericEntityGetOptions } from '@unity/shared.hybrid';
import { type TypedValue } from '../types';

type entityType = {
    entityTypeApiName?: string;
    extensionData: {
        [key: string]: string | null;
    };
    id: string;
    internalId: string;
};

export function useRelationOptions(fieldValue: TypedValue) {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSetSearchTerm = useMemo(
        () => debounce((value: string) => setSearchTerm(value), 300),
        [],
    );

    const handleSearch = useCallback(
        (value: string) => {
            debouncedSetSearchTerm(value);
        },
        [debouncedSetSearchTerm],
    );

    const shouldFetch =
        fieldValue?.presentationType === 'ReferenceToObject' ||
        fieldValue?.presentationType === 'Relation';

    const { data, isLoading } = useQuery({
        ...genericEntityGetOptions({
            body: {
                fields: ['name', 'imageUrl'],
                relations: [],
                dataFilters: searchTerm
                    ? [
                          {
                              field: {
                                  entityType:
                                      Array.isArray(fieldValue?.referenceTypes) &&
                                      fieldValue?.referenceTypes.length > 0
                                          ? fieldValue.referenceTypes[0].type
                                          : '',
                                  fieldName: 'Name',
                              },
                              operator: 'Contains',
                              filterValueType: 'Text',
                              values: [{ value: searchTerm }],
                          },
                      ]
                    : [],
                offset: 0,
                limit: 500,
                sortBy: 'name',
                sortStrategy: 'Asc',
                excludePermissions: true,
            },
            path: {
                entityType:
                    Array.isArray(fieldValue?.referenceTypes) &&
                    fieldValue?.referenceTypes.length > 0
                        ? fieldValue.referenceTypes[0].type
                        : '',
            },
        }),
        enabled: shouldFetch,
    });

    const relationsOptions = useMemo(
        () =>
            (data?.entities as entityType[])?.map((item) => ({
                label: item.extensionData.name ?? item.extensionData.displayName ?? '',
                value: item.extensionData.name ?? item.extensionData.displayName ?? '',
                internalId: item.internalId,
                avatar: item.extensionData.imageUrl || undefined,
            })) || [],
        [data],
    );

    return useMemo(
        () => ({ relationsOptions, isLoading, handleSearch }),
        [relationsOptions, isLoading, handleSearch],
    );
}
