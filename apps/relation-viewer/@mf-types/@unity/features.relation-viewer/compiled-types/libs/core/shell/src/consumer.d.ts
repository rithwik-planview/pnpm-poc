import { createRemote } from './provider';
type RenderRemoteArgs = {
    remoteName: string;
    baseUrl?: string;
};
type ProviderReturn<P, R> = ReturnType<typeof createRemote<P, R>>;
type ModuleReturn<P, R> = {
    default: ProviderReturn<P, R>;
};
export declare function loadRemote<P, R>({ remoteName, baseUrl, }: RenderRemoteArgs): Promise<ModuleReturn<P, R> | undefined>;
export {};
//# sourceMappingURL=consumer.d.ts.map