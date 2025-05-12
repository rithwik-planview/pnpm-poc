import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
import { name } from './package.json';
import { getDirname, getRequiredVersion } from '../../../tools';
import { sanitizeName } from '@unity/shared.utils';

export default createModuleFederationConfig({
    name: sanitizeName(name),
    exposes: {
        '.': './src/index.tsx',
        './App': './src/App.tsx',
    },
    shared: {
        react: {
            singleton: true,
        },
        'react-dom': {
            singleton: true,
        },
        '@unity/shared.counter': {
            singleton: true,
            requiredVersion: getRequiredVersion(
                getDirname(import.meta.url),
                '@unity/shared.counter',
            ),
        },
        '@unity/shared.ui': {
            requiredVersion: getRequiredVersion(getDirname(import.meta.url), '@unity/shared.ui'),
        },
    },
    dts: {
        tsConfigPath: './tsconfig.mf.json',
    },
});
