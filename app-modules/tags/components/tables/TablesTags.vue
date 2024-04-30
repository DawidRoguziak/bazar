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
import { useTagsApi } from "~/app-modules/tags/composable/useTagsApi";

const pagination = reactive<DataTablePagination>({
    pageCount: 1,
    pageSize: 10,
    pageIndex: 0,
});

const { deleteTag, getTags, editTag } = useTagsApi();

const { data, pending, refresh } = useLazyAsyncData<DataTableList<Tag>>(
    "tags",
    () => getTags(pagination),
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
    await deleteTag(guid);
    await refresh();
}

async function submitEditTag(tag: Tag) {
    await editTag(tag);
    await refresh();
}

function onPaginationChange(newPagination: DataTablePagination) {
    pagination.pageSize = newPagination.pageSize;
    pagination.pageCount = newPagination.pageCount;
    pagination.pageIndex = newPagination.pageIndex;
}

provide(symbolDeleteTag, submitDeleteTag);
provide(symbolEditTag, submitEditTag);
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
