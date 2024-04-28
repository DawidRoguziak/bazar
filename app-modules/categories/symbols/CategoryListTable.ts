import type { InjectionKey } from "vue";
import type { Category } from "~/app-modules/categories/tables/categories/columns";

export const symbolDeleteCategory = Symbol() as InjectionKey<
    (guid: string) => void
>;
export const symbolEditCategory = Symbol() as InjectionKey<
    (category: Category) => void
>;
