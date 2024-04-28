import type { Category } from "~/app-modules/categories/tables/categories/columns";

export function useCategories() {
    const apiPath = "/api/categories";

    function deleteCategory(guid: string) {
        return $fetch(`${apiPath}/${guid}`, {
            method: "DELETE",
        });
    }

    function editCategory(category: Category) {
        return $fetch(`${apiPath}`, {
            method: "PUT",
            body: category,
        });
    }

    return {
        apiPath,
        deleteCategory,
        editCategory,
    };
}
