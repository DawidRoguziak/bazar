export default defineNuxtPlugin({
    setup() {
        const apiPublicFetch = $fetch.create({
            baseURL: "/api/",
        });

        return {
            provide: {
                apiPublicFetch,
            },
        };
    },
});
