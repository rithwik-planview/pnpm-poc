import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
    source: {
        tsconfigPath: './tsconfig.build.json',
    },
    lib: [
        {
            format: 'umd',
            umdName: 'Unity_WorkloadViewer',
            output: {
                distPath: {
                    root: './dist/umd',
                },
                target: 'web',
            },
        },
    ],
    plugins: [pluginReact()],
});
