import {
    createModuleFederationConfig,
    type ModuleFederationOptions,
} from '@module-federation/rsbuild-plugin';
import { name } from './package.json';
import { sanitizeName } from '@unity/shared.utils';

const config: ModuleFederationOptions = createModuleFederationConfig({
    name: sanitizeName(name),
    exposes: {
        '.': './src/index.tsx',
        './App': './src/App/index.tsx',
    },
    shared: {
        react: {
            singleton: true,
        },
        'react-dom': {
            singleton: true,
        },
    },
    dts: {
        tsConfigPath: './tsconfig.mf.json',
    },
});

export default config;
