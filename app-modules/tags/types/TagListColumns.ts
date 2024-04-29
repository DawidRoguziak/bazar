import type { ColumnDef } from "@tanstack/vue-table";
import type { Tag } from "~/app-modules/tags/types/Tag";
import TablesTagsRowDropdown from "~/app-modules/tags/components/tables/TablesTagsRowDropdown.vue";

export const tagListColumns: ColumnDef<Tag>[] = [
    {
        accessorKey: "guid",
    },
    {
        accessorKey: "pl",
    },
    {
        accessorKey: "en",
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            return h(
                "div",
                { class: "relative" },
                h(TablesTagsRowDropdown, {
                    tag: row.original,
                })
            );
        },
    },
];
