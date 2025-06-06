import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';
import { name } from './package.json';
import { getPortFromName, Mode } from '@unity/shared.utils';

export default defineConfig(({ env }) => ({
    source: { tsconfigPath: './tsconfig.build.json' },
    plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig(env as Mode))],
    html: {
        title: 'Relation Viewer Demo',
    },
    server: {
        port: getPortFromName(name),
    },
}));
