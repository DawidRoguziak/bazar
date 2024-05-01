<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { z, object, string } from "zod";
import { useForm } from "vee-validate";
import type { Brand } from "~/app-modules/brands/types/Brand";
import { ACCEPTED_FILE_TYPES, MAX_UPLOAD_SIZE } from "~/constants/File";

const emit = defineEmits<{
    submit: [{ data: Partial<Brand>; setErrors: (fields: any) => void }];
}>();

const props = defineProps<{ initialValues?: Brand }>();
const { t } = useI18n();

const formSchema = toTypedSchema(
    object({
        name: string().min(2).max(80),
        logo_url: z
            .instanceof(File)
            .refine(
                (file) => file?.size <= MAX_UPLOAD_SIZE,
                t("to_large_file", { maxSize: MAX_UPLOAD_SIZE })
            )
            .refine(
                (file) => ACCEPTED_FILE_TYPES.includes(file),
                t("we_accept_only", {
                    fileTypes: ACCEPTED_FILE_TYPES.join(","),
                })
            ),
    })
);

const { handleSubmit, setErrors, resetForm } = useForm({
    validationSchema: formSchema,
    initialValues: props.initialValues ?? undefined,
});

const onSubmit = handleSubmit((values: Partial<Brand>) => {
    console.log(values);
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
                <UiInput :label="$t('name')" name="name"></UiInput>
                <UiInput
                    :label="$t('logo_img')"
                    name="logo_url"
                    type="file"
                ></UiInput>

                <UiButton type="submit" class="w-full mt-5" size="sm">
                    {{ $t("submit") }}
                </UiButton>
            </form>
        </UiCardContent>
    </UiCard>
</template>