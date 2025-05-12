import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
import { name } from './package.json';

const sanitizeName = (name: string) => {
    return name.replace(/[/.@-]/g, '_');
};

const feature = '@unity/features.feature-1';
const port = 3003;

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
