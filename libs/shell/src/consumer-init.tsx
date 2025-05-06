import React from 'react';
import ReactDOM from 'react-dom';
import { init, loadRemote as loadMFRemote } from '@module-federation/enhanced/runtime';

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
const moduleMap = new Map<string, ModuleReturn>();

export const loadRemote = async ({ remoteName, port }: RenderRemoteArgs) => {
    if (!moduleMap.has(remoteName)) {
        const name = `mf_${remoteName}`;
        init({
            name: 'shell',
            remotes: [
                {
                    name,
                    entry: `http://localhost:${port}/mf-manifest.json`,
                },
            ],
            shared: {
                react: {
                    lib: () => React,
                    version: '18.3.1',
                    shareConfig: {
                        singleton: true,
                        requiredVersion: false,
                    },
                },
                'react-dom': {
                    lib: () => ReactDOM,
                    version: '18.3.1',
                    shareConfig: {
                        singleton: true,
                        requiredVersion: false,
                    },
                },
            },
        });
        try {
            const module = await loadMFRemote<ModuleReturn>(name);
            moduleMap.set(remoteName, module!);
        } catch (error) {
            return;
        }
    }
    return moduleMap.get(remoteName);
};
