export default {
    '*.{js,mjs,cjs,ts,jsx,tsx}': [() => 'pnpm -F "...[HEAD]..." lint --fix', 'prettier --write'],
};
