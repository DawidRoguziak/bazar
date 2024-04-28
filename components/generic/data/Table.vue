<script setup lang="ts" generic="TData, TValue">
import { type ColumnDef } from "@tanstack/vue-table";
import { FlexRender, getCoreRowModel, useVueTable } from "@tanstack/vue-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    type DataTablePagination,
    useTablePagination,
} from "~/components/generic/data/DataTablePagination";
import { computed } from "vue";

const emit = defineEmits<{
    paginationChange: [pagination: DataTablePagination];
}>();

const props = defineProps<{
    columns: ColumnDef<TData, TValue>[];
    data?: {
        items: TData[];
        pages_count: number;
        page_number: number;
        page_size: number;
    };
}>();

const { canGoForth, canGoBack, goToPreviousPage, goToNextPage } =
    useTablePagination(emit, props);

const tableData = computed(() => {
    return props?.data?.items ?? [];
});

const table = useVueTable({
    get data() {
        return tableData.value;
    },
    get columns() {
        return props.columns;
    },
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
});
</script>

<template>
    <div>
        <div class="border rounded-md">
            <Table>
                <TableHeader>
                    <TableRow
                        v-for="headerGroup in table.getHeaderGroups()"
                        :key="headerGroup.id"
                    >
                        <TableHead
                            v-for="header in headerGroup.headers"
                            :key="header.id"
                        >
                            <FlexRender
                                v-if="!header.isPlaceholder"
                                :render="header.column.columnDef.header"
                                :props="header.getContext()"
                            />
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <template v-if="table.getRowModel().rows?.length">
                        <TableRow
                            v-for="row in table.getRowModel().rows"
                            :key="row.id"
                            :data-state="
                                row.getIsSelected() ? 'selected' : undefined
                            "
                        >
                            <TableCell
                                v-for="cell in row.getVisibleCells()"
                                :key="cell.id"
                            >
                                <FlexRender
                                    :render="cell.column.columnDef.cell"
                                    :props="cell.getContext()"
                                />
                            </TableCell>
                        </TableRow>
                    </template>
                    <template v-else>
                        <TableRow>
                            <TableCell
                                :colSpan="columns.length"
                                class="h-24 text-center"
                            >
                                No results.
                            </TableCell>
                        </TableRow>
                    </template>
                </TableBody>
            </Table>
        </div>
        <div class="flex items-center justify-end py-4 space-x-2">
            <UiButton
                variant="outline"
                size="sm"
                :disabled="!canGoBack"
                @click="goToPreviousPage"
            >
                Previous
            </UiButton>
            <UiButton
                variant="outline"
                size="sm"
                :disabled="!canGoForth"
                @click="goToNextPage"
            >
                Next
            </UiButton>
        </div>
    </div>
</template>
