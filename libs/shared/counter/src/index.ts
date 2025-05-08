let counter = 0;
type Listener = () => void;
let listeners: Listener[] = [];

export const counterStore = {
    getSnapshot: () => counter,
    subscribe: (listener: Listener) => {
        listeners = [...listeners, listener];
        return () => {
            listeners = listeners.filter((l) => l !== listener);
        };
    },
    increment: () => {
        counter += 1;
        emitChange();
    },
};

const emitChange = () => {
    for (const listener of listeners) {
        listener();
    }
};
