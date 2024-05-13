<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Primitive, type PrimitiveProps } from "radix-vue";
import { type ButtonVariants, buttonVariants } from ".";
import { cn } from "@/lib/utils";

interface Props extends PrimitiveProps {
    variant?: ButtonVariants["variant"];
    size?: ButtonVariants["size"];
    class?: HTMLAttributes["class"];
    type?: "submit" | "button";
}

const props = withDefaults(defineProps<Props>(), {
    as: "button",
    size: "default",
    class: "",
    variant: "default",
    type: "button",
});
</script>

<template>
    <Primitive
        :as="as"
        :type="type"
        :as-child="asChild"
        :class="cn(buttonVariants({ variant, size }), props.class)"
    >
        <slot />
    </Primitive>
</template>
