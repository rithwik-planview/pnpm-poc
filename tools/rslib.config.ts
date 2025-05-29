import { defineConfig } from '@rslib/core';

export default defineConfig({
    source: {
        entry: {
            index: './src/index.ts',
            'deploy-cli': './src/deploy.ts',
            'i18n-extract-cli': './src/i18n/extract.ts',
            'i18n-compile-cli': './src/i18n/compile.ts',
        },
        tsconfigPath: './tsconfig.build.json',
    },
    lib: [
        {
            format: 'esm',
            syntax: ['node 18'],
            dts: true,
        },
        {
            format: 'cjs',
            syntax: ['node 18'],
        },
    ],
});
