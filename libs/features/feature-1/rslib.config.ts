import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';
import { name } from './package.json';
import { getPortFromName } from '@unity/shared.utils';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

export default defineConfig({
    source: {
        tsconfigPath: './tsconfig.build.json',
    },
    output: {
        target: 'web',
    },
    lib: [
        {
            format: 'mf',
            output: {
                assetPrefix: 'auto',
                distPath: {
                    root: './dist/mf',
                },
            },
        },
    ],
    server: {
        port: getPortFromName(name),
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    tools: {
        rspack: {
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
    plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
});
