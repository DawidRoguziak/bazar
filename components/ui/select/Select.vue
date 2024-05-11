<script setup lang="ts">
import type { SelectRootEmits, SelectRootProps } from "radix-vue";
import { SelectRoot, useForwardPropsEmits } from "radix-vue";

interface UiSelectProps extends SelectRootProps {
    name: string;
}

const props = defineProps<UiSelectProps>();
const emits = defineEmits<SelectRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <div class="form-field">
        <UiFormField v-slot="{ field }" :name="name">
            <UiFormItem>
                <SelectRoot v-bind="{ ...forwarded, ...field }">
                    <slot />
                </SelectRoot>
            </UiFormItem>
        </UiFormField>
    </div>
</template>
