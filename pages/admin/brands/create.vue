<script setup lang="ts">
import FormsBrand from "~/app-modules/brands/components/forms/FormsBrand.vue";
import { type Brand, BrandsRepository } from "~/repositories/Brands";

definePageMeta({
    layout: "admin-menu",
});

const { $apiPublicFetch } = useNuxtApp();
const brandsRepository = BrandsRepository($apiPublicFetch);

function onSubmit({
    data,
    setErrors,
}: {
    data: Partial<Brand>;
    setErrors(fields: any): void;
}) {
    brandsRepository.create(data);
}
</script>

<template>
    <FormsBrand class="max-w-[400px]" @submit="onSubmit" />
</template>

<style scoped></style>
