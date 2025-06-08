import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
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
    html: {
        title: 'Unity Module Federation POC',
    },
    plugins: [pluginReact()],
    server: {
        port: getPortFromName(name),
    },
});
