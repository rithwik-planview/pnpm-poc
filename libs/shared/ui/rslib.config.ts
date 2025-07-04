import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
import { peerDependencies } from './package.json';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

const externals = Object.keys(peerDependencies);

export default defineConfig({
    source: {
        tsconfigPath: './tsconfig.build.json',
        entry: {
            index: './src/index.tsx',
            'test-utils': './src/test-utils/index.tsx',
        },
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
