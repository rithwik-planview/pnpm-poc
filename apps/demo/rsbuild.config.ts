import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
    html: {
        title: 'Unity Module Federation (UMD) POC',
    },
    plugins: [pluginReact()],
});
