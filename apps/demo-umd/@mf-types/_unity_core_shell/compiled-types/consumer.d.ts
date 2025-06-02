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
export declare const loadRemote: ({
    remoteName,
    port,
}: RenderRemoteArgs) => Promise<ModuleReturn | undefined>;
export {};
