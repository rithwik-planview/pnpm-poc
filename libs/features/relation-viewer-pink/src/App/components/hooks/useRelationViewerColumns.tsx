import { useMemo } from 'react';
import { getColumnConfigFromField, useMetadataFieldsQuery } from '@unity/shared.hybrid';
import { SkeletonLoader } from '@planview/pv-uikit';
import type { Field } from '../types/types';

export const useRelationViewerColumns = (fields: Field[], relationEntityType: string) => {
    const { data: metadataFields } = useMetadataFieldsQuery(relationEntityType);

    return useMemo(() => {
        return fields
            .filter(({ entityType }) => entityType === relationEntityType)
            .map((f) => {
                const field = metadataFields?.find((m) => m.name === f.fieldName);
                return field
                    ? getColumnConfigFromField(field)
                    : {
                          id: f.fieldName,
                          label: '',
                          header: { Renderer: () => <SkeletonLoader /> },
                      };
            });
    }, [fields, metadataFields, relationEntityType]);
};
