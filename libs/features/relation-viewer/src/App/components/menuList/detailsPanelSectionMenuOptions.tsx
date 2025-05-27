import { useIntl } from 'react-intl';
import { ListItem } from '@planview/pv-uikit';
import { MiniMap, ResizeFull } from '@planview/pv-icons';
import { strings } from './strings';

export const HEADER_MORE_MENU_ITEMS = () => {
    const { formatMessage } = useIntl();

    return (
        <>
            <ListItem icon={<MiniMap />} label={formatMessage(strings.Minimize)} />
            <ListItem icon={<ResizeFull />} label={formatMessage(strings.FullScreenView)} />
        </>
    );
};
