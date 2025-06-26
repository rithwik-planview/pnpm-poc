/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FieldsResponseAugumented } from '@unity/shared.hybrid';

export interface FieldsResponse {
    name: string;
    type: string;
    // label: string;
    [key: string]: unknown;
}

export interface Header {
    fieldName: string;
    error: string | null;
    fieldsResponse: FieldsResponseAugumented /*  | FieldsResponse | null */;
}

/* interface Header {
    fieldName: string;
    error: string | null;
    fieldsResponse: {
        name: string;
        type: string;
        [key: string]: any;
    } | null;
} */

export interface CellValue {
    readOnly: boolean;
    isChanged: boolean;
    value: string;
    serverValue: string | null;
    initialValue: string | null;
    objectId: string | null;
    mainIdentifier: string | null;
    img: string | null;
    error: string | null;
    warning: string | null;
    isImportNewObjectDependency: boolean;
    listValues: CellValue[] | null;
}

export interface RowValue {
    readOnly: boolean;
    isChanged: boolean;
    value: string | null;
    serverValue: string | null;
    initialValue: string | null;
    objectId: string | null;
    mainIdentifier: string | null;
    img: string | null;
    error: string | null;
    warning: string | null;
    isImportNewObjectDependency: boolean;
    listValues: RowValue[] | null;
}

export enum RowState {
    Unchanged = 'Unchanged',
    Updated = 'Updated',
    New = 'New',
    Error = 'Error',
}

interface Row {
    mainIdentifier: string;
    objectId: string;
    rowState: RowState;
    values: {
        [key: string]: RowValue;
    };
}

export interface InputData {
    guid: string;
    error: string | null;
    headers: Header[];
    rows: Row[];
    isImportWorkPlan: boolean;
}

type referenceType = {
    type: string;
    displayField: string | null;
};
export interface TypedValue {
    type: string;
    presentationType?: string | unknown;
    referenceTypes?: referenceType[] | null | unknown;

    value: unknown;
    error?: string | null;
    isChanged?: boolean;
}

export interface OutputRow {
    [key: string]: TypedValue;
}

export interface WorkplanData {
    guid: string;
    error: string | null;
    headers: Header[];
    rows: Row[];
    isImportWorkPlan: boolean;
}

export interface TransformedRow {
    mainIdentifier: string;
    objectId: string;
    rowState: string;
    [key: string]: any;
}

export type CellValidationState = 'Ok' | 'Error';
export interface CellValidationResult {
    state: CellValidationState;
    error: string | null;
}

export interface ValidateResponse {
    fileId: string; // GUID from upload response
    errors: string[];
    rowErrors: {
        [rowId: string]: {
            errors: string[];
            cellErrors: {
                [columnName: string]: CellValidationResult;
            };
        };
    };
}
