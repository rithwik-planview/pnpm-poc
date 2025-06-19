import { z } from 'zod';
import type { EntitiesResponse, EntityModel } from '../../client/types.gen';
export declare const ApiPickerValueTypeSchema: z.ZodObject<{
    internalId: z.ZodString;
    name: z.ZodString;
    color: z.ZodOptional<z.ZodString>;
    externalId: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    internalId: string;
    color?: string | undefined;
    imageUrl?: string | null | undefined;
    externalId?: string | undefined;
}, {
    name: string;
    internalId: string;
    color?: string | undefined;
    imageUrl?: string | null | undefined;
    externalId?: string | undefined;
}>;
export declare const EntityFieldSchema: z.ZodUnion<[z.ZodNull, z.ZodUndefined, z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodObject<{
    internalId: z.ZodString;
    name: z.ZodString;
    color: z.ZodOptional<z.ZodString>;
    externalId: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    internalId: string;
    color?: string | undefined;
    imageUrl?: string | null | undefined;
    externalId?: string | undefined;
}, {
    name: string;
    internalId: string;
    color?: string | undefined;
    imageUrl?: string | null | undefined;
    externalId?: string | undefined;
}>]>;
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
export declare const EntityModelSchema: z.ZodObject<{
    id: z.ZodString;
    entityTypeApiName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    entityTypeApiName: string;
}, {
    id: string;
    entityTypeApiName: string;
}>;
export type EnrichedEntity = EntityModel & z.infer<typeof EntityModelSchema> & {
    extensionData: Record<string, UIFieldValue>;
};
export interface EnrichedEntitiesResponse extends EntitiesResponse {
    entities: EnrichedEntity[];
}
//# sourceMappingURL=types.d.ts.map