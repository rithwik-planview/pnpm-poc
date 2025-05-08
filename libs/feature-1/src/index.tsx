import { forwardRef, useSyncExternalStore } from 'react';
import { createRemote } from 'shell';
import { counterStore } from 'shared';

const App = forwardRef<HTMLDivElement>((_props, ref) => {
    const counter = useSyncExternalStore(counterStore.subscribe, counterStore.getSnapshot);
    return (
        <>
            <div ref={ref}>Feature 1</div>
            <button onClick={counterStore.increment} style={{ margin: 10, padding: '5px 10px' }}>
                Shared Counter: {counter}
            </button>
        </>
    );
});

export default createRemote({ rootComponent: App });
