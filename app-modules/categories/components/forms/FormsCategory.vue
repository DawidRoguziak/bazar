<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { object, string } from "zod";
import { useForm } from "vee-validate";
import type { Category } from "~/repositories/Categories";

const emit = defineEmits<{
    submit: [{ data: Partial<Category>; setErrors: (fields: any) => void }];
}>();

const props = defineProps<{ initialValues?: Category }>();

const formSchema = toTypedSchema(
    object({
        name_en: string().min(2).max(80),
        name_pl: string().min(2).max(80),
    })
);

const { handleSubmit, setErrors, resetForm } = useForm({
    validationSchema: formSchema,
    initialValues: props.initialValues ?? undefined,
});

const onSubmit = handleSubmit((values: Partial<Category>) => {
    emit("submit", {
        data: { guid: props?.initialValues?.guid ?? undefined, ...values },
        setErrors,
    });
    resetForm();
});
</script>

<template>
    <UiCard class="pt-4">
        <UiCardContent>
            <form @submit.prevent="onSubmit">
                <UiInput label="name_en" name="name_en" />
                <UiInput label="name_pl" name="name_pl" />

                <UiButton type="submit" class="w-full mt-5" size="sm">
                    {{ $t("submit") }}
                </UiButton>
            </form>
        </UiCardContent>
    </UiCard>
</template>
