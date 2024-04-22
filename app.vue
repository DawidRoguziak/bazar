<script setup lang="ts">
import { useLangStore } from "~/app-modules/language/useLangStore";

const { getLanguage } = useLangStore();

onMounted(() => {
    if (process.client) {
        getLanguage();
    }
});
</script>

<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
