import { defineConfig } from '@rsbuild/core';

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
});
