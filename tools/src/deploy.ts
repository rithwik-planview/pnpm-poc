#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { exec as _exec } from 'child_process';
import { Listr } from 'listr2';
import chalk from 'chalk';

const copyFile = promisify(fs.copyFile);
const mkdir = promisify(fs.mkdir);
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const exec = promisify(_exec);

async function copyRecursive(src: string, dest: string) {
    await mkdir(dest, { recursive: true });
    const entries = await readdir(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            await copyRecursive(srcPath, destPath);
        } else if (entry.isFile()) {
            await copyFile(srcPath, destPath);
        }
    }
}

async function getProjectPaths(): Promise<Record<string, string>> {
    const { stdout } = await exec('pnpm -r ls --json --depth=-1');
    const pkgs = JSON.parse(stdout) as { name: string; path: string }[];
    return Object.fromEntries(pkgs.map((p) => [p.name, p.path]));
}

async function main() {
    const args = process.argv.slice(2);
    const skipBuild = args.includes('--skip-build');
    const pkgs = args.filter((arg) => !arg.startsWith('--'));
    const pnpmRoot = await exec('pnpm root -w');
    const workspaceRoot = path.resolve(pnpmRoot.stdout.trim(), '..');
    const targetRoot = path.join(workspaceRoot, 'build-drop/');

    if (pkgs.length === 0) {
        console.error(chalk.red('Usage: deploy.ts <pkg1> <pkg2> ... [--build]'));
        process.exit(1);
    }

    const projectMap = await getProjectPaths();

    const tasks = new Listr(
        [
            ...(!skipBuild
                ? [
                      {
                          title: 'Building packages',
                          task: () => {
                              const filterArgs = pkgs.map((p) => `-F "${p}..."`).join(' ');
                              const cmd = `pnpm ${filterArgs} build`;
                              return exec(cmd);
                          },
                      },
                  ]
                : []),
            ...pkgs.map((pkg) => {
                const pkgPath = projectMap[pkg];
                if (!pkgPath) {
                    throw new Error(`Package not found: ${pkg}`);
                }
                return {
                    title: `Generating local build drop for ${pkg}`,
                    task: async () => {
                        const outDir = path.join(pkgPath, 'dist/');
                        const targetDir = path.join(targetRoot, pkg);

                        const outStat = await stat(outDir);
                        if (!outStat.isDirectory()) {
                            throw new Error(`${outDir} is not a directory`);
                        }

                        await copyRecursive(outDir, targetDir);
                    },
                };
            }),
        ],
        { concurrent: false, exitOnError: true },
    );

    await tasks.run();
    console.log(chalk.greenBright('\n🎉 Local build drop generated successfully!'));
}

main().catch((err) => {
    console.error(chalk.red('❌ Unexpected error:'), err);
    process.exit(1);
});
