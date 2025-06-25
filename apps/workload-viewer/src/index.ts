import './styles.css';

const rootEl = document.querySelector('#root');
if (rootEl) {
    rootEl.innerHTML = `<div class="feature" id="feature"></div>`;

    const feature_workload_element: HTMLDivElement = document.querySelector('#feature')!;
    localStorage.setItem(
        'sessionId',
        'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUk0gUk0iLCJlbWFpbCI6InJtX2J1NUBybS5jb21fT2R5c3NleSIsImdpdmVuX25hbWUiOiJSTSIsImZhbWlseV9uYW1lIjoiUk0iLCJ1c2VySWQiOiIxODR0Z2Y1ZGg1bms5ajhmbHFza3JrczBxM19PZHlzc2V5Iiwib3JnYW5pemF0aW9uSWQiOiIxODR0Z2Y1ZGg1bms5ajhmbHFza3JrczBxMF9PZHlzc2V5Iiwib3JnYW5pemF0aW9uTmFtZSI6Ik9keXNzZXkiLCJwYXJlbnRPcmdJZCI6IiIsImlzRGVtb0FjY291bnQiOiJGYWxzZSIsInNpdGUiOiIiLCJzZXJ2aWNlS2V5IjoiRFlaVnNEaTV3VS1YVTY4NjhOdWU4USIsImlzV2lkZ2V0IjoiRmFsc2UiLCJjbHpVc2VySWRlbnRpZmllciI6IjkuNDI3NTYyMy4xMDI4NTE4IiwiY2x6VXNlck5hbWUiOiJybV9idTVAcm0uY29tX09keXNzZXkiLCJhcGlCYXNlVVJMIjoiaHR0cHM6Ly9xYWFwcDYuY2xhcml6ZW4uY29tL2RldmVsb3BfMjAyNTA2MjJfNDg4Ml9BcGlWMiIsImNselNlc3Npb25JZCI6ImYxYjdlM2QxLWMxNzItNDI0Zi04NzRlLTUyODY1NGUwN2VjZF8xMDI4NTE4IiwiY2x6T3JnYW5pemF0aW9uSWQiOiIxMDI4NTE4IiwiY2x6VXNlcklkIjoiNDI3NTYyMyIsIm5iZiI6MTc1MDc0ODczMSwiZXhwIjoxNzUwNzYzMTMxLCJpYXQiOjE3NTA3NDg3MzEsImlzcyI6ImNsYXJpemVuLmNvbSIsImF1ZCI6IkNsYXJpemVuIn0.PxQKPn_spEfatBsI-3GMYNMrzL-A96KT6qG4BSjSQtgj_m-GSWwqOv8oE1Ior-cbc9u1R86iLsBoTTNtjvfhezo-_Edm1RvHlZKLXAHJFBKLdjfwrEPD_TzOJPQhHe4NwAtJfD_8f3dD6AkbAUeUCvyZquAC9QOwyDmz5G_Ek5yNqIrYUzMeuzxnW9fzM2q_WIBgkTdi8KYtFRWugKCQmR6-PZwPG6X0baSlz8EyOKRGCT37NYAZlEEUua7ZbYL4iT8jp2kwp0JmO8TtLheGOo8NMgv-1ZKnf_2V0W0-q8HLPprRcwhxujqwYBnxOqb8M6Cf3-5fSnuAM4ELUob73Q',
    );
    localStorage.setItem('serviceSource', 'HybridSolutions');
    localStorage.setItem('origin', 'https://qaapp6.clarizen.com');
    window.Unity_WorkloadViewer.render({
        entityIds: `/Task/29m3w9c0mv7quu1lhp03yjeur3`,
        internalId: `8.2171614087.1028518`,
        businessUnitId: `744.2190.1028518`,
        startDate: `4/4/2024`,
        endDate: `4/19/2024`,
        parentEntityId: `6.2171614086.1028518`,
        element: feature_workload_element,
    });
}
