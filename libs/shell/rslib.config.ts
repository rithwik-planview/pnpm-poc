import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

export default defineConfig({
    lib: [
        {
            bundle: true,
            dts: true,
            format: 'esm',
        },
        {
            format: 'umd',
            umdName: 'Shell',
            output: {
                distPath: {
                    root: './dist/umd',
                },
            },
        },
    ],
    output: {
        target: 'web',
    },
    plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
    server: {
        port: 3006,
    },
});
