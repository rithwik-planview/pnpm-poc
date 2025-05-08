import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';
import { name } from './package.json';

export default defineConfig({
    lib: [
        {
            format: 'mf',
            output: {
                assetPrefix:
                    process.env.NODE_ENV === 'production'
                        ? `https://unpkg.com/${name}@latest/dist/mf/`
                        : undefined,
                distPath: {
                    root: './dist/mf',
                },
            },
        },
    ],
    server: {
        port: 3003,
    },
    plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
});
