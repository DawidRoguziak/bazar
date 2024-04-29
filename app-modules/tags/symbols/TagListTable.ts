import type { InjectionKey } from "vue";
import type { Tag } from "~/app-modules/tags/types/Tag";

export const symbolDeleteTag = Symbol() as InjectionKey<(guid: string) => void>;
export const symbolEditTag = Symbol() as InjectionKey<(category: Tag) => void>;
