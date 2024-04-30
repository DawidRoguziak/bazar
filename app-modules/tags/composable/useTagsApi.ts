import type { DataTablePagination } from "~/components/generic/data/DataTablePagination";
import type { Tag } from "~/app-modules/tags/types/Tag";
import type { DataTableList } from "~/components/generic/data/DataTableList";

export function useTagsApi() {
    async function getTags(pagination: DataTablePagination) {
        return $fetch(`/api/tags`, {
            query: {
                page_number: pagination.pageIndex,
                page_size: pagination.pageSize,
                pages_count: pagination.pageCount,
            },
        });
    }

    async function createTag(data: Omit<Tag, "guid">): Promise<Tag> {
        return $fetch("/api/tags", {
            method: "POST",
            body: { ...data },
        });
    }

    async function deleteTag(guid: string): Promise<void> {
        return $fetch(`/api/tags/${guid}`, {
            method: "DELETE",
        });
    }

    async function editTag(tag: Tag): Promise<Tag> {
        return $fetch(`/api/tags/${tag}`, {
            method: "PUT",
            body: tag,
        });
    }

    return {
        getTags,
        createTag,
        editTag,
        deleteTag,
    };
}
