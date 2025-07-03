import { Listr } from 'listr2';
import chalk from 'chalk';
import { promisify } from 'util';
import { exec as execCb } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import meta_ from './meta.json';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const getDirname = (metaUrl: string) => dirname(fileURLToPath(metaUrl));

const exec = promisify(execCb);

const _rootDir = getDirname(import.meta.url);

const PATHS = {
    rootDir: _rootDir,
    ASSET: path.resolve(_rootDir, './assets'),
    DIST: path.resolve(_rootDir, './src'),
    DOC_DIST: path.resolve(_rootDir, './docs'),
};

const docTemplate = ({
    importStatement,
    code,
}: {
    importStatement: string;
    code: string;
}) => `import type { Meta, StoryFn } from '@storybook/react-vite';
import { IconFinder } from './helpers'
${importStatement}

export default {
    title: 'Shared-Icons/Collection',
    tags: ['hidden'],
} satisfies Meta

const icons = [
${code}
]

export const Icons: StoryFn = () => <IconFinder icons={icons} />
`;

const collator = new Intl.Collator('en-US', { sensitivity: 'case' });

function nameToHyphen(name: string) {
    return name
        .split(/(?=[A-Z])/g)
        .join('-')
        .toLowerCase();
}

const tasks = new Listr(
    [
        {
            title: chalk.cyan('Initialise files'),
            task: async () => {
                const files = await fs.readdir(PATHS.DIST);
                for (const file of files) {
                    if (
                        (file.endsWith('.ts') && !file.endsWith('.spec.ts')) ||
                        (file.endsWith('.tsx') && !file.endsWith('.spec.tsx'))
                    ) {
                        await fs.unlink(path.resolve(PATHS.DIST, file));
                    }
                }
            },
        },
        {
            title: chalk.cyan('svg -> tsx'),
            task: async () => {
                await exec(`pnpm exec svgr ${PATHS.ASSET} --out-dir "${PATHS.DIST}"`);
            },
        },
        {
            title: chalk.cyan('Generate storybook file'),
            task: async () => {
                const files_ = await fs.readdir(PATHS.DIST);
                const files = files_.filter((name) => /^[A-Z].*/.test(name));
                const names = files.map((name) => name.slice(0, -4));
                names.sort(collator.compare);
                const importStatement = `import { ${names.join(', ')} } from '../src'`;
                const code = names
                    .map((name) => {
                        const meta: Record<string, string[]> = meta_;
                        const description = meta[nameToHyphen(name)] ?? [];
                        return `\t{ name: "${name}", icon: <${name} />, description: ${JSON.stringify(
                            description,
                        )} },`;
                    })
                    .join('\n');
                await fs.writeFile(
                    path.resolve(PATHS.DOC_DIST, './icons.collection.stories.tsx'),
                    docTemplate({ importStatement, code }),
                    'utf8',
                );
            },
        },
        {
            title: chalk.cyan('Lint and format'),
            task: async () => {
                await exec('pnpm lint');
                await exec('pnpm -w format');
            },
        },
    ],
    { concurrent: false, exitOnError: true },
);

async function main() {
    try {
        await tasks.run();
        console.log(chalk.greenBright('\n🎉 Icons built successfully!'));
    } catch (err) {
        console.error(chalk.red('❌ Unexpected error:'), err);
        process.exit(1);
    }
}

main();
