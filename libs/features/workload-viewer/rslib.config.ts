import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
import { rsbuildPluginRemoteFetch } from './rspack.plugin.remoteFetch';
import path from 'path';

export default defineConfig({
    source: {
        tsconfigPath: './tsconfig.build.json',
    },
    output: {
        target: 'web',
    },
    lib: [
        {
            format: 'umd',
            umdName: 'Unity_WorkloadViewer',
            output: {
                distPath: {
                    root: './dist/umd',
                },
                target: 'web',
            },
        },
    ],
    plugins: [
        rsbuildPluginRemoteFetch([
            {
                url: 'https://one.clarizen-ci.io/workload/esm/index.js',
                localPath: path.resolve(__dirname, './downloads/WorkloadApp.js'),
            },
            {
                url: 'https://one.clarizen-ci.io/workload/esm/main.css',
                localPath: path.resolve(__dirname, './downloads/WorkloadApp.css'),
            },
        ]),
        pluginReact(),
    ],
    tools: {
        rspack: {
            resolve: {
                alias: {
                    WorkloadApp: path.resolve(__dirname, './downloads/WorkloadApp.js'),
                },
            },
        },
    },
});
