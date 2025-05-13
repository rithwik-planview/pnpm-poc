import { getPortFromName } from './get-port-from-name';

export const getRemoteUrl = (name: string, mode: string) => {
    return mode === 'production'
        ? `http://localhost:80/${name}/mf/`
        : `http://localhost:${getPortFromName(name)}/`;
};
