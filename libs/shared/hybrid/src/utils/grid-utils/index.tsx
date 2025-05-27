import React, { useEffect } from 'react';
import { type Column, GridCellDefault, useGridRow } from '@planview/pv-grid';
import type { FieldsResponseAugumented } from '../../hooks/metadata/useMetadataFieldsQuery';
import type { EnrichedEntity } from '../../hooks/genericEntities';
import { Avatar } from '@planview/pv-uikit';

export function getColumnConfigFromField(field: FieldsResponseAugumented): Column<EnrichedEntity> {
    return {
        id: field.name,
        label: field.label ?? field.name,
        cell: {
            value({ row }) {
                return row.extensionData[field.name]?.value ?? null;
            },
            label({ row }) {
                const fieldValue = row.extensionData[field.name];
                switch (fieldValue?.type) {
                    case 'String':
                    case 'Date':
                        return fieldValue.value;
                    case 'Integer':
                    case 'Long':
                    case 'Double':
                        return fieldValue.value.toString();
                    case 'Boolean':
                        return fieldValue.value ? 'Yes' : 'No';
                    case 'Entity':
                        return fieldValue.value.name;
                    default:
                        return '';
                }
            },
            ...(field.type === 'Entity' && {
                Renderer({ rowId, tabIndex, label }) {
                    const row = useGridRow<EnrichedEntity>(rowId);
                    const fieldValue = row.extensionData[field.name];
                    const [validImg, setValidImg] = React.useState(true);
                    useEffect(() => {
                        if (fieldValue?.type === 'Entity') {
                            const img = new Image();
                            img.src = fieldValue.value.imageUrl ?? '';
                            img.onerror = () => setValidImg(false);
                        }
                    }, [fieldValue]);
                    if (fieldValue?.type === 'Entity') {
                        return (
                            <GridCellDefault
                                tabIndex={tabIndex}
                                label={label}
                                avatar={
                                    validImg ? (
                                        fieldValue.value.imageUrl
                                    ) : (
                                        <Avatar
                                            initials={fieldValue.value.name
                                                .split(/[\s.]/)
                                                .map((s) => s.charAt(0))
                                                .join('')}
                                        />
                                    )
                                }
                            />
                        );
                    }
                    return <div />;
                },
            }),
        },
    };
}
