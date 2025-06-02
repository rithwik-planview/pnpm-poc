import { RefObject, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
type CreateRemoteArgs<T> = {
    rootComponent: ForwardRefExoticComponent<PropsWithoutRef<any> & RefAttributes<T>>;
};
export declare const createRemote: <T>({ rootComponent: Component }: CreateRemoteArgs<T>) => {
    render: (props: { element: HTMLElement }) => RefObject<T | null>;
    destroy: (props: { element: HTMLElement }) => void;
};
export {};
