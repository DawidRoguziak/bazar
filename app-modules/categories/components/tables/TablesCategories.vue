<script setup lang="ts">
import type { DataTablePagination } from "~/components/generic/data/DataTablePagination";
import type { DataTableList } from "~/components/generic/data/DataTableList";
import {
    symbolDeleteCategory,
    symbolEditCategory,
} from "~/app-modules/categories/symbols/CategoryListTable";
import { categoryListColumns } from "~/app-modules/categories/types/CategoryListColumns";
import { type Category, CategoryRepository } from "~/repositories/Categories";

const pagination = reactive<DataTablePagination>({
    pageCount: 1,
    pageSize: 10,
    pageIndex: 0,
});

const { $apiPublicFetch } = useNuxtApp();
const categoryRepo = CategoryRepository($apiPublicFetch);

const { data, pending, refresh } = useLazyAsyncData<DataTableList<Category>>(
    "categories",
    () => categoryRepo.get(pagination),
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
    await categoryRepo.deleteCategory(guid);
    await refresh();
}

async function submitEditCategory(category: Category) {
    await categoryRepo.edit(category);
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
