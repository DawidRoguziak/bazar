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
        logo_url: string().optional(),
        logo_file: z
            .instanceof(File, { message: t("validation.required") })
            .optional(),
    }).superRefine(
        (
            arg,
            ctx
        ): arg is { name: string; logo_url: string; logo_file: File } => {
            if (!!arg.logo_url) {
                if (!!arg.logo_file) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: t("validation.required"),
                    });
                    return z.NEVER;
                }

                if (arg.logo_file?.size <= MAX_UPLOAD_SIZE) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: t("validation.file_to_large", {
                            maxSize: MAX_UPLOAD_SIZE,
                        }),
                    });
                }

                if (ACCEPTED_FILE_TYPES.includes(arg?.logo_file?.type ?? "")) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: t("validation.we_accept_only", {
                            fileTypes: ACCEPTED_FILE_TYPES.join(","),
                        }),
                    });
                }
            } else {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: t("validation.required"),
                });
            }

            return z.NEVER;
        }
    )
);

const { handleSubmit, setErrors, handleReset, values } = useForm<Brand>({
    validationSchema: formSchema,
    initialValues: props.initialValues ?? undefined,
});

const onSubmit = handleSubmit((values: Omit<Brand, "guid">) => {
    emit("submit", {
        data: { guid: props?.initialValues?.guid ?? undefined, ...values },
        setErrors,
    });
    handleReset();
});
</script>

<template>
    <UiCard class="pt-4">
        <UiCardContent>
            {{ values }}
            <form @submit.prevent="onSubmit">
                <UiInput :label="$t('name')" name="name"></UiInput>

                <div v-if="values.logo_url">
                    <img :src="values.logo_url" />
                </div>
                <UiInput
                    v-else
                    :label="$t('logo_img')"
                    name="logo_file"
                    type="file"
                ></UiInput>

                <UiButton type="submit" class="w-full mt-5" size="sm">
                    {{ $t("submit") }}
                </UiButton>
            </form>
        </UiCardContent>
    </UiCard>
</template>
