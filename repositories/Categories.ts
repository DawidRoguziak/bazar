import type { $Fetch, NitroFetchRequest } from "nitropack";
import type { DataTablePagination } from "~/components/generic/data/DataTablePagination";
import type { DataTableList } from "~/components/generic/data/DataTableList";

export type Category = {
    guid: string;
    name_pl: string;
    name_en: string;
};

export const CategoriesRepository = (
    fetch: $Fetch<Category, NitroFetchRequest>
) => ({
    async getList(
        pagination: DataTablePagination
    ): Promise<DataTableList<Category>> {
        return fetch<DataTableList<Category>>("/api/categories", {
            method: "GET",
            query: {
                page_number: pagination.pageIndex,
                page_size: pagination.pageSize,
                pages_count: pagination.pageCount,
            },
        });
    },

    async create(data: Omit<Category, "guid">): Promise<Category> {
        return fetch("/api/categories", {
            method: "POST",
            body: { ...data },
        });
    },

    async deleteCategory(guid: string): Promise<void> {
        return fetch(`/api/categories/${guid}`, {
            method: "DELETE",
        });
    },

    async edit(category: Category): Promise<Category> {
        return fetch(`/api/categories/${category.guid}`, {
            method: "PUT",
            body: category,
        });
    },
});
