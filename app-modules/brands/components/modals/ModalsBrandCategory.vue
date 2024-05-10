<script setup lang="ts">
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import type { Brand } from "~/repositories/Brands";
import { symbolEditBrand } from "~/app-modules/brands/symbols/BrandListTable";
import FormsBrand from "~/app-modules/brands/components/forms/FormsBrand.vue";

defineProps<{ brand: Brand }>();

const open = defineModel<boolean>("open", { default: false });

const editBrand = inject(symbolEditBrand, () => {
    console.error("edit category not provided");
});

function onSubmit({
    data,
    setErrors,
}: {
    data: Brand;
    setErrors(fields: any): void;
}) {
    editBrand(data);
    open.value = false;
}
</script>

<template>
    <Dialog v-model:open="open">
        <DialogContent class="sm:max-w-[425px] p-0 max-h-[90dvh]">
            <DialogHeader class="p-6 pb-0">
                <DialogTitle>{{ $t("edit_category") }}</DialogTitle>
            </DialogHeader>

            <FormsBrand @submit="onSubmit" :initial-values="brand" />
        </DialogContent>
    </Dialog>
</template>
