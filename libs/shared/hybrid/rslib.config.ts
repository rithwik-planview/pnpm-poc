import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
    source: {
        tsconfigPath: './tsconfig.build.json',
    },
    lib: [
        {
            format: 'esm',
            dts: true,
            output: {
                distPath: {
                    root: './dist/esm',
                },
            },
        },
        {
            format: 'cjs',
            output: {
                distPath: {
                    root: './dist/cjs',
                },
            },
        },
    ],
    plugins: [pluginReact()],
});
