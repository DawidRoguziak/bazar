<script setup lang="ts">
import { MoreHorizontal } from "lucide-vue-next";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import type { Brand } from "~/repositories/Brands";
import { symbolDeleteBrand } from "~/app-modules/brands/symbols/BrandListTable";
import ModalsBrandCategory from "~/app-modules/brands/components/modals/ModalsBrandCategory.vue";

type PropsTablesBrandRowDropdown = {
    brand: Brand;
};

defineProps<PropsTablesBrandRowDropdown>();

const isOpen = ref(false);

const deleteCategory = inject(symbolDeleteBrand, () => {
    console.error("deleteCategory function is not provided");
});

function openModal(): void {
    isOpen.value = true;
}
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost" class="w-8 h-8 p-0">
                <span class="sr-only">{{ $t("open_menu") }}</span>
                <MoreHorizontal class="w-4 h-4" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuLabel>{{ $t("actions") }}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="deleteCategory(brand.guid)">
                {{ $t("delete") }}
            </DropdownMenuItem>
            <DropdownMenuItem @click="openModal">{{
                $t("edit")
            }}</DropdownMenuItem>
        </DropdownMenuContent>
        <ModalsBrandCategory v-model:open="isOpen" :brand="brand" />
    </DropdownMenu>
</template>
