import { z } from 'zod';
import type { EntitiesResponse, EntityModel } from '../../client/types.gen';

export const ApiPickerValueTypeSchema = z.object({
    internalId: z.string(),
    name: z.string(),
    color: z.string().optional(),
    externalId: z.string().optional(),
    imageUrl: z.string().nullish(),
});

export const EntityFieldSchema = z.union([
    z.null(),
    z.undefined(),
    z.string(),
    z.number(),
    z.boolean(),
    ApiPickerValueTypeSchema,
]);

export type StringValue = {
    type: 'String';
    value: string;
};

export type NumericValue = {
    type: 'Integer' | 'Long' | 'Double';
    value: number;
};

export type BooleanValue = {
    type: 'Boolean';
    value: boolean;
};

export type DateValue = {
    type: 'Date';
    value: string;
};

export type EntityValue = {
    type: 'Entity';
    value: {
        internalId: string;
        name: string;
        color?: string;
        imageUrl?: string;
        externalId?: string;
    };
};

export type UIFieldValue = StringValue | NumericValue | BooleanValue | DateValue | EntityValue;

export const EntityModelSchema = z.object({
    id: z.string(),
    entityTypeApiName: z.string(),
});

export type EnrichedEntity = EntityModel &
    z.infer<typeof EntityModelSchema> & {
        extensionData: Record<string, UIFieldValue>;
    };

export interface EnrichedEntitiesResponse extends EntitiesResponse {
    entities: EnrichedEntity[];
}
