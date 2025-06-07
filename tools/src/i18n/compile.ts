#!/usr/bin/env node
import { compile, type MessageDescriptor } from '@formatjs/cli-lib';
import { promisify } from 'util';
import chalk from 'chalk';
import { exec as _exec } from 'child_process';
import { Listr } from 'listr2';
import { globSync } from 'glob';
import { existsSync } from 'fs';
import { mkdir, readdir } from 'node:fs/promises';
import { writeFile } from 'fs/promises';
import path from 'path';
import type { Formatter } from '@formatjs/cli-lib/src/formatters';
import { format, resolveConfig } from 'prettier';

const exec = promisify(_exec);

const formatter: Formatter<Record<string, MessageDescriptor | string>> = {
    format(
        messages: Record<string, MessageDescriptor | string>,
    ): Record<string, MessageDescriptor | string> {
        return messages;
    },
    compile(messages: Record<string, MessageDescriptor | string>): Record<string, string> {
        const results: Record<string, string> = {};
        for (const key in messages) {
            const msg = messages[key];
            results[key] = typeof msg === 'string' ? msg : msg.defaultMessage!;
        }
        return results;
    },
};

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
            title: 'Compile translations',
            task: () => {
                const tasks = pkgs.map((pkg) => ({
                    title: `Compiling translations for ${pkg}`,
                    task: async () => {
                        const translationsDir = path.join(projectMap[pkg], 'translations');
                        if (!existsSync(translationsDir)) {
                            console.error(
                                chalk.red(
                                    `Translations directory does not exist for ${pkg}: ${translationsDir}`,
                                ),
                            );
                            process.exit(1);
                        }
                        const files = (await readdir(translationsDir)).filter((filename) =>
                            filename.endsWith('.json'),
                        );
                        const fileTasks = files.map((file) => ({
                            title: `Compiling ${file} for ${pkg}`,
                            task: async () => {
                                const [lang] = file.split('.json');
                                const projectFile = path.join(translationsDir, file);
                                const pvdsFiles = globSync(
                                    `${projectMap[pkg]}/node_modules/@planview/pv-*/lang/${lang}.json`,
                                );
                                const result = await compile([projectFile, ...pvdsFiles], {
                                    ast: true,
                                    format: formatter as Formatter<unknown>,
                                });
                                const parsed: Record<string, string> = JSON.parse(result);

                                const sorted = Object.keys(parsed)
                                    .sort((a, b) => {
                                        const aPVDS = a.startsWith('pvds');
                                        const bPVDS = b.startsWith('pvds');
                                        if (aPVDS && !bPVDS) {
                                            return 1;
                                        } else if (!aPVDS && bPVDS) {
                                            return -1;
                                        }

                                        return a > b ? 1 : a < b ? -1 : 0;
                                    })
                                    .reduce(
                                        (m, k) => {
                                            m[k] = parsed[k];
                                            return m;
                                        },
                                        {} as Record<string, string>,
                                    );
                                const compiledTranslationsDir = path.join(
                                    projectMap[pkg],
                                    'translations',
                                    'compiled',
                                );
                                if (!existsSync(compiledTranslationsDir)) {
                                    await mkdir(compiledTranslationsDir, { recursive: true });
                                }
                                const fileName = path.join(compiledTranslationsDir, `${lang}.json`);
                                const prettierOptions = await resolveConfig(fileName);
                                const formatted = await format(JSON.stringify(sorted, null, 4), {
                                    ...prettierOptions,
                                    parser: 'json',
                                });

                                await writeFile(fileName, formatted, 'utf-8');
                            },
                        }));
                        return new Listr(fileTasks);
                    },
                }));
                return new Listr(tasks);
            },
        },
    ]);

    await tasks.run();
    console.log(chalk.greenBright('\n🎉 Compilation complete!'));
}

main().catch((err) => {
    console.error(chalk.red('❌ Unexpected error:'), err);
    process.exit(1);
});
