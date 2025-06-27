import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

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
        {
            format: 'umd',
            umdName: 'Unity_Shell',
            output: {
                distPath: {
                    root: './dist/umd',
                },
                target: 'web',
            },
        },
    ],
    tools: {
        rspack: {
            plugins: [
                process.env.RSDOCTOR === 'true' &&
                    new RsdoctorRspackPlugin({
                        supports: {
                            generateTileGraph: true,
                        },
                    }),
            ],
        },
    },
    plugins: [pluginReact()],
});
