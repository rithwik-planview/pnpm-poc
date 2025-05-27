import { ButtonEmpty, DropdownMenu } from '@planview/pv-uikit';
import { DotsVertical, PlusCircle } from '@planview/pv-icons';
import { IntlProvider } from 'react-intl';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { useRelationViewerSort } from '../hooks/useRelationViewerSort';
import type { Props, RelationViewerHandle } from '../types/types';
import { HEADER_MORE_MENU_ITEMS } from '../menuList/detailsPanelSectionMenuOptions';
import { RelationViewerGrid } from '../grid/relationViewerGrid';
import { DetailsPanelSection } from '@planview/pv-details';
import { useRelationActionsMenu } from '../hooks/useRelationActionsMenu';
import { useRelationViewerColumns } from '../hooks/useRelationViewerColumns';
import { useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

const StyledRelationViewer = styled.div`
    width: 100%;
`;

export const RelationViewer = forwardRef<RelationViewerHandle, Props>(
    function RelationViewer(props, ref) {
        const {
            fields,
            relationEntityType,
            entityId,
            relationName,
            onContextMenuAction,
            onAddRelation,
        } = props;

        const { rows, loading, error, sort, setSort } = useRelationViewerSort(props);

        const [expandedSections, setExpandedSections] = useState(true);

        const columns = useRelationViewerColumns(fields, relationEntityType);

        const actionsMenu = useRelationActionsMenu(entityId, relationName, onContextMenuAction);

        const queryClient = useQueryClient();

        useImperativeHandle(
            ref,
            () => ({
                refresh: () => {
                    queryClient.invalidateQueries({
                        queryKey: [{ path: { entityId, relationName } }],
                        exact: false,
                    });
                },
            }),
            [entityId, relationName, queryClient],
        );

        const onHeaderActionClick = (item: { label: string }) => {
            console.log('Header action:', item.label);
        };

        return (
            <StyledRelationViewer>
                <DetailsPanelSection
                    label={props.title}
                    expanded={expandedSections}
                    onExpandedChange={() => setExpandedSections((prev) => !prev)}
                    primaryAction={
                        <>
                            <ButtonEmpty
                                icon={<PlusCircle />}
                                tooltip="Add item"
                                onClick={onAddRelation}
                            />
                            <DropdownMenu
                                label="Options"
                                trigger={{ elementType: ButtonEmpty, icon: <DotsVertical /> }}
                                multiSelectable={false}
                                onActivateItem={onHeaderActionClick}
                            >
                                {<HEADER_MORE_MENU_ITEMS />}
                            </DropdownMenu>
                        </>
                    }
                >
                    <IntlProvider locale="en" messages={{}}>
                        <RelationViewerGrid
                            loading={loading}
                            columns={columns}
                            rows={rows}
                            sort={sort}
                            onSortChange={setSort}
                            error={error}
                            actionsMenu={{ Menu: actionsMenu }}
                        />
                    </IntlProvider>
                </DetailsPanelSection>

                <div style={{ display: 'none' }}>
                    {/* This div is need to have expand and collapse functionality*/}
                    <DetailsPanelSection label="Section label 2">
                        <div />
                    </DetailsPanelSection>
                </div>
            </StyledRelationViewer>
        );
    },
);

export default RelationViewer;
