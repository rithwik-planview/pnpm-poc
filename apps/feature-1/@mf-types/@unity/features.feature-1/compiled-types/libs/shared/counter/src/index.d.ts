type Listener = () => void;
export declare const counterStore: {
    getSnapshot: () => number;
    subscribe: (listener: Listener) => () => void;
    increment: () => void;
};
export {};
//# sourceMappingURL=index.d.ts.map
