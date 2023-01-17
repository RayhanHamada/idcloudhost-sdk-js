import ky from 'ky';
import { baseUrl } from 'lib/utils/constants';

export const kyFetch = ky.extend({
    prefixUrl: baseUrl.href,
});

export const fetcher = {
    get: async (apiKey: string, endpoint: string) =>
        kyFetch.get(endpoint, {
            headers: {
                apiKey,
            },
        }),
    delete: async (apiKey: string, endpoint: string) =>
        kyFetch.delete(endpoint, {
            headers: {
                apiKey,
            },
        }),
    post: async (
        apiKey: string,
        endpoint: string,
        payload: Record<string, unknown>
    ) =>
        kyFetch.post(endpoint, {
            headers: {
                apiKey,
            },
            json: payload,
        }),
    patch: async (
        apiKey: string,
        endpoint: string,
        payload: Record<string, unknown>
    ) =>
        kyFetch.patch(endpoint, {
            headers: {
                apiKey,
            },
            json: payload,
        }),
};
