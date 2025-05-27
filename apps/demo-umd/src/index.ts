import './index.css';

const FEATURES = {
    FEATURE_1: {
        name: '@unity/features.feature-1',
    },
    FEATURE_2: {
        name: '@unity/features.feature-2',
    },
};

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
        mode: import.meta.env.MODE,
    });
    feature_1_module?.default.render(feature_1_element, {});

    const feature_2_element: HTMLDivElement = document.querySelector('#feature-2-id')!;
    const feature_2_module = await window.Unity_Shell.loadRemote({
        remoteName: FEATURES.FEATURE_2.name,
        mode: import.meta.env.MODE,
    });
    feature_2_module?.default.render(feature_2_element, {});
}
