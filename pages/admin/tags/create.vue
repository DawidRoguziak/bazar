<script setup lang="ts">
import type { Category } from "~/app-modules/categories/types/Category";
import FormsCategory from "~/app-modules/categories/components/forms/FormsCategory.vue";
import FormsTag from "~/app-modules/tags/components/forms/FormsTag.vue";

definePageMeta({
    layout: "admin-menu",
});

function onSubmit({
    data,
    setErrors,
}: {
    data: Category;
    setErrors(fields: any): void;
}) {
    $fetch("/api/tags", {
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
        <FormsTag class="max-w-[400px]" @submit="onSubmit" />
    </div>
</template>

<style scoped></style>
