import React from 'react';
import ReactDOM from 'react-dom';
import {
    init,
    loadRemote as loadMFRemote,
    registerRemotes,
} from '@module-federation/enhanced/runtime';

type RenderRemoteArgs = {
    remoteName: string;
    port: number;
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
    name: 'shell',
    remotes: [],
    shared: {
        react: {
            lib: () => React,
            version: '18.3.1',
            shareConfig: {
                singleton: true,
                requiredVersion: '18.3.1',
            },
        },
        'react-dom': {
            lib: () => ReactDOM,
            version: '18.3.1',
            shareConfig: {
                singleton: true,
                requiredVersion: '18.3.1',
            },
        },
    },
});

const moduleMap = new Map<string, ModuleReturn>();

export const loadRemote = async ({ remoteName, port }: RenderRemoteArgs) => {
    if (!moduleMap.has(remoteName)) {
        const name = `mf_${remoteName}`;
        registerRemotes([
            {
                name,
                entry: `http://localhost:${port}/mf-manifest.json`,
            },
        ]);
        try {
            const module = await loadMFRemote<ModuleReturn>(name);
            moduleMap.set(remoteName, module!);
        } catch (error) {
            return;
        }
    }
    return moduleMap.get(remoteName);
};
