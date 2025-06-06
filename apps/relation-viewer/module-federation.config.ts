import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
import { name } from './package.json';
import { sanitizeName, getRemoteUrl, type Mode } from '@unity/shared.utils';

const feature = '@unity/features.relation-viewer';

export default function (mode: Mode) {
    return createModuleFederationConfig({
        name: sanitizeName(name),
        remotes: {
            [feature]: `${sanitizeName(feature)}@${getRemoteUrl(feature, mode)}mf-manifest.json`,
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
}
