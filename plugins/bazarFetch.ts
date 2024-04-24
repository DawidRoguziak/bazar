export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();

    const $bazarFetch = $fetch.create({
        baseURL: config.public.apiBase,
        onRequest({ request, options, error }) {
            // add cookies
        },
        onResponse({ response }) {
            // response._data = new myBusinessResponse(response._data)
        },
        onResponseError({ response }) {
            if (response.status === 401) {
                return navigateTo("/");
            }
        },
    });

    return {
        provide: {
            customFetch: $bazarFetch,
        },
    };
});
