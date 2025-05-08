import { useCallback } from 'react';
import './App.css';
import { loadRemote } from 'shell';

type ModuleReturn = Awaited<ReturnType<typeof loadRemote>>;
const moduleMap = new Map<string, ModuleReturn>();
let currentModule = '';

const App = () => {
    const renderFeature = useCallback(
        (remoteName: string, port: number, elementId: string) => async () => {
            if (!moduleMap.has(remoteName)) {
                const module = await loadRemote({ remoteName, port });
                moduleMap.set(remoteName, module!);
            }
            if (currentModule !== remoteName) {
                const prevModule = moduleMap.get(currentModule);
                const module = moduleMap.get(remoteName);
                if (module) {
                    const element = document.getElementById(elementId);
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
            <h2>Unity Module Federation POC</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <button
                        style={{ width: 200, margin: '10px auto' }}
                        onClick={renderFeature('feature_1', 3004, 'feature-id-1')}
                    >
                        Render feature 1
                    </button>
                    <div id="feature-id-1">Feature goes here..</div>
                </div>
                <div>
                    <button
                        style={{ width: 200, margin: '10px auto' }}
                        onClick={renderFeature('feature_2', 3006, 'feature-id-2')}
                    >
                        Render feature 2
                    </button>
                    <div id="feature-id-2">Feature goes here..</div>
                </div>
            </div>
        </div>
    );
};

export default App;
