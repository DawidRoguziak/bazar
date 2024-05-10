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
import { symbolDeleteCategory } from "~/app-modules/categories/symbols/CategoryListTable";
import ModalsEditCategory from "~/app-modules/categories/components/modals/ModalsEditCategory.vue";
import type { Category } from "~/repositories/Categories";

type PropsTablesCategoryRowDropdown = {
    category: Category;
};

defineProps<PropsTablesCategoryRowDropdown>();

const isOpen = ref(false);

const deleteCategory = inject(symbolDeleteCategory, () => {
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
            <DropdownMenuItem @click="deleteCategory(category.guid)">
                {{ $t("delete") }}
            </DropdownMenuItem>
            <DropdownMenuItem @click="openModal">{{
                $t("edit")
            }}</DropdownMenuItem>
        </DropdownMenuContent>
        <ModalsEditCategory v-model:open="isOpen" :category="category" />
    </DropdownMenu>
</template>
