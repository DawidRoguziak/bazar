<script setup lang="ts">
import FormsCreateCategory from "~/app-modules/categories/components/forms/FormsCreateCategory.vue";

definePageMeta({
    layout: "admin-menu",
});

const { data } = await useFetch("/api/categories", {
    method: "GET",
});

function onSubmit({ data }) {
    $fetch("/api/categories", {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
        },
        body: { ...data },
    });
}
</script>

<template>
    <div>
        data:
        <div>
            {{ data }}
        </div>
        <FormsCreateCategory class="max-w-[400px]" @submit="onSubmit" />
    </div>
</template>

<style scoped></style>
