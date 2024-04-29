<script setup lang="ts">
import type { DataTablePagination } from "~/components/generic/data/DataTablePagination";
import type { DataTableList } from "~/components/generic/data/DataTableList";
import {
    symbolDeleteCategory,
    symbolEditCategory,
} from "~/app-modules/categories/symbols/CategoryListTable";
import type { Category } from "~/app-modules/categories/types/Category";
import { categoryListColumns } from "~/app-modules/categories/types/CategoryListColumns";

const pagination = reactive<DataTablePagination>({
    pageCount: 1,
    pageSize: 10,
    pageIndex: 0,
});

const { data, pending, refresh } = useLazyAsyncData<DataTableList<Category>>(
    "categories",
    () =>
        ($fetch as any)(`/api/categories`, {
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

async function deleteCategory(guid: string) {
    await $fetch(`/api/categories/${guid}`, {
        method: "DELETE",
    });
    await refresh();
}

function editCategory(category: Category) {
    return $fetch(`/api/categories`, {
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

provide(symbolDeleteCategory, deleteCategory);
provide(symbolEditCategory, editCategory);
</script>

<template>
    <GenericDataTable
        :columns="categoryListColumns"
        :data="data"
        :pending="pending"
        @pagination-change="onPaginationChange"
    />
</template>
