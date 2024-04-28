<script setup lang="ts">
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import FormsCategory from "~/app-modules/categories/components/forms/FormsCategory.vue";
import type { Category } from "~/app-modules/categories/types/Category";

defineProps<{ category: Category }>();

const open = defineModel<boolean>();

function onClose(newOpen: boolean): void {
    open.value = newOpen;
}

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
}
</script>

<template>
    <Dialog :open="open" @update:open="onClose">
        <DialogContent class="sm:max-w-[425px] p-0 max-h-[90dvh]">
            <DialogHeader class="p-6 pb-0">
                <DialogTitle>{{ $t("edit_category") }}</DialogTitle>
            </DialogHeader>

            <FormsCategory @submit="onSubmit" :initial-values="category" />
        </DialogContent>
    </Dialog>
</template>
