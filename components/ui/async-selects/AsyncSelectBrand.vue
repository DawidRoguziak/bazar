<script setup lang="ts">
import type { UiSelectProps } from "~/components/ui/select/UiSelectProps";
import { type Brand, BrandsRepository } from "~/repositories/Brands";
import type { DataTableList } from "~/components/generic/data/DataTableList";

defineProps<UiSelectProps>();

const { $apiPublicFetch } = useNuxtApp();
const brandRepo = BrandsRepository($apiPublicFetch);

const { data } = useLazyAsyncData<DataTableList<Brand>>(
    "brands",
    () =>
        brandRepo.getList({
            pageCount: 1,
            pageSize: 10,
            pageIndex: 0,
        }),
    {
        default: () => ({
            items: [],
            pages_count: 0,
            page_number: 0,
            page_size: 0,
        }),
    }
);
</script>

<template>
    <UiSelect :name="name">
        <UiSelectTrigger class="w-[280px]">
            <UiSelectValue :placeholder="$t('select brand')" />
        </UiSelectTrigger>
        <UiSelectContent>
            <UiSelectItem v-for="brand in data?.items" :key="brand.guid">
                {{ brand.name }}
            </UiSelectItem>
        </UiSelectContent>
    </UiSelect>
</template>

<style scoped></style>
