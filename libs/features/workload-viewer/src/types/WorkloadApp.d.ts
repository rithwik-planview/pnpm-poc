declare module 'WorkloadApp' {
    import type { ForwardRefExoticComponent, RefAttributes } from 'react';
    import type { AppProps, WorkloadViewerHandle } from '../index';

    export const Workload: ForwardRefExoticComponent<
        AppProps & RefAttributes<WorkloadViewerHandle>
    >;
}
