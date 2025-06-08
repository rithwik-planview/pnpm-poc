/// <reference types="@rsbuild/core/types" />
/// <reference types="../../../env/types" />
import type { loadRemote, sanitizeName } from '@unity/core.shell';

declare global {
    interface Window {
        Unity_Shell: {
            loadRemote: typeof loadRemote;
            sanitizeName: typeof sanitizeName;
        };
    }
}
