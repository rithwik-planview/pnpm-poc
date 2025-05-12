import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
import { name } from './package.json';
import { getDirname, getRequiredVersion } from '../../../tools';

export default createModuleFederationConfig({
    name: name.replace(/[/.@-]/g, '_'),
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
