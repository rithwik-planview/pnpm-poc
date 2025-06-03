import react from '../../configs/eslint/react.mjs';
import storybook from 'eslint-plugin-storybook';
export default [
    ...react,
    ...storybook.configs['flat/csf'],
    { ignores: ['storybook-static'] },
    {
        rules: {
            'storybook/no-uninstalled-addons': [
                'error',
                { packageJsonLocation: '../../package.json' },
            ],
        },
    },
];
