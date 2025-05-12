import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
import { name } from './package.json';
import { getPortFromName, sanitizeName } from '@unity/shared.utils';

const feature = '@unity/features.feature-2';
const port = getPortFromName(feature);

export default createModuleFederationConfig({
    name: sanitizeName(name),
    remotes: {
        [feature]: `${sanitizeName(feature)}@http://localhost:${port}/mf-manifest.json`,
    },
    shared: {
        react: {
            singleton: true,
            eager: true,
        },
        'react-dom': {
            singleton: true,
            eager: true,
        },
    },
});
