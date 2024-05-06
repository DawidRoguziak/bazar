import type { $Fetch, NitroFetchRequest } from "nitropack";
import type { DataTablePagination } from "~/components/generic/data/DataTablePagination";
import type { DataTableList } from "~/components/generic/data/DataTableList";
import type { Category } from "~/repositories/Categories";

export type Tag = {
    guid: string;
    pl: string;
    en: string;
};

export const TagRepository = (fetch: $Fetch<Tag, NitroFetchRequest>) => ({
    async getList(
        pagination: DataTablePagination
    ): Promise<DataTableList<Tag>> {
        return fetch<DataTableList<Tag>>("/api/tags", {
            method: "GET",
            query: {
                page_number: pagination.pageIndex,
                page_size: pagination.pageSize,
                pages_count: pagination.pageCount,
            },
        });
    },

    async create(data: Omit<Tag, "guid">): Promise<Category> {
        return fetch("/api/tags", {
            method: "POST",
            body: { ...data },
        });
    },

    async deleteCategory(guid: string): Promise<void> {
        return fetch(`/api/tags/${guid}`, {
            method: "DELETE",
        });
    },

    async edit(tag: Tag): Promise<Category> {
        return fetch(`/api/tags/${tag.guid}`, {
            method: "PUT",
            body: tag,
        });
    },
});
