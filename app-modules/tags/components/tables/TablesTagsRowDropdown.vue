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
import type { Tag } from "~/app-modules/tags/types/Tag";
import ModalsEditTag from "~/app-modules/tags/components/modals/ModalsEditTag.vue";

type PropsTablesTagRowDropdown = {
    tag: Tag;
};

defineProps<PropsTablesTagRowDropdown>();

const isOpen = ref(false);

const deleteTag = inject(symbolDeleteCategory, () => {
    console.error("deleteTag function is not provided");
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
            <DropdownMenuItem @click="deleteTag(tag.guid)">
                {{ $t("delete") }}
            </DropdownMenuItem>
            <DropdownMenuItem @click="openModal">{{
                $t("edit")
            }}</DropdownMenuItem>
        </DropdownMenuContent>
        <ModalsEditTag ref="modalRef" :open="isOpen" :tag="tag" />
    </DropdownMenu>
</template>
