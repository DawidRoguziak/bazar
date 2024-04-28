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
import { useCategories } from "~/app-modules/categories/composables/useCategories";

type PropsTablesCategoryRowDropdown = {
    category: Category;
};

defineProps<PropsTablesCategoryRowDropdown>();

const { deleteCategory, editCategory } = useCategories();
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost" class="w-8 h-8 p-0">
                <span class="sr-only">Open menu</span>
                <MoreHorizontal class="w-4 h-4" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="deleteCategory(category.guid)">
                Delete
            </DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
