<script setup lang="ts">
import type { DataTablePagination } from "~/components/generic/data/DataTablePagination";
import type { DataTableList } from "~/components/generic/data/DataTableList";
import {
    symbolDeleteCategory,
    symbolEditCategory,
} from "~/app-modules/categories/symbols/CategoryListTable";
import type { Category } from "~/app-modules/categories/types/Category";
import { categoryListColumns } from "~/app-modules/categories/types/CategoryListColumns";
import { useCategoriesApi } from "~/app-modules/categories/composables/useCategoriesApi";

const pagination = reactive<DataTablePagination>({
    pageCount: 1,
    pageSize: 10,
    pageIndex: 0,
});

const { deleteCategory, getCategories, editCategory } = useCategoriesApi();

const { data, pending, refresh } = useLazyAsyncData<DataTableList<Category>>(
    "categories",
    () => getCategories(pagination),
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

async function submitDeleteCategory(guid: string) {
    await deleteCategory(guid);
    await refresh();
}

async function submitEditCategory(category: Category) {
    await editCategory(category);
    await refresh();
}

function onPaginationChange(newPagination: DataTablePagination) {
    pagination.pageSize = newPagination.pageSize;
    pagination.pageCount = newPagination.pageCount;
    pagination.pageIndex = newPagination.pageIndex;
}

provide(symbolDeleteCategory, submitDeleteCategory);
provide(symbolEditCategory, submitEditCategory);
</script>

<template>
    <GenericDataTable
        :columns="categoryListColumns"
        :data="data"
        :pending="pending"
        @pagination-change="onPaginationChange"
    />
</template>
