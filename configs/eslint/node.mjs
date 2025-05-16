import jest from 'eslint-plugin-jest';
import globals from 'globals';
import base from './base.mjs';

export default [
    ...base,
    { languageOptions: { globals: globals.node } },
    {
        files: ['**/*.{spec,test}.{ts,tsx}'],
        ...jest.configs['flat/recommended'],
    },
];
