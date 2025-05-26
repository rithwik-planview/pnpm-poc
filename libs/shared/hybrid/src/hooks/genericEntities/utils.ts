import { z } from 'zod';
import type { EntitiesResponse, EntityModel } from '../../client/types.gen';
import type { FieldsResponseAugumented } from '../metadata/useMetadataFieldsQuery';
import {
    ApiPickerValueTypeSchema,
    type EnrichedEntitiesResponse,
    type EnrichedEntity,
    EntityFieldSchema,
    EntityModelSchema,
} from './types';

function enrichExtensionData(
    extensionData: Record<string, unknown> | undefined,
    metadataFields: FieldsResponseAugumented[],
) {
    return Object.fromEntries(
        Object.entries(extensionData ?? {}).map(([key, field]) => {
            return enrichField(key, field, metadataFields);
        }),
    );
}

function enrichField(key: string, field: unknown, metadataFields: FieldsResponseAugumented[]) {
    const mayBeField = EntityFieldSchema.safeParse(field);
    if (!mayBeField.success) {
        console.error('Failed to parse field:', key, field);
        return [];
    }

    const metaField = metadataFields.find((d) => d.name === key);
    if (!metaField) {
        console.error('Failed to find metadata field:', key);
        return [];
    }

    const value = mayBeField.data;
    return handleFieldByType(key, value, metaField);
}

const dateFormatter = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
});

function handleFieldByType(key: string, value: unknown, metaField: FieldsResponseAugumented) {
    switch (metaField.type) {
        case 'String':
            return parseFieldAsString(key, value);
        case 'Integer':
        case 'Long':
        case 'Double':
            return parseFieldAsNumber(key, value, metaField.type);
        case 'Boolean':
            return parseFieldAsBoolean(key, value);
        case 'DateTime':
        case 'Date':
            return parseFieldAsDate(key, value);
        case 'Entity':
            return parseFieldAsEntity(key, value);
        default:
            console.error('Unhandled field type:', metaField.type);
            return [];
    }
}

function parseFieldAsString(key: string, value: unknown) {
    const mayBeString = z.string().safeParse(value);
    if (mayBeString.success) {
        return [key, { type: 'String', value: mayBeString.data }];
    }
    console.error('Failed to parse string:', key, value);
    return [];
}

function parseFieldAsNumber(key: string, value: unknown, type: 'Integer' | 'Long' | 'Double') {
    const mayBeNumber = z.number().safeParse(value);
    if (mayBeNumber.success) {
        return [key, { type, value: mayBeNumber.data }];
    }
    console.error('Failed to parse number:', key, value);
    return [];
}

function parseFieldAsBoolean(key: string, value: unknown) {
    const mayBeBoolean = z.boolean().safeParse(value);
    if (mayBeBoolean.success) {
        return [key, { type: 'Boolean', value: mayBeBoolean.data }];
    }
    console.error('Failed to parse boolean:', key, value);
    return [];
}

export function parseFieldAsDate(key: string, value: unknown) {
    const mayBeDate = z.coerce.date().safeParse(value);
    if (mayBeDate.success) {
        return [key, { type: 'Date', value: dateFormatter.format(mayBeDate.data) }];
    }
    console.error('Failed to parse date:', key, value);
    return [];
}

function parseFieldAsEntity(key: string, value: unknown) {
    const mayBeEntity = ApiPickerValueTypeSchema.safeParse(value);
    if (mayBeEntity.success) {
        return [key, { type: 'Entity', value: mayBeEntity.data }];
    }
    console.error('Failed to parse entity:', key, value);
    return [];
}

type SafeEntityModel = Omit<EnrichedEntity, 'extensionData'> & Pick<EntityModel, 'extensionData'>;
function isSafeEntityModel(entity: EntityModel): entity is SafeEntityModel {
    return EntityModelSchema.safeParse(entity).success;
}

function getEnrichedEntity(
    entity: SafeEntityModel,
    metadataFields: FieldsResponseAugumented[],
): EnrichedEntity {
    const enrichedEntity: EnrichedEntity = {
        ...entity,
        extensionData: enrichExtensionData(entity.extensionData, metadataFields),
    };
    return enrichedEntity;
}

export function getEnrichedEntitiesResponse(
    response: EntitiesResponse,
    metadataFields: FieldsResponseAugumented[],
): EnrichedEntitiesResponse {
    const { entities } = response;
    const enrichedEntities = entities.filter(isSafeEntityModel).map((entity) => {
        return getEnrichedEntity(entity, metadataFields);
    });
    return {
        ...response,
        entities: enrichedEntities,
    };
}
