import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';
import { name } from './package.json';
import { getPortFromName } from '@unity/shared.utils';

export default defineConfig(({ env }) => {
    return {
        source: { tsconfigPath: './tsconfig.build.json' },
        plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig(env))],
        server: {
            port: getPortFromName(name),
        },
    };
});
