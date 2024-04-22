<script setup lang="ts">
definePageMeta({
    layout: "content-center",
});

const runtimeConfig = useRuntimeConfig();

const { data, pending, error, refresh } = await useFetch(
    `${runtimeConfig.public.apiBase}/api/categories`,
    {
        onResponse({ request, response, options }) {
            console.log("response", response._data);
        },
    }
);
</script>

<template>
    <div>
        {{ $t("welcome") }}
        <div>
            <UiButton @click="refresh"> Refresh </UiButton>
        </div>
    </div>
</template>

<style scoped></style>
