import path from 'path';
import fs from 'fs';

export function getRequiredVersion(
    workspaceDir: string,
    dependencyName: string,
): string | undefined {
    const packageJsonPath = path.join(workspaceDir, 'package.json');

    if (!fs.existsSync(packageJsonPath)) return undefined;

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const { dependencies = {}, devDependencies = {}, peerDependencies = {} } = packageJson;

    const versionSpec =
        dependencies[dependencyName] ??
        devDependencies[dependencyName] ??
        peerDependencies[dependencyName];

    if (!versionSpec) return undefined;

    if (versionSpec.startsWith('workspace:')) {
        const installedPackageJsonPath = path.join(
            workspaceDir,
            'node_modules',
            dependencyName,
            'package.json',
        );

        if (!fs.existsSync(installedPackageJsonPath)) return undefined;

        const installedPackageJson = JSON.parse(fs.readFileSync(installedPackageJsonPath, 'utf8'));
        return installedPackageJson.version;
    }

    return versionSpec;
}
