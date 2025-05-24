import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { stringify } from 'qs';

const applyUrlPathParams = (url: string, params: Record<string, string | number> = {}): string => {
    return Object.keys(params).reduce(
        (updatedUrl, paramKey) =>
            updatedUrl.replace(`:${paramKey}`, encodeURIComponent(params[paramKey])),
        url,
    );
};

const defaultParamsSerializer = (params: Record<string, unknown>): string => {
    return stringify(params, { arrayFormat: 'repeat', encode: true });
};

const createClient = (
    baseURL: string,
    defaultHeaders: Record<string, string> = {},
): AxiosInstance => {
    return axios.create({
        baseURL,
        headers: defaultHeaders,
    });
};

const fetchData = async <T>(
    client: AxiosInstance,
    method: 'get' | 'post' | 'put' | 'delete' | 'patch',
    url: string,
    options: AxiosRequestConfig & { urlPathParams?: Record<string, string | number> } = {},
): Promise<T> => {
    const { urlPathParams, params, ...rest } = options;

    const resolvedUrl = applyUrlPathParams(url, urlPathParams || {});
    const config: AxiosRequestConfig = {
        url: resolvedUrl,
        method,
        params,
        paramsSerializer: { serialize: defaultParamsSerializer },
        ...rest,
    };

    const response = await client.request<T>(config);
    return response.data;
};

export const createDataLibrary = (baseURL: string, defaultHeaders: Record<string, string> = {}) => {
    const client = createClient(baseURL, defaultHeaders);

    return {
        fetch: <T>(
            method: 'get' | 'post' | 'put' | 'delete' | 'patch',
            url: string,
            options: AxiosRequestConfig & { urlPathParams?: Record<string, string | number> } = {},
        ): Promise<T> => fetchData<T>(client, method, url, options),
    };
};

export default createDataLibrary;
