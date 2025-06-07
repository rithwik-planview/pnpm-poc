#!/usr/bin/env node
import { extract } from '@formatjs/cli-lib';
import { promisify } from 'util';
import chalk from 'chalk';
import { exec as _exec } from 'child_process';
import { Listr } from 'listr2';
import { globSync } from 'glob';
import { existsSync } from 'fs';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { format, resolveConfig } from 'prettier';

const exec = promisify(_exec);

async function getProjectPaths(): Promise<Record<string, string>> {
    const { stdout } = await exec('pnpm -r ls --json --depth=-1');
    const pkgs = JSON.parse(stdout) as { name: string; path: string }[];
    return Object.fromEntries(pkgs.map((p) => [p.name, p.path]));
}

async function main() {
    const args = process.argv.slice(2);
    const pkgs = args.filter((arg) => !arg.startsWith('--'));
    if (pkgs.length === 0) {
        console.error('Usage: compile.ts <pkg1> <pkg2> ...');
        process.exit(1);
    }

    const projectMap = await getProjectPaths();

    const tasks = new Listr([
        {
            title: 'Extract translation files',
            task: () => {
                const tasks = pkgs.map((pkg) => ({
                    title: `Extracting translations for ${pkg}`,
                    task: async () => {
                        const files = globSync(`${projectMap[pkg]}/src/**/!(*.d).ts*`);
                        const result = await extract(files, {
                            idInterpolationPattern: '[sha512:contenthash:base64:6]',
                        });
                        const translationsDir = path.join(projectMap[pkg], 'translations');
                        if (!existsSync(translationsDir)) {
                            await mkdir(translationsDir, { recursive: true });
                        }
                        const parsed = JSON.parse(result);
                        const fileName = path.join(translationsDir, 'en.json');
                        const prettierOptions = await resolveConfig(fileName);
                        const formatted = await format(JSON.stringify(parsed, null, 4), {
                            ...prettierOptions,
                            parser: 'json',
                        });
                        await writeFile(fileName, formatted, 'utf-8');
                    },
                }));
                return new Listr(tasks);
            },
        },
    ]);

    await tasks.run();
    console.log(chalk.greenBright('\n🎉 Extraction complete!'));
}

main().catch((err) => {
    console.error(chalk.red('❌ Unexpected error:'), err);
    process.exit(1);
});
