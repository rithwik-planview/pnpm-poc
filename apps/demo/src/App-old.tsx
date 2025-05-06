import { useCallback } from 'react';
import './App.css';
import { registerRemotes, loadRemote } from '@module-federation/enhanced/runtime';

type RenderFunction = (props: { element: HTMLElement }) => void;
type DestroyFunction = (props: { element: HTMLElement }) => void;
type ModuleReturn = {
    default: {
        render: RenderFunction;
        destroy: DestroyFunction;
    };
};
const moduleMap = new Map<string, ModuleReturn>();
let currentModule = '';

const App = () => {
    const renderFeature = useCallback(
        (feature: string, port: number) => async () => {
            if (!moduleMap.has(feature)) {
                const name = `mf_${feature}`;
                registerRemotes([
                    {
                        name,
                        entry: `http://localhost:${port}/mf-manifest.json`,
                    },
                ]);
                const module = await loadRemote<ModuleReturn>(name);
                moduleMap.set(feature, module!);
            }
            if (currentModule !== feature) {
                const prevModule = moduleMap.get(currentModule);
                const module = moduleMap.get(feature);
                if (module) {
                    const element = document.getElementById('feature-id');
                    if (element) {
                        prevModule?.default.destroy({ element });
                        module.default.render({
                            element,
                        });
                        currentModule = feature;
                    }
                }
            }
        },
        [],
    );
    return (
        <div className="content">
            <h1>Rsbuild with React</h1>
            <button
                style={{ width: 200, margin: '10px auto' }}
                onClick={renderFeature('feature_1', 3003)}
            >
                Render feature 1
            </button>
            <button
                style={{ width: 200, margin: '10px auto' }}
                onClick={renderFeature('feature_2', 3005)}
            >
                Render feature 2
            </button>
            <p>Start building amazing things with Rsbuild.</p>
            <div id="feature-id">Feature goes here..</div>
        </div>
    );
};

export default App;
