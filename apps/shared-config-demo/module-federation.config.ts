import {
    createModuleFederationConfig,
    type ModuleFederationOptions,
} from '@module-federation/rsbuild-plugin';
import { name, dependencies } from './package.json';
import { sanitizeName } from '@unity/shared.utils';

const config: ModuleFederationOptions = createModuleFederationConfig({
    name: sanitizeName(name),
    shared: {
        react: {
            singleton: true,
            requiredVersion: dependencies.react,
        },
        'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom'],
        },
    },
});

export default config;
