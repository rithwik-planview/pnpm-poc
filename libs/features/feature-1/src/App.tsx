import { forwardRef, useSyncExternalStore } from 'react';
import { counterStore } from '@unity/shared.counter';
import { createRemote } from '@unity/core.shell';
import { Button } from '@unity/shared.ui';
import styles from './styles.module.css';

const App = forwardRef<HTMLDivElement>((_props, ref) => {
    const counter = useSyncExternalStore(counterStore.subscribe, counterStore.getSnapshot);
    return (
        <div className={styles.container}>
            <div ref={ref}>Feature 1</div>
            <Button primary onClick={counterStore.increment} label={`Shared Counter: ${counter}`} />
        </div>
    );
});

export default App;
