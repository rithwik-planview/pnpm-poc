import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

const externals = ['react', 'react-intl', 'styled-components'];
export default defineConfig({
    source: {
        tsconfigPath: './tsconfig.build.json',
        entry: {
            index: './src/index.tsx',
            'test-utils': './src/test-utils/index.tsx',
        },
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
