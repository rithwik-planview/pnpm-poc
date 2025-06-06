import { defineConfig } from '@rsbuild/core';
import { name } from './package.json';
import { getPortFromName, getRemoteUrl } from '@unity/shared.utils';

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
                    src: `${getRemoteUrl('@unity/core.shell', 'production', 'umd')}index.js`,
                },
            },
        ],
    },
    server: {
        port: getPortFromName(name),
    },
});
