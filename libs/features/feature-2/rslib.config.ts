import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';
import { name } from './package.json';
import { getPortFromName, getRemoteUrl } from '@unity/shared.utils';

export default defineConfig(({ env }) => {
    return {
        lib: [
            {
                format: 'mf',
                output: {
                    assetPrefix: env === 'production' ? getRemoteUrl(name, env) : undefined,
                    distPath: {
                        root: './dist/mf',
                    },
                },
            },
        ],
        server: {
            port: getPortFromName(name),
        },
        plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
    };
});
