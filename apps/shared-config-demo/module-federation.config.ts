import {
    createModuleFederationConfig,
    type ModuleFederationOptions,
} from '@module-federation/rsbuild-plugin';
import { getDirname, getRequiredVersion } from '@unity/tools';
import { name, dependencies } from './package.json';
import { sanitizeName } from '@unity/shared.utils';

const shared = Object.fromEntries(
    Object.keys(dependencies).map((key) => [
        key,
        {
            singleton: true,
            requiredVersion: getRequiredVersion(getDirname(import.meta.url), key),
        },
    ]),
);

const config: ModuleFederationOptions = createModuleFederationConfig({
    name: sanitizeName(name),
    shared,
});

export default config;
