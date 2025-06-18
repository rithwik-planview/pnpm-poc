import { createRef, forwardRef } from 'react';
import ReactDOM from 'react-dom';

import { Workload } from 'WorkloadApp';
import '../downloads/WorkloadApp.css';

export enum AppState {
    BasePath = 'basePath',
    BoardId = 'boardId',
    Data = 'data',
    Origin = 'origin',
    SessionId = 'sessionId',
    TaskId = 'taskId',
    EntityIds = 'entityIds',
    InternalId = 'internalId',
    BusinessUnitId = 'businessUnitId',
    StartDate = 'startDate',
    EndDate = 'endDate',
    ParentEntityId = 'parentEntityId',
    ServiceSource = 'serviceSource',
}

export type AppProps = Record<AppState, string>;

export type WorkloadViewerHandle = {
    refresh: () => void;
};
type WorkloadViewerProps = Parameters<typeof WorkloadViewer>[0];

const WorkloadViewer = forwardRef<WorkloadViewerHandle, AppProps>(function (props, ref) {
    console.log('WorkloadViewer props:', props);
    return <Workload {...props} ref={ref} />;
});

type Args = WorkloadViewerProps & { element: HTMLElement };

export function render(props: Args) {
    const appRef = createRef<WorkloadViewerHandle>();
    const { element, ...rest } = props;
    console.log('Rendering WorkloadViewer with props:', rest);
    ReactDOM.render(<WorkloadViewer {...rest} ref={appRef} />, element);
    return appRef;
}
