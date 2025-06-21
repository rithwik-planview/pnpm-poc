import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
import { peerDependencies } from './package.json';

const externals = Object.keys(peerDependencies);

export default defineConfig({
    source: {
        tsconfigPath: './tsconfig.build.json',
    },
    output: {
        target: 'web',
    },
    lib: [
        {
            format: 'esm',
            dts: true,
            output: {
                distPath: {
                    root: './dist/esm',
                },
                externals,
            },
        },
        {
            format: 'cjs',
            output: {
                distPath: {
                    root: './dist/cjs',
                },
                externals,
            },
        },
    ],
    plugins: [pluginReact()],
});
