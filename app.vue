<script setup lang="ts">
import { useLangStore } from "~/app-modules/language/useLangStore";
import { ConfigProvider } from "radix-vue";

const { getLanguage } = useLangStore();

// https://www.radix-vue.com/utilities/config-provider#hydration-issue-vue-3-5
// fix hydration problem
const useIdFunction = () => useId();

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
