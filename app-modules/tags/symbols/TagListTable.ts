import type { InjectionKey } from "vue";

export const symbolDeleteTag = Symbol() as InjectionKey<(guid: string) => void>;
