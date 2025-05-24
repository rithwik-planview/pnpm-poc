import axios, { type AxiosInstance } from 'axios';
import { createDataLibrary } from './index';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('createDataLibrary', () => {
    const baseURL = 'https://api.example.com';
    const defaultHeaders = { 'Content-Type': 'application/json' };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should create a client with correct base URL and headers', () => {
        createDataLibrary(baseURL, defaultHeaders);

        expect(mockedAxios.create).toHaveBeenCalledWith({
            baseURL,
            headers: defaultHeaders,
        });
    });

    describe('fetch method', () => {
        const mockResponse = { data: { id: 1, name: 'Test' } };

        beforeEach(() => {
            mockedAxios.create.mockReturnValue({
                request: jest.fn().mockResolvedValue(mockResponse),
            } as unknown as AxiosInstance);
        });

        it('should make GET request correctly', async () => {
            const api = createDataLibrary(baseURL);
            const result = await api.fetch('get', '/users');

            expect(result).toEqual(mockResponse.data);
        });

        it('should make POST request correctly', async () => {
            const api = createDataLibrary(baseURL);
            const payload = { name: 'John' };

            await api.fetch('post', '/users', { data: payload });

            expect(mockedAxios.create().request).toHaveBeenCalledWith(
                expect.objectContaining({
                    method: 'post',
                    url: '/users',
                    data: payload,
                }),
            );
        });

        it('should handle URL path parameters correctly', async () => {
            const api = createDataLibrary(baseURL);
            await api.fetch('get', '/users/:id/posts/:postId', {
                urlPathParams: { id: '123', postId: '456' },
            });

            expect(mockedAxios.create().request).toHaveBeenCalledWith(
                expect.objectContaining({
                    url: '/users/123/posts/456',
                }),
            );
        });

        it('should handle query parameters correctly', async () => {
            const api = createDataLibrary(baseURL);
            await api.fetch('get', '/users', {
                params: { page: 1, limit: 10 },
            });

            expect(mockedAxios.create().request).toHaveBeenCalledWith(
                expect.objectContaining({
                    params: { page: 1, limit: 10 },
                }),
            );
        });

        it('should handle array query parameters correctly', async () => {
            const api = createDataLibrary(baseURL);
            await api.fetch('get', '/users', {
                params: { ids: [1, 2, 3] },
            });

            expect(mockedAxios.create().request).toHaveBeenCalledWith(
                expect.objectContaining({
                    params: { ids: [1, 2, 3] },
                }),
            );
        });

        it('should handle errors correctly', async () => {
            const errorResponse = new Error('Network Error');
            mockedAxios.create.mockReturnValue({
                request: jest.fn().mockRejectedValue(errorResponse),
            } as unknown as AxiosInstance);

            const api = createDataLibrary(baseURL);

            await expect(api.fetch('get', '/users')).rejects.toThrow('Network Error');
        });

        it('should encode URL path parameters correctly', async () => {
            const api = createDataLibrary(baseURL);
            await api.fetch('get', '/users/:name', {
                urlPathParams: { name: 'John Doe' },
            });

            expect(mockedAxios.create().request).toHaveBeenCalledWith(
                expect.objectContaining({
                    url: '/users/John%20Doe',
                }),
            );
        });

        it('should merge custom headers with default headers', async () => {
            const api = createDataLibrary(baseURL, defaultHeaders);
            await api.fetch('get', '/users', {
                headers: { 'X-Custom-Header': 'value' },
            });

            expect(mockedAxios.create).toHaveBeenCalledWith({
                baseURL,
                headers: defaultHeaders,
            });

            expect(mockedAxios.create().request).toHaveBeenCalledWith(
                expect.objectContaining({
                    headers: { 'X-Custom-Header': 'value' },
                }),
            );
        });
    });
});

// Test the URL path parameter function separately
describe('applyUrlPathParams', () => {
    it('should replace multiple path parameters correctly', () => {
        const api = createDataLibrary('');
        api.fetch('get', '/users/:id/posts/:postId', {
            urlPathParams: { id: '123', postId: '456' },
        });

        expect(mockedAxios.create().request).toHaveBeenCalledWith(
            expect.objectContaining({
                url: '/users/123/posts/456',
            }),
        );
    });

    it('should handle empty path parameters', () => {
        const api = createDataLibrary('');
        api.fetch('get', '/users');

        expect(mockedAxios.create().request).toHaveBeenCalledWith(
            expect.objectContaining({
                url: '/users',
            }),
        );
    });
});
