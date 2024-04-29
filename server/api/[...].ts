import { joinURL } from "ufo";

export default defineEventHandler(async (event) => {
    const apiBasePath = useRuntimeConfig().public.apiBase;

    const path = event.path.replace(/^\/api\//, "");

    const target = joinURL(apiBasePath, path);

    return proxyRequest(event, target);
});
