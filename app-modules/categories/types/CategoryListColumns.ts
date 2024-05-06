import type { ColumnDef } from "@tanstack/vue-table";
import TablesCategoryRowDropdown from "~/app-modules/categories/components/tables/TablesCategoryRowDropdown.vue";
import type { Category } from "~/repositories/Categories";

export const categoryListColumns: ColumnDef<Category>[] = [
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
