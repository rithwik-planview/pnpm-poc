import { defineConfig } from '@rslib/core';

export default defineConfig({
    source: {
        entry: {
            index: './src/index.ts',
            'deploy-cli': './src/deploy.ts',
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
