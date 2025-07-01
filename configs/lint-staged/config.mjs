export default {
    '*.{js,mjs,cjs,ts,jsx,tsx,mdx}': [() => 'pnpm -F "[HEAD]" lint --fix', 'prettier --write'],
    '**/package.json': () => ['syncpack format', 'syncpack fix'],
};
