import { createRef, StrictMode } from 'react';
import type { RefObject, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import * as ReactDOM from 'react-dom/client';

type CreateRemoteArgs<T, P> = {
    rootComponent: ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
};

export const createRemote = <T, P>({ rootComponent: Component }: CreateRemoteArgs<T, P>) => {
    const rootMap = new Map<HTMLElement, ReactDOM.Root>();

    const render = (props: { element: HTMLElement } & P): RefObject<T | null> => {
        const { element, ...componentProps } = props;
        const appRef = createRef<T>();
        const root = ReactDOM.createRoot(element);
        rootMap.set(element, root);
        root.render(
            <StrictMode>
                <Component ref={appRef} {...(componentProps as PropsWithoutRef<P>)} />
            </StrictMode>,
        );
        return appRef;
    };

    const destroy = (props: { element: HTMLElement }) => {
        const root = rootMap.get(props.element);
        if (root) {
            root.unmount();
            rootMap.delete(props.element);
        }
    };

    return {
        render,
        destroy,
    };
};
