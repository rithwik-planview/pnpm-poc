import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const copyFile = promisify(fs.copyFile);
const mkdir = promisify(fs.mkdir);
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

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

async function deploy(projectName: string, projectTarget: string, targetRoot = 'local-bucket') {
    const outDir = path.join(projectTarget, 'dist/');
    const targetDir = path.join(targetRoot, projectName);

    try {
        const outStat = await stat(outDir);
        if (!outStat.isDirectory()) {
            throw new Error(`${outDir} is not a directory`);
        }

        console.log(`Deploying ${projectName} to ${targetDir}...`);
        await copyRecursive(outDir, targetDir);
        console.log(`✅ Deployed to ${targetDir}`);
    } catch (err) {
        console.error(`❌ Deployment failed:`, err);
        process.exit(1);
    }
}

// Get CLI arguments
const [_, __, projectName, targetRoot] = process.argv;

if (!projectName) {
    console.error('Usage: deploy-single.ts <project-name> [target-dir]');
    process.exit(1);
}

deploy(projectName, targetRoot);
