import { useCallback, useState } from 'react';
import './App.css';
import { loadRemote } from '@unity/core.shell';

type ModuleReturn = Awaited<ReturnType<typeof loadRemote>>;
const FEATURES = {
    FEATURE_1: {
        name: '@unity/features.feature-1',
    },
    FEATURE_2: {
        name: '@unity/features.feature-2',
    },
};

let baseUrl: string;
try {
    if (!import.meta.env.DEV) {
        baseUrl = import.meta.env.BASE_URL;
    }
} catch (error) {
    console.log('Running in local mode', error);
}

const App = () => {
    const [moduleMap, setModuleMap] = useState(new Map<string, ModuleReturn>());
    const renderFeature = useCallback(
        (remoteName: string, elementId: string) => async () => {
            let module = moduleMap.get(remoteName);
            if (!module) {
                module = await loadRemote({ remoteName, baseUrl });
                setModuleMap((prev) => {
                    const newMap = new Map(prev);
                    newMap.set(remoteName, module!);
                    return newMap;
                });
            }
            const element = document.getElementById(elementId);
            if (element) {
                module?.default.render(element, {});
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
                    module.default.destroy(element);
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
                    {moduleMap.has(FEATURES.FEATURE_1.name) ? (
                        <button
                            className="button"
                            onClick={removeFeature(FEATURES.FEATURE_1.name, 'feature-id-1')}
                        >
                            Remove feature 1
                        </button>
                    ) : (
                        <button
                            className="button"
                            onClick={renderFeature(FEATURES.FEATURE_1.name, 'feature-id-1')}
                        >
                            Render feature 1
                        </button>
                    )}
                    <div id="feature-id-1" className="feature" />
                </div>
                <div>
                    {moduleMap.has(FEATURES.FEATURE_2.name) ? (
                        <button
                            className="button"
                            onClick={removeFeature(FEATURES.FEATURE_2.name, 'feature-id-2')}
                        >
                            Remove feature 2
                        </button>
                    ) : (
                        <button
                            className="button"
                            onClick={renderFeature(FEATURES.FEATURE_2.name, 'feature-id-2')}
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
