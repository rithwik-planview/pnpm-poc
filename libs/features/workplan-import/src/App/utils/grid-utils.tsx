/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
    CheckmarkCircle,
    Move,
    InsertUnder,
    Warning,
    Checklist,
    DotFilled,
    type IconProps,
} from '@planview/pv-icons';
import { iconSizes, theme } from '@planview/pv-utilities';
import {
    useGridRow,
    GridCellDefault,
    type Column,
    GridCellChips,
    GridEditorInput,
    GridEditorDatePicker,
    GridEditorInputNumeric,
    GridEditorCombobox,
    GridEditorComboboxMulti,
} from '@planview/pv-grid';
import {
    type Header,
    type EnrichedEntity,
    type FieldsResponseAugumented,
    metadataGetPicklistQueryKey,
} from '@unity/shared.hybrid';
import { DurationEditor } from '@unity/shared.ui';
import { RowState } from '../types';
import { Avatar, type ComboboxOption } from '@planview/pv-uikit';
import styled from 'styled-components';
import { useQueryClient } from '@tanstack/react-query';
import { useRelationOptions } from '../hooks/useRelationOptions';

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

type Tag = {
    name: string;
    internalId: string;
    externalId?: string;
    imageUrl?: string | null;
};

const CellIndicator = styled.div`
    display: flex;
`;

interface InputItem {
    name: string;
    internalId: string;
    externalId: string;
    imageUrl: string | null;
}

interface OutputItem {
    label: string;
    id: string;
    avatar?: string | React.JSX.Element;
}

export const rowStateIcons: RowStateIconMap = {
    [RowState.New]: <InsertUnder />,
    [RowState.Updated]: <Move />,
    [RowState.Unchanged]: <CheckmarkCircle />,
    [RowState.Error]: <Warning />,
};

export const filterOptions: ComboboxOption[] = [
    {
        icon: <Checklist />,
        label: 'All Entries',
        value: '',
    },
    ...Object.entries(rowStateIcons).map(([state, icon]) => ({
        icon,
        label: state,
        value: state,
    })),
];

type PicklistItem = {
    propertyName: string;
    options: any[]; // or a more specific type if you know it
    dependsOnPicklist: string | null;
};

export function operationToIcon(operation: string): React.ReactElement<IconProps> {
    switch (operation) {
        case RowState.Unchanged:
            return <CheckmarkCircle />;
        case RowState.Updated:
            return <Move />;
        case RowState.New:
            return <InsertUnder />;
        case RowState.Error:
            return <Warning color={theme.iconError} />;
        default:
            return <></>;
    }
}

// Keeping this function separate : May merge with the above similar function later
export function getColumnConfigForNullFields_(field: Header) {
    return {
        id: field.fieldName,
        label: field.fieldName === 'Operation' ? '' : field.fieldName,
        cell: {
            value({ row }: { row: EnrichedEntity }) {
                return (row as any)[field.fieldName]?.value ?? null;
            },
            label({ row }: { row: EnrichedEntity }) {
                const fieldValue = (row as Record<string, any>)[field.fieldName] ?? null;
                return field.fieldName === 'Operation' ? '' : fieldValue?.value;
            },
            ...(field.fieldName === 'Operation' && {
                Renderer({
                    rowId,
                    tabIndex,
                    label,
                }: {
                    rowId: string;
                    tabIndex: number;
                    label: string;
                }) {
                    const row = useGridRow<EnrichedEntity>(rowId);
                    const fieldValue = (row as Record<string, any>)[field.fieldName] ?? null;
                    return (
                        <GridCellDefault
                            tabIndex={tabIndex}
                            label={label}
                            icon={operationToIcon(fieldValue?.value)}
                            leftContentTooltip={fieldValue?.value}
                        />
                    );
                },
            }),
        },
        width: field.fieldName === 'Operation' ? 36 : undefined,
        movable: field.fieldName !== 'Operation',
        resizable: field.fieldName !== 'Operation',
    };
}

/**
 * Maps input data (users or workitems) to the required output format
 *
 * @param items Array of input items (users or workitems)
 * @param type Type of items being mapped ('user' or 'workitem')
 * @returns Mapped array with appropriate properties based on type
 */
const mapItemData = (
    items: InputItem[],
    type: 'ResourceEntity' | 'Workitem' | 'User' = 'ResourceEntity',
): OutputItem[] => {
    return items.map((item) => {
        const { name, internalId, imageUrl } = item;

        const result: OutputItem = {
            label: name,
            id: internalId,
        };

        // If imageUrl is a valid string, use it as avatar for both types
        if (imageUrl && typeof imageUrl === 'string' && imageUrl.trim() !== '') {
            result.avatar = imageUrl;
        }
        // Only add Avatar component with initials for user type
        else if (type === 'User' || type === 'ResourceEntity') {
            const initials = name
                .split(/[\s.]/)
                .map((s: string) => s.charAt(0))
                .join('');

            result.avatar = <Avatar initials={initials} />;
        }

        return result;
    });
};

export function getColumnConfig({
    field,
    isNullField = false,
}: ColumnConfigParams): Column<EnrichedEntity> {
    // Handle field properties based on field type

    const fieldName = isNullField
        ? (field as Header).fieldName
        : (field as FieldsResponseAugumented).name;
    const fieldLabel = isNullField
        ? (field as Header).fieldName === 'Operation'
            ? ''
            : (field as Header).fieldName
        : ((field as FieldsResponseAugumented).label ?? (field as FieldsResponseAugumented).name);
    const isOperation = fieldName === 'Operation';

    return {
        id: fieldName,
        label: fieldLabel,
        cell: {
            editable: (field as FieldsResponseAugumented).isUpdateable || false,
            value({ row }: { row: EnrichedEntity }) {
                return (row as any)[fieldName]?.value ?? null;
            },
            label({ row }: { row: EnrichedEntity }) {
                const fieldValue = (row as Record<string, any>)[fieldName] ?? null;

                if (isOperation) {
                    return '';
                }

                if (isNullField) {
                    return fieldValue?.value;
                }

                // Handle different field types
                switch (fieldValue?.type) {
                    case 'String':
                    case 'Date':
                    case 'DateTime':
                    case 'Duration':
                        return fieldValue.value;
                    case 'Integer':
                    case 'Long':
                    case 'Double':
                        return fieldValue.value.toString();
                    case 'Boolean':
                        return fieldValue.value ? 'Yes' : 'No';
                    case 'Entity':
                    case 'Relation':
                        if (fieldValue.presentationType === 'PickList') {
                            return fieldValue.value;
                        }
                        return fieldValue.value.name;
                    default:
                        return fieldValue?.value ?? '';
                }
            },
            ...(isOperation && {
                Renderer({
                    rowId,
                    tabIndex,
                    label,
                }: {
                    rowId: string;
                    tabIndex: number;
                    label: string;
                }) {
                    const row = useGridRow<EnrichedEntity>(rowId);
                    const fieldValue = (row as Record<string, any>)[fieldName] ?? null;
                    return (
                        <GridCellDefault
                            tabIndex={tabIndex}
                            label={label}
                            icon={operationToIcon(fieldValue?.value)}
                            leftContentTooltip={fieldValue?.value}
                        />
                    );
                },
            }),
            ...(!isNullField && {
                Renderer(props: {
                    rowId: string;
                    tabIndex: number;
                    label: string;
                    columnId: string;
                }) {
                    const { rowId, tabIndex, label } = props;
                    const row = useGridRow<EnrichedEntity>(rowId);
                    const fieldValue = (row as Record<string, any>)[fieldName];

                    const renderEntityOrRelation = () => {
                        if (fieldValue.presentationType === 'PickList') {
                            return (
                                <GridCellDefault
                                    tabIndex={tabIndex}
                                    label={fieldValue.value}
                                    withCaret={(field as FieldsResponseAugumented).isUpdateable}
                                />
                            );
                        }

                        const referenceType = fieldValue.referenceTypes[0].type;
                        const isSimpleEntityView =
                            referenceType !== 'ResourceEntity' &&
                            referenceType !== 'User' &&
                            (referenceType !== 'WorkItem' ||
                                (referenceType === 'WorkItem' && !Array.isArray(fieldValue.value)));

                        if (isSimpleEntityView) {
                            return (
                                <GridCellDefault
                                    tabIndex={tabIndex}
                                    label={fieldValue.value.name}
                                    leftContentTooltip={fieldValue.value.name}
                                />
                            );
                        }

                        if (Array.isArray(fieldValue.value)) {
                            return (
                                <GridCellChips
                                    tabIndex={tabIndex}
                                    value={mapItemData(fieldValue.value, referenceType)}
                                />
                            );
                        }

                        const avatar = fieldValue.value.imageUrl || (
                            <Avatar
                                initials={fieldValue.value.name
                                    .split(/[\s.]/)
                                    .map((s: string) => s.charAt(0))
                                    .join('')}
                            />
                        );

                        return (
                            <GridCellDefault tabIndex={tabIndex} label={label} avatar={avatar} />
                        );
                    };

                    const renderDefaultCell = () => (
                        <GridCellDefault
                            tabIndex={tabIndex}
                            label={fieldValue?.value || ''}
                            leftContentTooltip={fieldValue?.value || ''}
                        />
                    );

                    const renderContent = () => {
                        if (fieldValue?.type === 'Entity' || fieldValue?.type === 'Relation') {
                            return renderEntityOrRelation();
                        }
                        return renderDefaultCell();
                    };

                    const rendererComponent = renderContent();

                    if (fieldValue?.error || fieldValue?.isChanged) {
                        return (
                            <CellIndicator>
                                {rendererComponent}
                                <>
                                    <DotFilled
                                        color={fieldValue?.error ? theme.iconError : theme.iconInfo}
                                        size={iconSizes.small}
                                    />
                                </>
                            </CellIndicator>
                        );
                    }

                    return rendererComponent;
                },
                Editor(props) {
                    const row = useGridRow<EnrichedEntity>(props.rowId);
                    const fieldValue = (row as Record<string, any>)[fieldName] ?? null;
                    const queryClient = useQueryClient();
                    const queryKey = metadataGetPicklistQueryKey({
                        body: {
                            entityType: 'workItem',
                            propertyNames: ['trackStatus', 'state', 'workPolicy'],
                        },
                    });
                    const data = (queryClient.getQueryData(queryKey) as PicklistItem[]) ?? [];
                    const picklist = data.find((option) => option.propertyName === props.columnId);

                    const picklistOptions = picklist?.options.map((item) => ({
                        label: item.displayName,
                        value: item.value,
                    }));

                    const { relationsOptions, isLoading, handleSearch } =
                        useRelationOptions(fieldValue);

                    switch (fieldValue?.presentationType) {
                        case 'ReferenceToObject':
                            return (
                                <GridEditorCombobox
                                    {...props}
                                    virtualized={true}
                                    loading={isLoading}
                                    clearable={false}
                                    options={relationsOptions}
                                    value={
                                        relationsOptions?.find(
                                            (option) =>
                                                option.value === fieldValue.value.name ||
                                                option.internalId === fieldValue.value.internalId,
                                        ) || null
                                    }
                                />
                            );
                        case 'Relation': {
                            const tags = props.value || [];
                            const currentTags = Array.isArray(tags)
                                ? tags.map((tag: Tag) => tag.name)
                                : tags.name;
                            return (
                                <GridEditorComboboxMulti
                                    {...props}
                                    inputMode="search"
                                    virtualized={true}
                                    loading={isLoading}
                                    clearable={false}
                                    options={relationsOptions}
                                    value={currentTags
                                        ?.map((t: string) =>
                                            relationsOptions?.find((tagOpt) => t === tagOpt.value),
                                        )
                                        .filter(Boolean)}
                                    onInputChange={handleSearch}
                                />
                            );
                        }
                        case 'Effort':
                        case 'Duration':
                            return <DurationEditor {...props} />;

                        case 'Date': {
                            return <GridEditorDatePicker {...props} />;
                        }

                        case 'PercentComplete':
                            return <GridEditorInputNumeric {...props} />;

                        case 'Text':
                            return <GridEditorInput {...props} />;

                        case 'PickList':
                            return (
                                <GridEditorCombobox
                                    {...props}
                                    options={picklistOptions}
                                    clearable={false}
                                    value={
                                        props.value &&
                                        picklistOptions?.find(
                                            (option) => option.value === props.value,
                                        )
                                    }
                                />
                            );

                        default:
                            return <></>; // Return an empty React fragment instead of null
                    }
                },
            }),
        },
        width: isOperation ? 36 : undefined,
        movable: !isOperation,
        resizable: !isOperation,
    };
}

// Helper functions to maintain backward compatibility
export function getColumnConfigForNullFields(field: Header): Column<EnrichedEntity> {
    return getColumnConfig({ field, isNullField: true });
}

export function getColumnConfigFromField(field: FieldsResponseAugumented): Column<EnrichedEntity> {
    return getColumnConfig({ field, isNullField: false });
}
