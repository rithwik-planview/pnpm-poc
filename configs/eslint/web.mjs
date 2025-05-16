import base from './base.mjs';
import globals from 'globals';
import jest from 'eslint-plugin-jest';

export default [
    ...base,
    { languageOptions: { globals: globals.browser } },
    {
        files: ['**/*.{spec,test}.{ts,tsx}'],
        ...jest.configs['flat/recommended'],
    },
    { ignores: ['dist/'] },
];
