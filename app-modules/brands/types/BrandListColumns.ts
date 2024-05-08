import type { ColumnDef } from "@tanstack/vue-table";
import TablesCategoryRowDropdown from "~/app-modules/categories/components/tables/TablesCategoryRowDropdown.vue";
import type { Brand } from "~/repositories/Brands";

export const brandListColumns: ColumnDef<Brand>[] = [
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
