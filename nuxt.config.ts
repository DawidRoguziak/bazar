// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["~/assets/main.css"],
    modules: [
        "@nuxtjs/tailwindcss",
        "shadcn-nuxt",
        "@pinia/nuxt",
        "@nuxtjs/i18n",
    ],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: "Ui",
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: "./components/ui",
    },
    runtimeConfig: {
        public: {
            apiBase: "http://38.242.155.40:8080/api",
        },
    },
});
