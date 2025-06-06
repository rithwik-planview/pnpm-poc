import { defineConfig } from '@rslib/core';
import { loadEnv } from '@rsbuild/core';
import path from 'path';
import { getDirname } from '@unity/tools';

const { publicVars } = loadEnv({ cwd: path.join(getDirname(import.meta.url), '../../../env') });

export default defineConfig({
    source: {
        tsconfigPath: './tsconfig.build.json',
        define: publicVars,
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
