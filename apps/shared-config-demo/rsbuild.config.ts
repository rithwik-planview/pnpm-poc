import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';
import path from 'path';
import { name } from './package.json';
import { getDirname } from '@unity/tools';
import { getPortFromName } from '@unity/shared.utils';

const envDir = path.join(getDirname(import.meta.url), '../../env');
const { publicVars } = loadEnv({ cwd: envDir });

export default defineConfig({
    source: {
        tsconfigPath: './tsconfig.build.json',
        define: publicVars,
    },
    output: {
        assetPrefix: 'auto',
    },
    resolve: {
        alias: {
            'styled-components': 'styled-components/dist/styled-components.js',
        },
    },
    html: {
        title: 'Shared config demo',
    },
    plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
    server: {
        port: getPortFromName(name),
    },
});
