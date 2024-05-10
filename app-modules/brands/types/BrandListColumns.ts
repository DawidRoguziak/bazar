import type { ColumnDef } from "@tanstack/vue-table";
import type { Brand } from "~/repositories/Brands";
import TablesBrandRowDropdown from "~/app-modules/brands/components/tables/TablesBrandRowDropdown.vue";

export const brandListColumns: ColumnDef<Brand>[] = [
    {
        id: "logo_url",
        enableHiding: false,
        cell: ({ row }) => {
            return h("img", {
                src: row.original.logo_url,
            });
        },
    },
    {
        accessorKey: "name",
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            return h(
                "div",
                { class: "relative" },
                h(TablesBrandRowDropdown, {
                    brand: row.original,
                })
            );
        },
    },
];
