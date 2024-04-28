<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { object, string } from "zod";
import { useForm } from "vee-validate";

export type FormCategoryData = {
    guid?: string;
    name_en: string;
    name_pl: string;
};

const emit = defineEmits<{
    submit: [data: FormCategoryData, setErrors: (fields: any) => void];
}>();

const props = defineProps<{ initialValues?: FormCategoryData }>();

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

const onSubmit = handleSubmit((values: FormCategoryData) => {
    emit("submit", { data: { ...values }, setErrors });
    resetForm();
});
</script>

<template>
    <UiCard class="pt-4">
        <UiCardContent>
            <form @submit.prevent="onSubmit">
                <FormFieldInput label="name_en" name="name_en" />
                <FormFieldInput label="name_pl" name="name_pl" />

                <UiButton type="submit" class="w-full mt-5" size="sm">
                    {{ $t("submit") }}
                </UiButton>
            </form>
        </UiCardContent>
    </UiCard>
</template>
