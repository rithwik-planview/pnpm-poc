import remarkGfm from 'remark-gfm';
import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: [
        '../../../docs/src/**/*.mdx',
        '../../../libs/shared/ui/src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    ],
    addons: [
        {
            name: '@storybook/addon-docs',
            options: {
                mdxPluginOptions: {
                    mdxCompileOptions: {
                        remarkPlugins: [remarkGfm],
                    },
                },
            },
        },
    ],
    staticDirs: [
        {
            from: './fonts',
            to: '/fonts',
        },
        {
            from: './img',
            to: '/img',
        },
    ],
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
