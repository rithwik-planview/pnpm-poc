import { createRef, StrictMode } from 'react';
import type { RefObject, ComponentType } from 'react';
import ReactDOM from 'react-dom/client';

type CreateRemoteArgs<T, P> = {
    rootComponent: ComponentType<P & { ref: RefObject<T | null> }>;
};

export const createRemote = <T, P>({ rootComponent: Component }: CreateRemoteArgs<T, P>) => {
    const rootMap = new Map<HTMLElement, ReactDOM.Root>();

    const render = (element: HTMLElement, props: P): RefObject<T | null> => {
        const appRef = createRef<T>();
        try {
            const root = ReactDOM.createRoot(element);
            rootMap.set(element, root);
            root.render(
                <StrictMode>
                    <Component ref={appRef} {...props} />
                </StrictMode>,
            );
        } catch (error) {
            console.error('Error rendering module:', error);
        }
        return appRef;
    };

    const destroy = (element: HTMLElement) => {
        const root = rootMap.get(element);
        if (root) {
            root.unmount();
            rootMap.delete(element);
        }
    };

    return {
        render,
        destroy,
    };
};
