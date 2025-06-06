import { getPortFromName } from './get-port-from-name';

type ExportType = 'mf' | 'esm' | 'cjs' | 'umd' | 'iife';
export const getRemoteUrl = (name: string, mode: string, exportType: ExportType = 'mf') => {
    return mode === 'production'
        ? `http://localhost:80/${name}/${exportType}/`
        : `http://localhost:${getPortFromName(name)}/`;
};
