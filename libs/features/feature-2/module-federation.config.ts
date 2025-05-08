import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
    name: 'mf_feature_2',
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
        },
    },
    dts: {
        tsConfigPath: './tsconfig.mf.json',
    },
});
