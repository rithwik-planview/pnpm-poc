import type { GridActionsMenuFullProps } from '@planview/pv-grid';
import { ListItem, ListItemEmpty, Menu, SubMenu } from '@planview/pv-uikit';
import { useQuery } from '@tanstack/react-query';
import { type EnrichedEntity, ribbonActionsGetContextMenusOptions } from '@unity/shared.hybrid';
import { useCallback } from 'react';
import { strings } from './strings';
import { useIntl } from 'react-intl';

type Props = GridActionsMenuFullProps<EnrichedEntity> & {
    mainEntityId: string;
    relationName: string;
    onAction?: ({
        actionId,
        additionalData,
        relationEntityId,
        relationEntityName,
        relationEntityType,
        relationLinkId,
    }: {
        actionId: string;
        additionalData?: boolean;
        relationEntityId: string;
        relationEntityName?: string;
        relationEntityType: string;
        relationLinkId: string;
    }) => void;
};

type ContextMenu = {
    id: string;
    name: string;
    enabled: boolean;
    subMenus?: ContextMenu[];
    additionalData?: boolean;
};

export default function EntityActionsMenu({
    row,
    menuProps,
    mainEntityId,
    relationName,
    onAction,
}: Props) {
    const { formatMessage } = useIntl();
    const { data, error } = useQuery({
        ...ribbonActionsGetContextMenusOptions({
            body: {
                selectedLinkId: row.relationLinkId ?? row.id,
                selectedRelatedEntityId: row.internalId ?? row.id,
                relationName,
                mainEntityId,
            },
        }),
    });

    const label = useCallback((id: string, name: string, additionalData?: boolean) => {
        switch (id) {
            case 'Follow':
                return additionalData ? 'Unfollow' : 'Follow';
            case 'Favorite':
                return additionalData ? 'Unfavorite' : 'Favorite';
            default:
                return name;
        }
    }, []);

    const menuItems = useCallback(
        (menus: ContextMenu[]) => {
            return menus.map((menu, index) => {
                const { id, name, enabled, additionalData, subMenus } = menu;
                if (!enabled) return null;
                if (subMenus?.length) {
                    return (
                        <SubMenu key={`${id}-${index}`} label={label(id, name, additionalData)}>
                            {menuItems(subMenus)}
                        </SubMenu>
                    );
                }
                return (
                    <ListItem
                        key={`${id}-${index}`}
                        label={label(id, name, additionalData)}
                        onActivate={() => {
                            onAction?.({
                                actionId: id,
                                additionalData,
                                relationEntityId: row.internalId ?? row.id,
                                relationEntityName: String(row.extensionData.name?.value),
                                relationEntityType: row.entityTypeApiName,
                                relationLinkId: row.relationLinkId ?? row.id,
                            });
                        }}
                    />
                );
            });
        },
        [
            label,
            onAction,
            row.entityTypeApiName,
            row.extensionData.name?.value,
            row.id,
            row.internalId,
            row.relationLinkId,
        ],
    );

    const trimmedData = data?.menus?.[0]?.subMenus;

    if (trimmedData) {
        return (
            <Menu {...menuProps}>
                {trimmedData?.length ? (
                    menuItems(trimmedData).filter(Boolean)
                ) : (
                    <ListItemEmpty label={formatMessage(strings.NoActionsFound)} />
                )}
            </Menu>
        );
    }

    if (error) {
        return (
            <Menu {...menuProps} error={error.message}>
                <ListItem label="" />
            </Menu>
        );
    }

    return (
        <Menu {...menuProps} loading>
            <ListItem label="" />
        </Menu>
    );
}
