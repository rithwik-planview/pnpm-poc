import remarkGfm from 'remark-gfm';
import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: [
        '../../../docs/src/**/*.mdx',
        '../../../libs/shared/ui/src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
        '../../../libs/shared/icons/docs/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
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
        // Had to do this because of an iframe access error.
        // But it started working again after some time, so it might not be needed.
        // pvds: {
        //     title: 'Planview Design System',
        //     url: '/pvds',
        //     expanded: true,
        // },
        pvds_real: {
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
            // Had to do this because of an iframe access error.
            // But it started working again after some time, so it might not be needed.
            server: {
                proxy: {
                    '/pvds': {
                        target: 'https://planview-ds.github.io/react-pvds',
                        changeOrigin: true,
                        rewrite: (path: string) => path.replace(/^\/pvds/, ''),
                    },
                },
            },
        });
    },
};

export default config;
