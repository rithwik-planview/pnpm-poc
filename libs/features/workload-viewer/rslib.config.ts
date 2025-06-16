import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
import { rsbuildPluginRemoteFetch } from './rspack.plugin.remoteFetch';
import path from 'path';

export default defineConfig({
    source: {
        tsconfigPath: './tsconfig.build.json',
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
                url: 'http://localhost:81/index.js',
                localPath: path.resolve(__dirname, './downloads/WorkloadApp.js'),
            },
            {
                url: 'http://localhost:81/main.css',
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
