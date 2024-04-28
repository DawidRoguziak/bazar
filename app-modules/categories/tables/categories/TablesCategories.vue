<script setup lang="ts">
import {
    type Category,
    columns,
} from "~/app-modules/categories/tables/categories/columns";
import type { DataTablePagination } from "~/components/generic/data/DataTablePagination";
import type { DataTableList } from "~/components/generic/data/DataTableList";

const pagination = reactive<DataTablePagination>({
    pageCount: 1,
    pageSize: 10,
    pageIndex: 0,
});

const { data, pending } = await useLazyAsyncData<DataTableList<Category>>(
    "/api/categories",
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

const onPaginationChange = (newPagination: DataTablePagination) => {
    pagination.pageSize = newPagination.pageSize;
    pagination.pageCount = newPagination.pageCount;
    pagination.pageIndex = newPagination.pageIndex;
};
</script>

<template>
    <GenericDataTable
        v-if="data"
        :columns="columns"
        :data="data"
        @pagination-change="onPaginationChange"
    />
</template>
