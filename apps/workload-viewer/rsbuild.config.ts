import { defineConfig } from '@rsbuild/core';
import { name } from './package.json';
import { getPortFromName } from '@unity/shared.utils';

export default defineConfig({
    source: {
        tsconfigPath: './tsconfig.build.json',
    },
    output: {
        copy: [
            {
                from: '../../libs/features/workload-viewer/dist/umd/index.js',
                to: 'static/js/@unity.workload.umd.js',
            },
            {
                from: '../../libs/features/workload-viewer/dist/umd/index.css',
                to: 'static/css/@unity.workload.css',
            },
        ],
    },
    html: {
        title: 'Unity Workload (UMD) POC',
        tags: [
            {
                tag: 'script',
                attrs: {
                    src: 'static/js/@unity.workload.umd.js',
                },
            },
            {
                tag: 'link',
                attrs: {
                    rel: 'stylesheet',
                    href: '/static/css/@unity.workload.css',
                },
            },
        ],
    },
    server: {
        port: getPortFromName(name),
    },
});
