<script setup lang="ts">
import type { DataTablePagination } from "~/components/generic/data/DataTablePagination";
import { type Brand, BrandsRepository } from "~/repositories/Brands";
import type { DataTableList } from "~/components/generic/data/DataTableList";

const pagination = reactive<DataTablePagination>({
    pageSize: 1,
    pageIndex: 10,
    pageCount: 0,
});

const { $apiPublicFetch } = useNuxtApp();
const brandRepo = BrandsRepository($apiPublicFetch);

const { data, pending, refresh } = useLazyAsyncData<DataTableList<Brand>>(
    "brand",
    () => brandRepo.getList(pagination),
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
</script>

<template>
    <GenericDataTable :columns=""> </GenericDataTable>
</template>

<style scoped></style>
