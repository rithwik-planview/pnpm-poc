import { defineConfig } from '@rsbuild/core';
import { name } from './package.json';
import { getPortFromName } from '@unity/shared.utils';

export default defineConfig({
    source: {
        tsconfigPath: './tsconfig.build.json',
    },
    html: {
        title: 'Unity Module Federation (UMD) POC',
        tags: [
            {
                tag: 'script',
                attrs: {
                    src: '@unity/core.shell/umd/index.js',
                },
            },
        ],
    },
    output: {
        assetPrefix: 'auto',
        copy: [
            {
                from: '../../libs/core/shell/dist/umd/',
                to: '@unity/core.shell/umd/',
                globOptions: {
                    ignore: ['*.LICENSE.txt'],
                },
            },
        ],
    },
    server: {
        port: getPortFromName(name),
    },
});
