import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
    lib: [
        {
            format: 'esm',
            syntax: 'es2021',
            output: {
                distPath: {
                    root: './dist/esm',
                },
            },
        },
        {
            format: 'cjs',
            syntax: 'es2021',
            output: {
                distPath: {
                    root: './dist/cjs',
                },
            },
        },
        {
            format: 'umd',
            umdName: 'Shell',
            output: {
                distPath: {
                    root: './dist/umd',
                },
            },
        },
    ],
    plugins: [pluginReact()],
});
