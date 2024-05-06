<script setup lang="ts">
import FormsTag from "~/app-modules/tags/components/forms/FormsTag.vue";
import { type Tag, TagRepository } from "~/repositories/Tags";

definePageMeta({
    layout: "admin-menu",
});

const { $apiPublicFetch } = useNuxtApp();
const tagRepository = TagRepository($apiPublicFetch);

function onSubmit({
    data,
    setErrors,
}: {
    data: Tag;
    setErrors(fields: any): void;
}) {
    tagRepository.create(data);
}
</script>

<template>
    <div>
        <FormsTag class="max-w-[400px]" @submit="onSubmit" />
    </div>
</template>

<style scoped></style>
