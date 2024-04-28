<script setup lang="ts">
import FormsCategory, {
    type FormCategoryData,
} from "~/app-modules/categories/components/forms/FormsCategory.vue";
import type { Ref } from "vue";

definePageMeta({
    layout: "admin-menu",
});

function onSubmit({
    data,
    setErrors,
}: {
    data: FormCategoryData;
    setErrors(fields: any): void;
}) {
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
        <FormsCategory class="max-w-[400px]" @submit="onSubmit" />
    </div>
</template>

<style scoped></style>
