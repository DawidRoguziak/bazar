<script setup lang="ts">
import FormsCreateCategory from "~/app-modules/categories/components/forms/FormsCreateCategory.vue";

definePageMeta({
    layout: "admin-menu",
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
        <FormsCreateCategory class="max-w-[400px]" @submit="onSubmit" />
    </div>
</template>

<style scoped></style>
