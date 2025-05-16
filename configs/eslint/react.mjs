import web from './web.mjs';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
    ...web,
    react.configs.flat['jsx-runtime'],
    reactHooks.configs['recommended-latest'],
];
