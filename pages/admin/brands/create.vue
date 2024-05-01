<script setup lang="ts">
import FormsBrand from "~/app-modules/brands/components/forms/FormsBrand.vue";
import type { Brand } from "~/app-modules/brands/types/Brand";
import { useBrandsApi } from "~/app-modules/brands/composables/useBrandsApi";

definePageMeta({
    layout: "admin-menu",
});

const { submitBrand } = useBrandsApi();

function onSubmit({
    data,
    setErrors,
}: {
    data: Partial<Brand>;
    setErrors(fields: any): void;
}) {
    console.log(data);
    submitBrand(data);
}
</script>

<template>
    <FormsBrand class="max-w-[400px]" @submit="onSubmit" />
</template>

<style scoped></style>
