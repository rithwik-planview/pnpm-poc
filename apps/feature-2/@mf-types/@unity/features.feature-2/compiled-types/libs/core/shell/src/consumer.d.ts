import { createRemote } from './provider';
type RenderRemoteArgs = {
    remoteName: string;
    mode: 'development' | 'production' | 'none';
};
type ProviderReturn<P, R> = ReturnType<typeof createRemote<P, R>>;
type ModuleReturn<P, R> = {
    default: ProviderReturn<P, R>;
};
export declare function loadRemote<P, R>({
    remoteName,
    mode,
}: RenderRemoteArgs): Promise<ModuleReturn<P, R> | undefined>;
export {};
//# sourceMappingURL=consumer.d.ts.map
