import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
import { rsbuildPluginRemoteFetch } from './rspack.plugin.remoteFetch';
import path from 'path';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

export default defineConfig({
    source: {
        tsconfigPath: './tsconfig.build.json',
    },
    output: {
        target: 'web',
        cleanDistPath: true,
        minify: true,
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
            plugins: [
                process.env.RSDOCTOR === 'true' &&
                    new RsdoctorRspackPlugin({
                        supports: {
                            generateTileGraph: true,
                        },
                    }),
            ],
        },
    },
});
