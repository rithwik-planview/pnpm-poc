import { defineConfig } from '@rsbuild/core';
import { name } from './package.json';
import { getPortFromName } from '@unity/shared.utils';

export default defineConfig({
    output: {
        copy: [
            {
                from: '../../libs/core/shell/dist/umd/index.js',
                to: './static/js/@unity.shell.umd.js',
            },
        ],
    },
    html: {
        title: 'Unity Module Federation (UMD) POC',
        tags: [
            {
                tag: 'script',
                attrs: {
                    src: 'static/js/@unity.shell.umd.js',
                },
            },
        ],
    },
    server: {
        port: getPortFromName(name),
    },
});
