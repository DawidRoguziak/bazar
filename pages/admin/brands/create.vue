<script setup lang="ts">
import FormsBrand from "~/app-modules/brands/components/forms/FormsBrand.vue";
import type { Brand } from "~/app-modules/brands/types/Brand";

definePageMeta({
    layout: "admin-menu",
});

function onSubmit({
    data,
    setErrors,
}: {
    data: Partial<Brand>;
    setErrors(fields: any): void;
}) {}
</script>

<template>
    <FormsBrand class="max-w-[400px]" @submit="onSubmit" />
</template>

<style scoped></style>
