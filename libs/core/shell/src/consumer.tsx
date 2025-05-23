import React from 'react';
import ReactDOM from 'react-dom';
import {
    init,
    loadRemote as loadMFRemote,
    registerRemotes,
} from '@module-federation/enhanced/runtime';
import { sanitizeName, getRemoteUrl } from '@unity/shared.utils';

type RenderRemoteArgs = {
    remoteName: string;
    mode: 'development' | 'production' | 'none';
};

type RenderFunction = (props: { element: HTMLElement }) => void;
type DestroyFunction = (props: { element: HTMLElement }) => void;
type ModuleReturn = {
    default: {
        render: RenderFunction;
        destroy: DestroyFunction;
    };
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

const moduleMap = new Map<string, ModuleReturn>();

export const loadRemote = async ({ remoteName, mode }: RenderRemoteArgs) => {
    if (!moduleMap.has(remoteName)) {
        const name = sanitizeName(remoteName);
        registerRemotes([
            {
                name,
                entry: `${getRemoteUrl(remoteName, mode)}mf-manifest.json`,
            },
        ]);
        try {
            const module = await loadMFRemote<ModuleReturn>(name);
            moduleMap.set(remoteName, module!);
        } catch (error) {
            console.error(`Error loading remote module: ${remoteName}, ${error}`);
            return;
        }
    }
    return moduleMap.get(remoteName);
};
