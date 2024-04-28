<script setup lang="ts">
import { columns } from "~/app-modules/categories/tables/categories/columns";
import type { DataTablePagination } from "~/components/generic/data/DataTablePagination";

const { data } = await useFetch("/api/categories", {
    method: "GET",
    server: false,
});

const onPaginationChange = (pagination: DataTablePagination) => {
    console.log(pagination);
};
</script>

<template>
    <div class="container py-10 mx-auto">
        <div>{{ data }}</div>
        <GenericDataTable
            v-if="data"
            :columns="columns"
            :data="data.items"
            :page-count="data.pages_count"
            :page-index="data.page_number"
            :page-size="data.page_size"
            @pagination-channged="onPaginationChange"
        />
    </div>
</template>
