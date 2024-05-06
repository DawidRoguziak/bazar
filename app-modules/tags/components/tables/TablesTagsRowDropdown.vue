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
import type { Tag } from "~/repositories/Tags";
import { symbolDeleteTag } from "~/app-modules/tags/symbols/TagListTable";

type PropsTablesTagRowDropdown = {
    tag: Tag;
};

defineProps<PropsTablesTagRowDropdown>();

const deleteTag = inject(symbolDeleteTag, () => {
    console.error("deleteTag function is not provided");
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
            <DropdownMenuItem @click="deleteTag(tag.guid)">
                {{ $t("delete") }}
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
