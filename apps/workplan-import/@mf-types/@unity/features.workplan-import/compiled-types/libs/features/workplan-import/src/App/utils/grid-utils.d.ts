import React from 'react';
import { type IconProps } from '@planview/pv-icons';
import { type Column } from '@planview/pv-grid';
import {
    type Header,
    type EnrichedEntity,
    type FieldsResponseAugumented,
} from '@unity/shared.hybrid';
import { RowState } from '../types';
import { type ComboboxOption } from '@planview/pv-uikit';
export interface FilterOption {
    icon: React.JSX.Element;
    label: string;
    value: string | null;
}
type RowStateIconMap = {
    [key in RowState]: React.ReactElement;
};
type ColumnConfigParams = {
    field: Header | FieldsResponseAugumented;
    isNullField?: boolean;
};
export declare const rowStateIcons: RowStateIconMap;
export declare const filterOptions: ComboboxOption[];
export declare function operationToIcon(operation: string): React.ReactElement<IconProps>;
export declare function getColumnConfigForNullFields_(field: Header): {
    id: string;
    label: string;
    cell: {
        Renderer?:
            | (({
                  rowId,
                  tabIndex,
                  label,
              }: {
                  rowId: string;
                  tabIndex: number;
                  label: string;
              }) => import('react/jsx-runtime').JSX.Element)
            | undefined;
        value({ row }: { row: EnrichedEntity }): any;
        label({ row }: { row: EnrichedEntity }): any;
    };
    width: number | undefined;
    movable: boolean;
    resizable: boolean;
};
export declare function getColumnConfig({
    field,
    isNullField,
}: ColumnConfigParams): Column<EnrichedEntity>;
export declare function getColumnConfigForNullFields(field: Header): Column<EnrichedEntity>;
export declare function getColumnConfigFromField(
    field: FieldsResponseAugumented,
): Column<EnrichedEntity>;
export {};
//# sourceMappingURL=grid-utils.d.ts.map
