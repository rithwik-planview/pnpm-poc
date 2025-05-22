import { defineConfig } from '@rslib/core';

export default defineConfig({
    source: {
        tsconfigPath: './tsconfig.build.json',
    },
    lib: [
        {
            format: 'esm',
            syntax: 'es2021',
            dts: true,
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
    ],
});
