import { getPortFromName } from './get-port-from-name';

export type Mode = 'development' | 'production' | 'none';
export type ExportType = 'mf' | 'esm' | 'cjs' | 'umd' | 'iife';
export const getRemoteUrl = (name: string, mode: Mode, exportType: ExportType = 'mf') => {
    let productionBase = import.meta.env.PUBLIC_BASE_URL || 'http://localhost:80/';
    productionBase = productionBase.replace(/\/$/, '');
    return mode === 'production'
        ? `${productionBase}/${name}/${exportType}/`
        : `http://localhost:${getPortFromName(name)}/`;
};
