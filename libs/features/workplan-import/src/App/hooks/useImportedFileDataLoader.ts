import { useMemo } from 'react';
import {
    type InputData,
    type OutputRow,
    type FieldsResponse,
    type WorkplanData,
    type RowValue,
    RowState,
} from '../types';

export function formatDate(dateStr: string): string {
    const [day, month, year] = dateStr.split(' ')[0].split('-');
    const date = new Date(Number(year), Number(month) - 1, Number(day)); // months are 0-indexed

    return new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    }).format(date);
}

function hasErrors(obj: OutputRow): boolean {
    for (const key in obj) {
        if (obj[key].error !== null) {
            return true;
        }
    }
    return false;
}

/**
 * Transforms the input JSON data into a format where each row has typed values
 * according to the field definitions in headers.
 *
 * @param inputData - The input JSON data
 * @returns Array of transformed row objects
 */
function transformJson(inputData: InputData): Record<string, OutputRow> {
    const { headers, rows } = inputData;
    const transformedRows: Record<string, OutputRow> = {};

    // Create a map of fieldName to fieldsResponse for easier lookup
    const fieldDefinitions = new Map<string, FieldsResponse>();
    headers.forEach((header) => {
        if (header.fieldsResponse) {
            fieldDefinitions.set(header.fieldsResponse.name, header.fieldsResponse);
        } else if (!header.error) {
            // Skip headers with errors
            fieldDefinitions.set(header.fieldName, {
                name: header.fieldName,
                type: 'String', // Default type if not specified
            });
        }
        // Skip the whole else if (header.error) block
    });

    // Transform each row
    rows.forEach((row) => {
        const transformedRow: OutputRow = {};
        // Process each value in the row
        Object.entries(row.values).forEach(([fieldName, fieldValue]) => {
            const fieldDef = fieldDefinitions.get(fieldName);

            // Skip fields that don't have a definition or have errors
            if (!fieldDef) return;

            // Handle different field types
            switch (fieldDef.type) {
                case 'Entity':
                    if (fieldValue.value !== null && fieldDef.presentationType === 'PickList') {
                        transformedRow[fieldDef.name] = {
                            type: fieldDef.type,
                            presentationType: fieldDef.presentationType,
                            referenceTypes: fieldDef.referenceTypes,
                            value: fieldValue.value,
                            error: fieldValue.error,
                            isChanged: fieldValue.isChanged,
                        };
                    }
                    // For Entity type, create an object with more details if objectId exists
                    else if (fieldValue.objectId) {
                        transformedRow[fieldDef.name] = {
                            type: fieldDef.type,
                            presentationType: fieldDef.presentationType,
                            referenceTypes: fieldDef.referenceTypes,
                            value: {
                                internalId: fieldValue.objectId,
                                name: fieldValue.value || '',
                                externalId: fieldValue.objectId, // Using objectId as externalId for demonstration
                                imageUrl: fieldValue.img,
                            },
                            error: fieldValue.error,
                            isChanged: fieldValue.isChanged,
                        };
                    } else if (fieldValue.value !== null) {
                        transformedRow[fieldDef.name] = {
                            type: fieldDef.type,
                            presentationType: fieldDef.presentationType,
                            referenceTypes: fieldDef.referenceTypes,
                            value: {
                                name: fieldValue.value,
                                internalId: fieldValue.serverValue || '',
                            },
                            error: fieldValue.error,
                            isChanged: fieldValue.isChanged,
                        };
                    }

                    break;

                case 'Relation':
                    // For Relation type, handle the listValues if present
                    if (fieldValue.listValues && fieldValue.listValues.length > 0) {
                        transformedRow[fieldDef.name] = {
                            type: fieldDef.type,
                            presentationType: fieldDef.presentationType,
                            referenceTypes: fieldDef.referenceTypes,
                            value: fieldValue.listValues.map((item: RowValue) => ({
                                name: item.value,
                                internalId: item.objectId,
                                externalId: fieldValue.objectId,
                                imageUrl: fieldValue.img,
                            })),
                            error: fieldValue.error,
                            isChanged: fieldValue.isChanged,
                        };
                    } else {
                        transformedRow[fieldDef.name] = {
                            type: fieldDef.type,
                            presentationType: fieldDef.presentationType,
                            referenceTypes: fieldDef.referenceTypes,
                            value: [],
                            error: fieldValue.error,
                            isChanged: fieldValue.isChanged,
                        };
                    }
                    break;

                case 'DateTime':
                    transformedRow[fieldDef.name] = {
                        type: fieldDef.type,
                        presentationType: fieldDef.presentationType,
                        referenceTypes: fieldDef.referenceTypes,
                        value: fieldValue.value ? fieldValue.serverValue : '', // if valid date, then format it else send string as is
                        error: fieldValue.error,
                        isChanged: fieldValue.isChanged,
                    };
                    break;

                case 'Duration':
                case 'Double':
                case 'String':
                default:
                    // For other types, just use the value directly
                    transformedRow[fieldDef.name] = {
                        type: fieldDef.type,
                        presentationType: fieldDef.presentationType,
                        referenceTypes: fieldDef.referenceTypes,
                        value: fieldValue.value || '',
                        error: fieldValue.error,
                        isChanged: fieldValue.isChanged,
                    };
                    break;
            }
        });

        // Check if any field has an error
        if (hasErrors(transformedRow)) {
            transformedRow['Operation'] = {
                type: 'String',
                value: RowState.Error,
            };
        } else {
            transformedRow['Operation'] = {
                type: 'String',
                value: row.rowState,
            };
        }
        transformedRows[row.objectId] = transformedRow;
    });
    return transformedRows;
}

export function useFileUploadMutation(data: WorkplanData | null): {
    loading: boolean | number;
    importData?: { rows: Record<string, OutputRow> };
} {
    const importData = useMemo(() => {
        if (!data || data.error) return;
        if (data.rows) {
            const rows = transformJson(data);
            return {
                rows,
            };
        }
    }, [data]);

    return {
        importData,
        loading: !Object.keys(importData?.rows || {}).length,
    };
}

export default useFileUploadMutation;
