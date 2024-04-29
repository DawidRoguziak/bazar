<script setup lang="ts">
import { tagListColumns } from "~/app-modules/tags/types/TagListColumns";
import type { DataTablePagination } from "~/components/generic/data/DataTablePagination";
import type { DataTableList } from "~/components/generic/data/DataTableList";
import type { Category } from "~/app-modules/categories/types/Category";
import type { Tag } from "~/app-modules/tags/types/Tag";

import {
    symbolDeleteTag,
    symbolEditTag,
} from "~/app-modules/tags/symbols/TagListTable";

const pagination = reactive<DataTablePagination>({
    pageCount: 1,
    pageSize: 10,
    pageIndex: 0,
});

const { data, pending, refresh } = useLazyAsyncData<DataTableList<Tag>>(
    "tags",
    () =>
        ($fetch as any)(`/api/tags`, {
            query: {
                page_number: pagination.pageIndex,
                page_size: pagination.pageSize,
                pages_count: pagination.pageCount,
            },
        }),
    {
        default: () => ({
            items: [],
            pages_count: 0,
            page_number: 0,
            page_size: 0,
        }),
        watch: [pagination],
    }
);

async function deleteTag(guid: string) {
    await $fetch(`/api/tags/${guid}`, {
        method: "DELETE",
    });
    await refresh();
}

async function editTag(category: Tag) {
    return $fetch(`/api/tags`, {
        method: "PUT",
        body: category,
    });
    await refresh();
}

function onPaginationChange(newPagination: DataTablePagination) {
    pagination.pageSize = newPagination.pageSize;
    pagination.pageCount = newPagination.pageCount;
    pagination.pageIndex = newPagination.pageIndex;
}

provide(symbolDeleteTag, deleteTag);
provide(symbolEditTag, editTag);
</script>

<template>
    <GenericDataTable
        :columns="tagListColumns"
        :data="data"
        :pending="pending"
        @pagination-change="onPaginationChange"
    >
    </GenericDataTable>
</template>
