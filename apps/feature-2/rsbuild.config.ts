import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';
import path from 'path';
import { name } from './package.json';
import { getDirname } from '@unity/tools';
import { getPortFromName } from '@unity/shared.utils';

const envDir = path.join(getDirname(import.meta.url), '../../env');
const { parsed } = loadEnv({ cwd: envDir });

export default defineConfig(({ env }) => ({
    source: { tsconfigPath: './tsconfig.build.json' },
    html: {
        title: 'Feature-2 Demo',
    },
    plugins: [
        pluginReact(),
        pluginModuleFederation(
            moduleFederationConfig(env !== 'development' ? parsed.PUBLIC_BASE_URL : undefined),
        ),
    ],
    server: {
        port: getPortFromName(name),
    },
    tools: {
        rspack: {
            output: {
                publicPath: './',
            },
        },
    },
}));
