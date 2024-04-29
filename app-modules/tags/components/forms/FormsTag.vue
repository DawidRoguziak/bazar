<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { object, string } from "zod";
import { useForm } from "vee-validate";
import type { Tag } from "~/app-modules/tags/types/Tag";

const emit = defineEmits<{
    submit: [{ data: Partial<Tag>; setErrors: (fields: any) => void }];
}>();

const props = defineProps<{ initialValues?: Tag }>();

const formSchema = toTypedSchema(
    object({
        en: string().min(2).max(80),
        pl: string().min(2).max(80),
    })
);

const { handleSubmit, setErrors, resetForm } = useForm({
    validationSchema: formSchema,
    initialValues: props.initialValues ?? undefined,
});

const onSubmit = handleSubmit((values: Partial<Tag>) => {
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
                <FormFieldInput label="name_en" name="en" />
                <FormFieldInput label="name_pl" name="pl" />

                <UiButton type="submit" class="w-full mt-5" size="sm">
                    {{ $t("submit") }}
                </UiButton>
            </form>
        </UiCardContent>
    </UiCard>
</template>
