import { defineConfig } from '@rslib/core';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

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
});
