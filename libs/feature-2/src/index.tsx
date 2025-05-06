import { forwardRef } from 'react';
import { createRemote } from 'shell';

const App = forwardRef<HTMLDivElement>((_props, ref) => {
    return <div ref={ref}>Feature 2</div>;
});

export default createRemote({ rootComponent: App });
