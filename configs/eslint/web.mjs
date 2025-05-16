import base from './base.mjs';
import globals from 'globals';
import jest from 'eslint-plugin-jest';
import jestDom from 'eslint-plugin-jest-dom';

export default [
    ...base,
    { languageOptions: { globals: globals.browser } },
    {
        files: ['**/*.{spec,test}.{ts,tsx}'],
        ...jest.configs['flat/recommended'],
        ...jestDom.configs['flat/recommended'],
    },
];
