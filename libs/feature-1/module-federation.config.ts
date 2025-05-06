import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
import { name } from './package.json';

export default createModuleFederationConfig({
    name,
    exposes: {
        '.': './src/index.tsx',
    },
    shared: {
        react: {
            singleton: true,
        },
        'react-dom': {
            singleton: true,
        },
    },
});
