<script setup lang="ts">
import type { Category } from "~/app-modules/categories/types/Category";
import FormsCategory from "~/app-modules/categories/components/forms/FormsCategory.vue";
import { useCategoriesApi } from "~/app-modules/categories/composables/useCategoriesApi";

definePageMeta({
    layout: "admin-menu",
});

const { createCategory } = useCategoriesApi();

function onSubmit({
    data,
    setErrors,
}: {
    data: Category;
    setErrors(fields: any): void;
}) {
    createCategory(data);
}
</script>

<template>
    <div>
        <FormsCategory class="max-w-[400px]" @submit="onSubmit" />
    </div>
</template>

<style scoped></style>
