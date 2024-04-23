<script setup lang="ts">
definePageMeta({
    layout: "content-center",
});

const runtimeConfig = useRuntimeConfig();

const { data, pending, error, refresh } = await useFetch(
    `${runtimeConfig.public.apiBase}/api/categories`
);
</script>

<template>
    <div>
        {{ $t("welcome") }}
        <div class="">
            <UiButton size="sm" @click="refresh"> Small Fill </UiButton>
            <UiButton @click="refresh"> Medium Fill </UiButton>
            <UiButton size="lg" @click="refresh"> Large Fill </UiButton>
            <UiButton size="icon" @click="refresh">
                <span class="material-symbols-outlined"> settings </span>
            </UiButton>
        </div>
        <div class="">
            <UiButton variant="outline" size="sm" @click="refresh">
                Small Fill
            </UiButton>
            <UiButton variant="outline" @click="refresh">
                Medium Fill
            </UiButton>
            <UiButton variant="outline" size="lg" @click="refresh">
                Large Fill
            </UiButton>
            <UiButton variant="outline" size="icon" @click="refresh">
                <span class="material-symbols-outlined"> settings </span>
            </UiButton>
        </div>
        <div class="">
            <UiButton variant="ghost" size="sm" @click="refresh">
                Small Fill
            </UiButton>
            <UiButton variant="ghost" @click="refresh"> Medium Fill </UiButton>
            <UiButton variant="ghost" size="lg" @click="refresh">
                Large Fill
            </UiButton>
            <UiButton variant="ghost" size="icon" @click="refresh">
                <span class="material-symbols-outlined"> settings </span>
            </UiButton>
        </div>
    </div>
</template>

<style scoped></style>
