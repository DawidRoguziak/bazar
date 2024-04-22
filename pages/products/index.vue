<script setup lang="ts">
definePageMeta({
    layout: "content-center",
});

const { data, pending, error, refresh } = await useFetch(
    "http://38.242.155.40:8000/api/categories",
    {
        onResponse({ request, response, options }) {
            console.log("response", response._data);
        },
    }
);
</script>

<template>
    <div>
        {{ data }}

        <div>
            <UiButton @click="refresh"> Refresh </UiButton>
        </div>
    </div>
</template>

<style scoped></style>
