import js from '@eslint/js';
import globals from 'globals';
import ts from 'typescript-eslint';
import jest from 'eslint-plugin-jest'
import jestDom from 'eslint-plugin-jest-dom';

export default [
    { languageOptions: { globals: globals.browser } },
    js.configs.recommended,
    ...ts.configs.recommended,
    { ignores: ['dist/'] },
    {
        files: ['**/*.{spec,test}.{ts,tsx}'],
        ...jest.configs['flat/recommended'],
    },
    {
        files: ['**/*.{spec,test}.{ts,tsx}'],
        ...jestDom.configs['flat/recommended'],
    },
];
