export default {
    '*.{js,ts,jsx,tsx}': [() => 'pnpm -F "...[HEAD]..." lint --fix', 'prettier --write'],
};
