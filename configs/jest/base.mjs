export default {
    transform: {
        '^.+\\.(t|j)sx?$': [
            '@swc/jest',
            {
                jsc: {
                    transform: {
                        react: {
                            runtime: 'automatic',
                        },
                    },
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
        ],
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less)$': 'identity-obj-proxy',
    },
};
