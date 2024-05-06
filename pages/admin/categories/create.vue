<script setup lang="ts">
import FormsCategory from "~/app-modules/categories/components/forms/FormsCategory.vue";
import { type Category, CategoriesRepository } from "~/repositories/Categories";

definePageMeta({
    layout: "admin-menu",
});

const { $apiPublicFetch } = useNuxtApp();
const categoryRepo = CategoriesRepository($apiPublicFetch);

function onSubmit({
    data,
    setErrors,
}: {
    data: Category;
    setErrors(fields: any): void;
}) {
    categoryRepo.create(data);
}
</script>

<template>
    <div>
        <FormsCategory class="max-w-[400px]" @submit="onSubmit" />
    </div>
</template>

<style scoped></style>
