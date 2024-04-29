<script setup lang="ts">
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import FormsCategory from "~/app-modules/categories/components/forms/FormsCategory.vue";
import type { Category } from "~/app-modules/categories/types/Category";
import { symbolEditCategory } from "~/app-modules/categories/symbols/CategoryListTable";

defineProps<{ category: Category }>();

const open = defineModel<boolean>("open", { default: false });

const editCategory = inject(symbolEditCategory, () => {
    console.error("edit category not provided");
});

function onSubmit({
    data,
    setErrors,
}: {
    data: Partial<Category>;
    setErrors(fields: any): void;
}) {
    editCategory(data);
    open.value = false;
}
</script>

<template>
    <Dialog v-model:open="open">
        <DialogContent class="sm:max-w-[425px] p-0 max-h-[90dvh]">
            <DialogHeader class="p-6 pb-0">
                <DialogTitle>{{ $t("edit_category") }}</DialogTitle>
            </DialogHeader>

            <FormsCategory @submit="onSubmit" :initial-values="category" />
        </DialogContent>
    </Dialog>
</template>
