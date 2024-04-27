<script setup lang="ts">
import type { InputVariants } from "~/components/ui/input";

export type UiFormsInputs = {
    type?: "text" | "password" | "file" | "number";
    label?: string;
    name: string;
    variant?: InputVariants["variant"];
};

withDefaults(defineProps<UiFormsInputs>(), {
    type: "text",
    label: "LABEL_MISSING",
    variant: "default",
});
</script>

<template>
    <UiFormField v-slot="{ componentField }" :name="name">
        <UiFormItem>
            <UiFormLabel>{{ label }}</UiFormLabel>
            <UiFormControl>
                <UiInput
                    v-bind="componentField"
                    :placeholder="label"
                    :type="type"
                    :variant="variant"
                />
            </UiFormControl>
            <UiFormMessage />
        </UiFormItem>
    </UiFormField>
</template>

<style scoped></style>
