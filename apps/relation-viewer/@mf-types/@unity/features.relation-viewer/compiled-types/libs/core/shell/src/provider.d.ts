import type { RefObject, ComponentType } from 'react';
type CreateRemoteArgs<T, P> = {
    rootComponent: ComponentType<P & {
        ref: RefObject<T | null>;
    }>;
};
export declare const createRemote: <T, P>({ rootComponent: Component }: CreateRemoteArgs<T, P>) => {
    render: (element: HTMLElement, props: P) => RefObject<T | null>;
    destroy: (element: HTMLElement) => void;
};
export {};
//# sourceMappingURL=provider.d.ts.map