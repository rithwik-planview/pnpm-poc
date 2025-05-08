import { useCallback, useState } from 'react';
import './App.css';
import { loadRemote } from '@unity/core.shell';

type ModuleReturn = Awaited<ReturnType<typeof loadRemote>>;

const App = () => {
    const [moduleMap, setModuleMap] = useState(new Map<string, ModuleReturn>());
    const renderFeature = useCallback(
        (remoteName: string, port: number, elementId: string) => async () => {
            let module = moduleMap.get(remoteName);
            if (!module) {
                module = await loadRemote({ remoteName, port });
                setModuleMap((prev) => {
                    const newMap = new Map(prev);
                    newMap.set(remoteName, module!);
                    return newMap;
                });
            }
            const element = document.getElementById(elementId);
            if (element) {
                module?.default.render({
                    element,
                });
            }
        },
        [moduleMap],
    );

    const removeFeature = useCallback(
        (remoteName: string, elementId: string) => () => {
            const module = moduleMap.get(remoteName);
            if (module) {
                const element = document.getElementById(elementId);
                if (element) {
                    module.default.destroy({
                        element,
                    });
                }
            }
            setModuleMap((prev) => {
                const newMap = new Map(prev);
                newMap.delete(remoteName);
                return newMap;
            });
        },
        [moduleMap],
    );
    return (
        <div className="content">
            <h2>Unity Module Federation POC</h2>
            <div className="container">
                <div>
                    {moduleMap.has('feature_1') ? (
                        <button
                            className="button"
                            onClick={removeFeature('feature_1', 'feature-id-1')}
                        >
                            Remove feature 1
                        </button>
                    ) : (
                        <button
                            className="button"
                            onClick={renderFeature('feature_1', 3004, 'feature-id-1')}
                        >
                            Render feature 1
                        </button>
                    )}
                    <div id="feature-id-1" className="feature" />
                </div>
                <div>
                    {moduleMap.has('feature_2') ? (
                        <button
                            className="button"
                            onClick={removeFeature('feature_2', 'feature-id-2')}
                        >
                            Remove feature 2
                        </button>
                    ) : (
                        <button
                            className="button"
                            onClick={renderFeature('feature_2', 3006, 'feature-id-2')}
                        >
                            Render feature 2
                        </button>
                    )}
                    <div id="feature-id-2" className="feature" />
                </div>
            </div>
        </div>
    );
};

export default App;
