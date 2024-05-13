import { toast } from "~/components/ui/toast";
import { getValueByPath } from "~/lib/utils";

export default defineNuxtPlugin({
    setup() {
        const { $i18n } = useNuxtApp();

        const apiPublicFetch = $fetch.create({
            baseURL: "/api/",
            onResponse({ response, request, options, error }) {
                if (options.method === "PUT" && response.status === 200) {
                    toast({
                        title: $i18n.t("api.success"),
                    });
                }

                if (response.status === 201) {
                    toast({
                        variant: "success",
                        title: $i18n.t("api.created"),
                    });
                }

                if (options.method === "DELETE" && response.status === 204) {
                    toast({
                        variant: "success",
                        title: $i18n.t("api.deleted"),
                    });
                }

                if (error !== undefined && response.status === 400) {
                    toast({
                        variant: "destructive",
                        title: $i18n.t("api.error"),
                        description: getValueByPath(response, "_data.detail"),
                    });
                }
            },
        });

        return {
            provide: {
                apiPublicFetch,
            },
        };
    },
});
