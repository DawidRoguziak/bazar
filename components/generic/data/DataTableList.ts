import type { ColumnDef } from "@tanstack/vue-table";

export type DataTableList<T> = {
    items: T[];
    pages_count: number;
    page_number: number;
    page_size: number;
};

export type PropsGenericDataTable<TGenTableData, TGenTableValue> = {
    columns: ColumnDef<TGenTableData, TGenTableValue>[];
    pending?: boolean;
    data?: DataTableList<TGenTableData>;
};
