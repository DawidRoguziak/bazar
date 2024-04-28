import type { ColumnDef } from "@tanstack/vue-table";
import TablesCategoryRowDropdown from "~/app-modules/categories/tables/categories/TablesCategoryRowDropdown.vue";

export interface Payment {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "amount",
        header: () => h("div", { class: "text-right" }, "Amount"),
        cell: ({ row }) => {
            const amount = Number.parseFloat(row.getValue("amount"));
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount);

            return h("div", { class: "text-right font-medium" }, formatted);
        },
    },
    {
        accessorKey: "status",
    },
    {
        accessorKey: "email",
    },
    {
        accessorKey: "id",
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original;

            return h(
                "div",
                { class: "relative" },
                h(TablesCategoryRowDropdown, {
                    payment,
                })
            );
        },
    },
];
