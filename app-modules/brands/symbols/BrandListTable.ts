import type { InjectionKey } from "vue";
import type { Brand } from "~/repositories/Brands";

export const symbolDeleteBrand = Symbol() as InjectionKey<
    (guid: string) => void
>;

export const symbolEditBrand = Symbol() as InjectionKey<
    (category: Brand) => void
>;
