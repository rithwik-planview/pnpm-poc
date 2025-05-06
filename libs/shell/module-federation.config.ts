import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
import { name } from './package.json';

export default createModuleFederationConfig({
    name,
    shared: {
        react: {
            singleton: true,
        },
        'react-dom': {
            singleton: true,
        },
    },
});
