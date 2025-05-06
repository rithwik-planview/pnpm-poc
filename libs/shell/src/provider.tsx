import {
    createRef,
    StrictMode,
    RefObject,
    ForwardRefExoticComponent,
    PropsWithoutRef,
    RefAttributes,
} from 'react';
import * as ReactDOM from 'react-dom/client';

type CreateRemoteArgs<T> = {
    rootComponent: ForwardRefExoticComponent<PropsWithoutRef<any> & RefAttributes<T>>;
};

export const createRemote = <T,>({ rootComponent: Component }: CreateRemoteArgs<T>) => {
    const rootMap = new Map<any, ReactDOM.Root>();
    const render = (props: { element: HTMLElement }): RefObject<T | null> => {
        const appRef = createRef<T>();
        const root = ReactDOM.createRoot(props.element);
        rootMap.set(props.element, root);
        root.render(
            <StrictMode>
                <Component ref={appRef} />
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
