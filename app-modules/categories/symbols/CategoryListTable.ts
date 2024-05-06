import type { InjectionKey } from "vue";
import type { Category } from "~/repositories/Categories";

export const symbolDeleteCategory = Symbol() as InjectionKey<
    (guid: string) => void
>;
export const symbolEditCategory = Symbol() as InjectionKey<
    (category: Category) => void
>;
