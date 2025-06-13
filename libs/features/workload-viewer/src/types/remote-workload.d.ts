declare module 'virtual:remote-workload' {
    import React from 'react';
    import { AppProps, WorkloadViewerHandle } from './workload'; // adjust path

    const Workload: React.ForwardRefExoticComponent<
        React.PropsWithoutRef<AppProps> & React.RefAttributes<WorkloadViewerHandle>
    >;

    export { Workload };
}
