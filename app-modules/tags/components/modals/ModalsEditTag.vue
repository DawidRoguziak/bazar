<script setup lang="ts">
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import type { Category } from "~/app-modules/categories/types/Category";
import FormsTag from "~/app-modules/tags/components/forms/FormsTag.vue";
import type { Tag } from "~/app-modules/tags/types/Tag";

defineProps<{ tag: Tag }>();

const open = defineModel<boolean>("open", { default: false });

function onSubmit({
    data,
    setErrors,
}: {
    data: Partial<Category>;
    setErrors(fields: any): void;
}) {
    $fetch("/api/categories", {
        method: "PUT",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
        },
        body: { ...data },
    });

    open.value = false;
}
</script>

<template>
    <Dialog v-model:open="open">
        <DialogContent class="sm:max-w-[425px] p-0 max-h-[90dvh]">
            <DialogHeader class="p-6 pb-0">
                <DialogTitle>{{ $t("edit_category") }}</DialogTitle>
            </DialogHeader>

            <FormsTag @submit="onSubmit" :initial-values="tag" />
        </DialogContent>
    </Dialog>
</template>
