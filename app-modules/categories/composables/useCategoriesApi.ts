import type { Category } from "~/app-modules/categories/types/Category";
import type { DataTablePagination } from "~/components/generic/data/DataTablePagination";

export function useCategoriesApi() {
    async function getCategories(pagination: DataTablePagination) {
        return $fetch(`/api/categories`, {
            query: {
                page_number: pagination.pageIndex,
                page_size: pagination.pageSize,
                pages_count: pagination.pageCount,
            },
        });
    }

    async function createCategory(
        data: Omit<Category, "guid">
    ): Promise<Category> {
        return $fetch("/api/categories", {
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
            },
            body: { ...data },
        });
    }

    async function deleteCategory(guid: string): Promise<void> {
        return $fetch(`/api/categories/${guid}`, {
            method: "DELETE",
        });
    }

    async function editCategory(category: Category): Promise<Category> {
        return $fetch(`/api/categories/${category.guid}`, {
            method: "PUT",
            body: category,
        });
    }

    return {
        getCategories,
        deleteCategory,
        editCategory,
        createCategory,
    };
}
