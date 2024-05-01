<script setup lang="ts">
import { useLangStore } from "~/app-modules/language/useLangStore";
import { ConfigProvider } from "radix-vue";
import { z } from "zod";
import { setupZod } from "~/integrations/zod";

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
        <ConfigProvider :use-id="useIdFunction">
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </ConfigProvider>
    </div>
</template>
