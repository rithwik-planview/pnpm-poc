import type { FieldsResponse, MetadataGetAvailableFieldsData } from '../../client/types.gen';
import type { Options } from '@hey-api/client-axios';
import { z } from 'zod';
export declare const FieldsResponseSchema: z.ZodObject<
    {
        name: z.ZodString;
        type: z.ZodUnion<
            [
                z.ZodLiteral<'Entity'>,
                z.ZodLiteral<'DateTime'>,
                z.ZodLiteral<'Date'>,
                z.ZodLiteral<'String'>,
                z.ZodLiteral<'Boolean'>,
                z.ZodLiteral<'Integer'>,
                z.ZodLiteral<'Long'>,
                z.ZodLiteral<'Double'>,
                z.ZodLiteral<'Money'>,
                z.ZodLiteral<'Duration'>,
                z.ZodLiteral<'MultiPickList'>,
                z.ZodLiteral<'Relation'>,
            ]
        >;
        presentationType: z.ZodUnion<
            [
                z.ZodLiteral<'ReferenceToObject'>,
                z.ZodLiteral<'Date'>,
                z.ZodLiteral<'Text'>,
                z.ZodLiteral<'TextArea'>,
                z.ZodLiteral<'Checkbox'>,
                z.ZodLiteral<'Boolean'>,
                z.ZodLiteral<'Currency'>,
                z.ZodLiteral<'Duration'>,
                z.ZodLiteral<'Effort'>,
                z.ZodLiteral<'Numeric'>,
                z.ZodLiteral<'Percent'>,
                z.ZodLiteral<'Progress'>,
                z.ZodLiteral<'Label'>,
                z.ZodLiteral<'PickList'>,
                z.ZodLiteral<'MultiPickList'>,
                z.ZodLiteral<'Url'>,
                z.ZodLiteral<'Relation'>,
                z.ZodLiteral<'Other'>,
            ]
        >;
    },
    'strip',
    z.ZodTypeAny,
    {
        name: string;
        type:
            | 'Date'
            | 'Entity'
            | 'DateTime'
            | 'String'
            | 'Boolean'
            | 'Integer'
            | 'Long'
            | 'Double'
            | 'Money'
            | 'Duration'
            | 'MultiPickList'
            | 'Relation';
        presentationType:
            | 'Numeric'
            | 'PickList'
            | 'Date'
            | 'ReferenceToObject'
            | 'Checkbox'
            | 'Text'
            | 'TextArea'
            | 'Boolean'
            | 'Duration'
            | 'MultiPickList'
            | 'Relation'
            | 'Currency'
            | 'Effort'
            | 'Percent'
            | 'Progress'
            | 'Label'
            | 'Url'
            | 'Other';
    },
    {
        name: string;
        type:
            | 'Date'
            | 'Entity'
            | 'DateTime'
            | 'String'
            | 'Boolean'
            | 'Integer'
            | 'Long'
            | 'Double'
            | 'Money'
            | 'Duration'
            | 'MultiPickList'
            | 'Relation';
        presentationType:
            | 'Numeric'
            | 'PickList'
            | 'Date'
            | 'ReferenceToObject'
            | 'Checkbox'
            | 'Text'
            | 'TextArea'
            | 'Boolean'
            | 'Duration'
            | 'MultiPickList'
            | 'Relation'
            | 'Currency'
            | 'Effort'
            | 'Percent'
            | 'Progress'
            | 'Label'
            | 'Url'
            | 'Other';
    }
>;
export type FieldsResponseAugumented = FieldsResponse & z.infer<typeof FieldsResponseSchema>;
export interface Header {
    fieldName: string;
    error: string | null;
    fieldsResponse: FieldsResponseAugumented;
}
export declare function fileteredMetadataFieldsQueryOptions(
    options: Options<MetadataGetAvailableFieldsData>,
): import('@tanstack/react-query').OmitKeyof<
    import('@tanstack/react-query').UseQueryOptions<
        FieldsResponseAugumented[],
        Error,
        FieldsResponseAugumented[],
        [
            Pick<
                import('../../client/sdk.gen').Options<MetadataGetAvailableFieldsData>,
                'body' | 'path' | 'headers' | 'baseURL' | 'query'
            > & {
                _id: string;
                _infinite?: boolean;
            },
        ]
    >,
    'queryFn'
> & {
    queryFn?:
        | import('@tanstack/react-query').QueryFunction<
              FieldsResponseAugumented[],
              [
                  Pick<
                      import('../../client/sdk.gen').Options<MetadataGetAvailableFieldsData>,
                      'body' | 'path' | 'headers' | 'baseURL' | 'query'
                  > & {
                      _id: string;
                      _infinite?: boolean;
                  },
              ],
              never
          >
        | undefined;
} & {
    queryKey: [
        Pick<
            import('../../client/sdk.gen').Options<MetadataGetAvailableFieldsData>,
            'body' | 'path' | 'headers' | 'baseURL' | 'query'
        > & {
            _id: string;
            _infinite?: boolean;
        },
    ] & {
        [dataTagSymbol]: FieldsResponseAugumented[];
        [dataTagErrorSymbol]: Error;
    };
};
export declare function useMetadataFieldsQuery(
    entityType: string,
): import('@tanstack/react-query').UseQueryResult<FieldsResponseAugumented[], Error>;
export default useMetadataFieldsQuery;
//# sourceMappingURL=useMetadataFieldsQuery.d.ts.map
