import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';
import { name } from './package.json';
import { getPortFromName } from '@unity/shared.utils';
import path from 'path';
import { getDirname } from '@unity/tools';

const globalEnvDir = path.join(getDirname(import.meta.url), '../../env');
const { parsed, publicVars: globalVars } = loadEnv({ cwd: globalEnvDir });

const localEnvDir = path.join(getDirname(import.meta.url), './env');
const { publicVars: localVars } = loadEnv({ cwd: localEnvDir });

export default defineConfig(({ env }) => ({
    source: { tsconfigPath: './tsconfig.build.json', define: { ...globalVars, ...localVars } },
    plugins: [
        pluginReact(),
        pluginModuleFederation(
            moduleFederationConfig(env !== 'development' ? parsed.PUBLIC_BASE_URL : undefined),
        ),
    ],
    html: {
        title: 'Relation Viewer Demo',
    },
    server: {
        port: getPortFromName(name),
    },
}));
