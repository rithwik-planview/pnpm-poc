import { render } from '@unity/features.workload-viewer';
declare global {
    interface Window {
        Unity_WorkloadViewer: {
            render: typeof render;
        };
    }
}
