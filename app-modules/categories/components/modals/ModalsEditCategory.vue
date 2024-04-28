<script setup lang="ts">
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import type { Category } from "~/app-modules/categories/tables/categories/columns";
import FormsCategory, {
    type FormCategoryData,
} from "~/app-modules/categories/components/forms/FormsCategory.vue";

defineProps<{ category: Category }>();

const open = defineModel<boolean>();

function onClose(newOpen: boolean): void {
    open.value = newOpen;
}

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
    <Dialog :open="open" @update:open="onClose">
        <DialogContent class="sm:max-w-[425px] p-0 max-h-[90dvh]">
            <DialogHeader class="p-6 pb-0">
                <DialogTitle>{{ $t("edit_category") }}</DialogTitle>
            </DialogHeader>

            <FormsCategory :initial-values="category" />
        </DialogContent>
    </Dialog>
</template>
