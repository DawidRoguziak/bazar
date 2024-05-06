<script setup lang="ts">
import { tagListColumns } from "~/app-modules/tags/types/TagListColumns";
import type { DataTablePagination } from "~/components/generic/data/DataTablePagination";
import type { DataTableList } from "~/components/generic/data/DataTableList";

import { symbolDeleteTag } from "~/app-modules/tags/symbols/TagListTable";
import { type Tag, TagsRepository } from "~/repositories/Tags";

const pagination = reactive<DataTablePagination>({
    pageCount: 1,
    pageSize: 10,
    pageIndex: 0,
});

const { $apiPublicFetch } = useNuxtApp();
const tagRepository = TagsRepository($apiPublicFetch);

const { data, pending, refresh } = useLazyAsyncData<DataTableList<Tag>>(
    "tags",
    () => tagRepository.getList(pagination),
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

async function submitDeleteTag(guid: string) {
    await tagRepository.deleteTag(guid);
    await refresh();
}

function onPaginationChange(newPagination: DataTablePagination) {
    pagination.pageSize = newPagination.pageSize;
    pagination.pageCount = newPagination.pageCount;
    pagination.pageIndex = newPagination.pageIndex;
}

provide(symbolDeleteTag, submitDeleteTag);
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
