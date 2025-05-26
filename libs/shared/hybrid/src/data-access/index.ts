import { createDataLibrary } from '@unity/core.data-access';
import { client } from '../client/client.gen';

const origin = localStorage.getItem('origin');
const jwtToken = localStorage.getItem('sessionId');

client.setConfig({
    baseURL: `${origin}/HybridSolutions`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
    },
});

export const hybridDataLibrary = createDataLibrary(`${origin}/HybridSolutions`, {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${jwtToken}`,
});

export * from '../client/@tanstack/react-query.gen';
