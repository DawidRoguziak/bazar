<script setup lang="ts">
import type { DataTablePagination } from "~/components/generic/data/DataTablePagination";
import { type Brand, BrandsRepository } from "~/repositories/Brands";
import type { DataTableList } from "~/components/generic/data/DataTableList";
import { brandListColumns } from "~/app-modules/brands/types/BrandListColumns";
import {
    symbolDeleteBrand,
    symbolEditBrand,
} from "~/app-modules/brands/symbols/BrandListTable";

const pagination = reactive<DataTablePagination>({
    pageSize: 10,
    pageIndex: 0,
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

function onPaginationChange(newPagination: DataTablePagination) {
    pagination.pageSize = newPagination.pageSize;
    pagination.pageCount = newPagination.pageCount;
    pagination.pageIndex = newPagination.pageIndex;
}

async function submitDeleteBrand(guid: string) {
    await brandRepo.deleteBrand(guid);
    refresh();
}
async function submitEditBrand(brand: Brand) {
    await brandRepo.edit(brand);
    refresh();
}

provide(symbolDeleteBrand, submitDeleteBrand);
provide(symbolEditBrand, submitEditBrand);
</script>

<template>
    <GenericDataTable
        :columns="brandListColumns"
        :data="data"
        :pending="pending"
        @pagination-change="onPaginationChange"
    >
    </GenericDataTable>
</template>

<style scoped></style>
