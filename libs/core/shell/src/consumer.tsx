import React from 'react';
import ReactDOM from 'react-dom';
import {
    init,
    loadRemote as loadMFRemote,
    registerRemotes,
} from '@module-federation/enhanced/runtime';
import { sanitizeName, getRemoteUrl } from '@unity/shared.utils';
import { createRemote } from './provider';

type RenderRemoteArgs = {
    remoteName: string;
    mode: 'development' | 'production' | 'none';
};

type ProviderReturn<P, R> = ReturnType<typeof createRemote<P, R>>;
type ModuleReturn<P, R> = {
    default: ProviderReturn<P, R>;
};

init({
    name: sanitizeName('@unity/core.shell'),
    remotes: [],
    shared: {
        react: {
            lib: () => React,
            version: React.version,
            shareConfig: {
                singleton: true,
                requiredVersion: React.version,
            },
        },
        'react-dom': {
            lib: () => ReactDOM,
            version: ReactDOM.version,
            shareConfig: {
                singleton: true,
                requiredVersion: ReactDOM.version,
            },
        },
    },
});

const moduleMap = new Map<string, ModuleReturn<unknown, unknown>>();

export async function loadRemote<P, R>({
    remoteName,
    mode,
}: RenderRemoteArgs): Promise<ModuleReturn<P, R> | undefined> {
    if (!moduleMap.has(remoteName)) {
        const name = sanitizeName(remoteName);
        registerRemotes([
            {
                name,
                entry: `${getRemoteUrl(remoteName, mode)}mf-manifest.json`,
            },
        ]);
        try {
            const module = await loadMFRemote<ModuleReturn<P, R>>(name);
            moduleMap.set(remoteName, module! as ModuleReturn<unknown, unknown>);
        } catch (error) {
            console.error(`Error loading remote module: ${remoteName}, ${error}`);
            return;
        }
    }
    return moduleMap.get(remoteName) as ModuleReturn<P, R>;
}
