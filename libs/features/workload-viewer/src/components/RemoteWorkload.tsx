import React, { useEffect, useState, forwardRef } from 'react';
import type { AppProps, WorkloadViewerHandle } from 'src';
import type * as RemoteModule from 'virtual:remote-workload';

type RemoteComponentType = typeof RemoteModule.Workload;

function getRemoteWorkloadUrl(): string {
    return 'http://localhost:81/index.js';
}

export const RemoteWorkload = forwardRef<WorkloadViewerHandle, AppProps>(
    function RemoteWorkload(props, ref) {
        const [Component, setComponent] = useState<RemoteComponentType | null>(null);

        useEffect(() => {
            const url = getRemoteWorkloadUrl();
            // import(/* webpackIgnore: true */ url)
            import(url)
                .then((mod) => {
                    setComponent(() => mod.Workload);
                })
                .catch((err) => {
                    console.error('Failed to load remote workload module:', err);
                });
        }, []);

        if (!Component) return <div>Loading workload viewer...</div>;

        return <Component {...props} ref={ref} />;
    },
);
