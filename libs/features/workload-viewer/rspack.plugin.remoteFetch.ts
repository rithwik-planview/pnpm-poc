/**
 * Rsbuild plugin to download remote ESM, CSS, and asset files
 * before build time and save them locally for bundling into the final output.
 */
import type { RsbuildPlugin } from '@rsbuild/core';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

export function rsbuildPluginRemoteFetch(
    options: {
        url: string;
        localPath: string;
    }[],
): RsbuildPlugin {
    return {
        name: 'rsbuild:remote-fetch',

        async setup(api) {
            api.onBeforeBuild(async () => {
                for (const option of options) {
                    const { url, localPath } = option;
                    const { data } = await axios.get(url);
                    fs.mkdirSync(path.dirname(localPath), { recursive: true });
                    fs.writeFileSync(localPath, data);
                }
            });
        },
    };
}
