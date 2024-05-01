<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "@/lib/utils";
import { type InputVariants, inputVariants } from "~/components/ui/input/index";

const props = withDefaults(
    defineProps<{
        defaultValue?: string | number;
        modelValue?: string | number;
        class?: HTMLAttributes["class"];
        variant?: InputVariants["variant"];
        type?: "text" | "password" | "file" | "number";
        label?: string;
        name: string;
    }>(),
    {
        type: "text",
        label: "LABEL_MISSING",
    }
);

const emits = defineEmits<{
    (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
    passive: true,
    defaultValue: props.defaultValue,
});
</script>

<template>
    <div class="form-field">
        <UiFormField v-slot="{ componentField }" :name="name">
            <UiFormItem>
                <UiFormLabel>{{ label }}</UiFormLabel>
                <UiFormControl>
                    <input
                        v-model="modelValue"
                        v-bind="componentField"
                        :type="type"
                        :class="cn(inputVariants({ variant }), props.class)"
                    />
                </UiFormControl>
                <UiFormMessage />
            </UiFormItem>
        </UiFormField>
    </div>
</template>
