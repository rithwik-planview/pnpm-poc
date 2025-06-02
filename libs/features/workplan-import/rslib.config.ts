import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';
import { name } from './package.json';
import { getPortFromName, getRemoteUrl } from '@unity/shared.utils';

export default defineConfig(({ env }) => {
    return {
        source: {
            tsconfigPath: './tsconfig.build.json',
        },
        lib: [
            {
                format: 'mf',
                output: {
                    assetPrefix: env === 'production' ? getRemoteUrl(name, env) : undefined,
                    distPath: {
                        root: './dist/mf',
                    },
                },
            },
        ],
        server: {
            port: getPortFromName(name),
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        },
        plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
        tools: {
            swc: {
                jsc: {
                    experimental: {
                        plugins: [
                            ['@swc/plugin-styled-components', {}],
                            [
                                '@swc/plugin-formatjs',
                                {
                                    idInterpolationPattern: '[sha512:contenthash:base64:6]',
                                    ast: true,
                                },
                            ],
                        ],
                    },
                },
            },
        },
    };
});
