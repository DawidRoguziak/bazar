import type { ColumnDef } from "@tanstack/vue-table";
import TablesCategoryRowDropdown from "~/app-modules/categories/tables/categories/TablesCategoryRowDropdown.vue";

export type Category = {
    guid: string;
    name_pl: string;
    name_en: string;
};

export const columns: ColumnDef<Category>[] = [
    {
        accessorKey: "guid",
    },
    {
        accessorKey: "name_pl",
    },
    {
        accessorKey: "name_en",
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            return h(
                "div",
                { class: "relative" },
                h(TablesCategoryRowDropdown, {
                    category: row.original,
                })
            );
        },
    },
];
