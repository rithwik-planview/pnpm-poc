import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: [
        '../../../docs/**/*.mdx',
        '../../../libs/shared/ui/src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    ],
    addons: ['@storybook/addon-docs'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    refs: {
        pvds: {
            title: 'Planview Design System',
            url: 'https://planview-ds.github.io/react-pvds',
            expanded: true,
        },
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            build: {
                chunkSizeWarningLimit: 1600,
            },
        });
    },
};
export default config;
