import custom from './clzdev-ticket-in-body.mjs';

export default {
    extends: ['@commitlint/config-conventional'],
    plugins: [custom],
    rules: {
        'clzdev-ticket-in-body': [2, 'always'],
    },
};
