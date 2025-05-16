import base from './base.mjs';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import jest from 'eslint-plugin-jest';
import jestDom from 'eslint-plugin-jest-dom';

export default [
    ...base,
    { languageOptions: { globals: globals.browser } },
    {
        ...react.configs.flat.recommended,
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    react.configs.flat['jsx-runtime'],
    reactHooks.configs['recommended-latest'],
    {
        files: ['**/*.{spec,test}.{ts,tsx}'],
        ...jest.configs['flat/recommended'],
        ...jestDom.configs['flat/recommended'],
    },
    { ignores: ['dist/'] },
];
