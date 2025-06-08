import { getPortFromName } from './get-port-from-name';

export type ExportType = 'mf' | 'esm' | 'cjs' | 'umd' | 'iife';
export const getRemoteUrl = (name: string, exportType: ExportType = 'mf', baseUrl?: string) => {
    if (baseUrl) {
        baseUrl = baseUrl.replace(/\/$/, '');
        return `${baseUrl}/${name}/${exportType}/`;
    }
    return `http://localhost:${getPortFromName(name)}/`;
};
