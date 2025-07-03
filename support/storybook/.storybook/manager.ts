import { addons } from 'storybook/manager-api';

addons.setConfig({
    sidebar: {
        filters: {
            examples: (item) => {
                if (item.tags?.includes('hidden')) {
                    return false;
                }
                return true;
            },
        },
    },
});
