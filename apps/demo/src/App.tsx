import { useCallback } from 'react';
import './App.css';
import { loadRemote } from 'shell';

type ModuleReturn = Awaited<ReturnType<typeof loadRemote>>;
const moduleMap = new Map<string, ModuleReturn>();
let currentModule = '';

const App = () => {
    const renderFeature = useCallback(
        (remoteName: string, port: number) => async () => {
            if (!moduleMap.has(remoteName)) {
                const module = await loadRemote({ remoteName, port });
                moduleMap.set(remoteName, module!);
            }
            if (currentModule !== remoteName) {
                const prevModule = moduleMap.get(currentModule);
                const module = moduleMap.get(remoteName);
                if (module) {
                    const element = document.getElementById('feature-id');
                    if (element) {
                        prevModule?.default.destroy({ element });
                        module.default.render({
                            element,
                        });
                        currentModule = remoteName;
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
