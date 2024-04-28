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
import type { Category } from "./columns";
import { symbolDeleteCategory } from "~/app-modules/categories/symbols/CategoryListTable";

type PropsTablesCategoryRowDropdown = {
    category: Category;
};

defineProps<PropsTablesCategoryRowDropdown>();

const deleteCategory = inject(symbolDeleteCategory, () => {
    console.error("deleteCategory function is not provided");
});
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
            <DropdownMenuItem>{{ $t("edit") }}</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
