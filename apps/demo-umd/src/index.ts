import './index.css';
import type { getPortFromName, loadRemote, sanitizeName } from '@unity/core.shell';

const FEATURES = {
    FEATURE_1: {
        name: '@unity/features.feature-1',
    },
    FEATURE_2: {
        name: '@unity/features.feature-2',
    },
};

declare global {
    interface Window {
        Unity_Shell: {
            loadRemote: typeof loadRemote;
            sanitizeName: typeof sanitizeName;
            getPortFromName: typeof getPortFromName;
        };
    }
}

const rootEl = document.querySelector('#root');
if (rootEl) {
    rootEl.innerHTML = `
  <div class="content">
    <h1>Unity Module Federation (UMD) POC</h1>
    <p>Mounted via Unity_Shell</p>
	<div class="features">
		<div class="feature" id="feature-1-id"></div>
		<div class="feature" id="feature-2-id"></div>
	</div>
  </div>
`;

    const feature_1_element: HTMLDivElement = document.querySelector('#feature-1-id')!;
    const feature_1_module = await window.Unity_Shell.loadRemote({
        remoteName: FEATURES.FEATURE_1.name,
    });
    feature_1_module?.default.render({ element: feature_1_element });

    const feature_2_element: HTMLDivElement = document.querySelector('#feature-2-id')!;
    const feature_2_module = await window.Unity_Shell.loadRemote({
        remoteName: FEATURES.FEATURE_2.name,
    });
    feature_2_module?.default.render({ element: feature_2_element });
}
