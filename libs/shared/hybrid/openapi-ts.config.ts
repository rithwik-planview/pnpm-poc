import { defineConfig, defaultPlugins } from '@hey-api/openapi-ts';

export default defineConfig({
    input: {
        path: './swagger.json',
    },
    output: {
        format: 'prettier',
        lint: 'eslint',
        path: './src/client',
    },
    plugins: [
        ...defaultPlugins,
        '@hey-api/client-axios',
        '@hey-api/schemas',
        {
            dates: true,
            name: '@hey-api/transformers',
        },
        {
            name: '@hey-api/typescript',
        },
        '@tanstack/react-query',
    ],
});
