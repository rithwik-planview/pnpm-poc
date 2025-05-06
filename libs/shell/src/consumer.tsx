import { registerRemotes, loadRemote as loadMFRemote } from '@module-federation/enhanced/runtime';

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
