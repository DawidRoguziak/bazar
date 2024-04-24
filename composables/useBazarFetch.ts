import type { UseFetchOptions } from "nuxt/app";

export function useBazarFetch<T>(
    url: string | (() => string),
    options: UseFetchOptions<T> = {}
) {
    const merged: UseFetchOptions<T> = {
        headers: { "Content-Type": "application/json" },
        ...options,
    };

    return useFetch(url, {
        ...merged,
        $fetch: useNuxtApp().$bazarFetch,
    });
}
