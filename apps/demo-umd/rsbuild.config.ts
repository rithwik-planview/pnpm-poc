import { defineConfig, loadEnv } from '@rsbuild/core';
import path from 'path';
import { name } from './package.json';
import { getDirname } from '@unity/tools';
import { getPortFromName, getRemoteUrl } from '@unity/shared.utils';

const envDir = path.join(getDirname(import.meta.url), '../../env');
const { parsed, publicVars } = loadEnv({ cwd: envDir });

export default defineConfig({
    source: {
        tsconfigPath: './tsconfig.build.json',
        define: publicVars,
    },
    html: {
        title: 'Unity Module Federation (UMD) POC',
        tags: [
            {
                tag: 'script',
                attrs: {
                    src: `${getRemoteUrl('@unity/core.shell', 'umd', parsed.PUBLIC_BASE_URL)}index.js`,
                },
            },
        ],
    },
    server: {
        port: getPortFromName(name),
    },
});
