import { createDataLibrary } from '@unity/core.data-access';
import { client } from '../client/client.gen';
import { HYBRID_BASE_URL, SESSION_ID } from '../constants';
import z from 'zod';

const baseURLRaw = localStorage.getItem(HYBRID_BASE_URL) ?? '';
const jwtTokenRaw = localStorage.getItem(SESSION_ID) ?? '';

const baseUrlSchema = z.string().url();
const jwtTokenSchema = z
    .string()
    .regex(/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, 'Invalid JWT format');

const baseURL = baseUrlSchema.safeParse(baseURLRaw);
const jwtToken = jwtTokenSchema.safeParse(jwtTokenRaw);

if (!baseURL.success) {
    console.error(`Invalid base URL: ${baseURL.error.message}`);
}

if (!jwtToken.success) {
    console.error(`Invalid JWT token: ${jwtToken.error.message}`);
}

client.setConfig({
    baseURL: baseURL.data,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken.data}`,
    },
});

export const hybridDataLibrary = createDataLibrary(baseURL.data!, {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${jwtToken.data}`,
});

export * from '../client/@tanstack/react-query.gen';
