<script setup lang="ts">
import { useLangStore } from "~/app-modules/language/useLangStore";
import { ConfigProvider } from "radix-vue";
import { setupZod } from "~/integrations/zod";
import Toaster from "@/components/ui/toast/Toaster.vue";

const { getLanguage } = useLangStore();

// https://www.radix-vue.com/utilities/config-provider#hydration-issue-vue-3-5
// fix hydration problem
const useIdFunction = () => useId();

const { t } = useI18n();
setupZod(t);

onMounted(() => {
    if (process.client) {
        getLanguage();
    }
});
</script>

<template>
    <div>
        <ClientOnly>
            <Toaster />
        </ClientOnly>
        <ConfigProvider :use-id="useIdFunction">
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </ConfigProvider>
    </div>
</template>
