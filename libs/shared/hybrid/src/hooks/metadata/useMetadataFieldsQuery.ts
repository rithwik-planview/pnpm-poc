import { queryOptions, useQuery } from '@tanstack/react-query';
import {
    metadataGetAvailableFieldsOptions,
    metadataGetAvailableFieldsQueryKey,
} from '../../data-access';
import type { FieldsResponse, MetadataGetAvailableFieldsData } from '../../client/types.gen';
import type { Options } from '@hey-api/client-axios';
import { z } from 'zod';

const ApiFieldDataTypeSchema = z.union([
    z.literal('Entity'),
    z.literal('DateTime'),
    z.literal('Date'),
    z.literal('String'),
    z.literal('Boolean'),
    z.literal('Integer'),
    z.literal('Long'),
    z.literal('Double'),
    z.literal('Money'),
    z.literal('Duration'),
    z.literal('MultiPickList'),
    z.literal('Relation'),
]);

const ApiFieldPresentationTypeSchema = z.union([
    z.literal('ReferenceToObject'),
    z.literal('Date'),
    z.literal('Text'),
    z.literal('TextArea'),
    z.literal('Checkbox'),
    z.literal('Boolean'),
    z.literal('Currency'),
    z.literal('Duration'),
    z.literal('Effort'),
    z.literal('Numeric'),
    z.literal('Percent'),
    z.literal('Progress'),
    z.literal('Label'),
    z.literal('PickList'),
    z.literal('MultiPickList'),
    z.literal('Url'),
    z.literal('Relation'),
    z.literal('Other'),
]);

export const FieldsResponseSchema = z.object({
    name: z.string(),
    type: ApiFieldDataTypeSchema,
    presentationType: ApiFieldPresentationTypeSchema,
});

export type FieldsResponseAugumented = FieldsResponse & z.infer<typeof FieldsResponseSchema>;

export interface Header {
    fieldName: string;
    error: string | null;
    fieldsResponse: FieldsResponseAugumented;
}

export function fileteredMetadataFieldsQueryOptions(
    options: Options<MetadataGetAvailableFieldsData>,
) {
    return queryOptions({
        queryKey: metadataGetAvailableFieldsQueryKey(options),
        queryFn: async (...args) => {
            const data = await metadataGetAvailableFieldsOptions(options)?.queryFn?.(...args);
            return data?.filter(
                (d) => FieldsResponseSchema.safeParse(d).success,
            ) as FieldsResponseAugumented[];
        },
    });
}

export function useMetadataFieldsQuery(entityType: string) {
    const options = {
        body: {
            entityType,
            includeRelations: true,
        },
    };
    return useQuery({
        ...fileteredMetadataFieldsQueryOptions(options),
        staleTime: Infinity,
    });
}

export default useMetadataFieldsQuery;
