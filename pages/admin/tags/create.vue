<script setup lang="ts">
import FormsTag from "~/app-modules/tags/components/forms/FormsTag.vue";
import { useTagsApi } from "~/app-modules/tags/composable/useTagsApi";
import type { Tag } from "~/app-modules/tags/types/Tag";

definePageMeta({
    layout: "admin-menu",
});

const { createTag } = useTagsApi();

function onSubmit({
    data,
    setErrors,
}: {
    data: Tag;
    setErrors(fields: any): void;
}) {
    createTag(data);
}
</script>

<template>
    <div>
        <FormsTag class="max-w-[400px]" @submit="onSubmit" />
    </div>
</template>

<style scoped></style>
