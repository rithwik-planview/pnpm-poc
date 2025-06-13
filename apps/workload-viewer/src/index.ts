import './styles.css';

const rootEl = document.querySelector('#root');
if (rootEl) {
    rootEl.innerHTML = `<div class="feature" id="feature"></div>`;

    const appState = {
        entityIds: `/Task/29m3w9c0mv7quu1lhp03yjeur3`,
        internalId: `8.2171614087.1028518`,
        businessUnitId: `744.2190.1028518`,
        startDate: `4/4/2024`,
        endDate: `4/19/2024`,
        parentEntityId: `6.2171614086.1028518`,
        serviceSource: `HybridSolutionsV2`,
        origin: `https://qaapp6.clarizen.com`,
        sessionId: localStorage.getItem('sessionId') ?? null,
    } as Record<string, string>;

    const feature_workload_element: HTMLDivElement = document.querySelector('#feature')!;
    window.Unity_WorkloadViewer.render({
        ...appState,
        element: feature_workload_element,
    });
    console.log('feature_workload_module rendered successfully');
}
