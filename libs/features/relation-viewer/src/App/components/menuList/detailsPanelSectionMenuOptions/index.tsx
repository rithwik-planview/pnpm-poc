import { useUnityIntl } from '@unity/shared.ui';
import { ListItem } from '@planview/pv-uikit';
import { MiniMap, ResizeFull } from '@planview/pv-icons';
import { strings } from '../strings';

export const HEADER_MORE_MENU_ITEMS = () => {
    const { formatMessage } = useUnityIntl();

    return (
        <>
            <ListItem icon={<MiniMap />} label={formatMessage(strings.Minimize)} />
            <ListItem icon={<ResizeFull />} label={formatMessage(strings.FullScreenView)} />
        </>
    );
};
