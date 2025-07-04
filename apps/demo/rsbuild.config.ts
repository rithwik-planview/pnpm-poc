import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { name } from './package.json';
import { getPortFromName } from '@unity/shared.utils';

export default defineConfig({
    source: {
        tsconfigPath: './tsconfig.build.json',
        define: {
            'process.env': JSON.stringify({}),
        },
    },
    html: {
        title: 'Unity Module Federation POC',
    },
    output: {
        assetPrefix: 'auto',
    },
    plugins: [pluginReact()],
    server: {
        port: getPortFromName(name),
    },
});
