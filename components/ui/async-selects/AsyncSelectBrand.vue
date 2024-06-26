<script setup lang="ts">
import type { UiSelectProps } from "~/components/ui/select/UiSelectProps";
import { type Brand, BrandsRepository } from "~/repositories/Brands";
import type { DataTableList } from "~/components/generic/data/DataTableList";
import { type Selectable } from "~/types/Selectable";

defineProps<UiSelectProps>();

const { $apiPublicFetch } = useNuxtApp();
const brandRepo = BrandsRepository($apiPublicFetch);

const open = ref(false);
const search = ref("");
const value = ref<Brand | undefined>();

const { data } = useLazyAsyncData<DataTableList<Selectable<Brand>>>(
    "brands",
    () =>
        brandRepo.getList(
            {
                pageCount: 1,
                pageSize: 10,
                pageIndex: 0,
            },
            search.value
        ),
    {
        default: () => ({
            items: [],
            pages_count: 0,
            page_number: 0,
            page_size: 0,
        }),
        transform: (
            data: DataTableList<Brand>
        ): DataTableList<Selectable<Brand>> => {
            return {
                ...data,
                items: data.items.map((item) => ({
                    ...item,
                    selected: false,
                })),
            };
        },
        watch: [search],
    }
);
</script>

<template>
    <div>
        <UiPopover v-model:open="open">
            <UiPopoverTrigger as-child>
                <UiButton
                    variant="outline"
                    role="combobox"
                    :aria-expanded="open"
                    class="w-[200px] justify-between"
                >
                    <template v-if="value">
                        {{ value.name }}
                    </template>
                    <template v-else> Select brand... </template>

                    <span class="material-symbols-outlined">
                        keyboard_arrow_down
                    </span>
                </UiButton>
            </UiPopoverTrigger>
            <UiPopoverContent class="w-[200px] p-0">
                <UiCommand v-model="value">
                    <UiCommandInput placeholder="Search framework..." />
                    <UiCommandEmpty>No framework found.</UiCommandEmpty>
                    <UiCommandList>
                        <UiCommandGroup>
                            <UiCommandItem
                                v-for="brand in data.items"
                                :key="brand.guid"
                                :value="brand.name"
                                @select="open = false"
                            >
                                <span
                                    class="material-symbols-outlined mr-2 h-4 w-4"
                                    :class="
                                        brand.selected
                                            ? 'opacity-100'
                                            : 'opacity-0'
                                    "
                                >
                                    check
                                </span>
                                {{ brand.name }}
                            </UiCommandItem>
                        </UiCommandGroup>
                    </UiCommandList>
                </UiCommand>
            </UiPopoverContent>
        </UiPopover>
    </div>
</template>

<style scoped></style>
