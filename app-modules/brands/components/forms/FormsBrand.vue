<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import type { Brand } from "~/repositories/Brands";
import { getFromBrandSchema } from "~/app-modules/brands/components/forms/FormBrandSchema";

const emit = defineEmits<{
    submit: [{ data: Partial<Brand>; setErrors: (fields: any) => void }];
}>();

const props = defineProps<{ initialValues?: Brand }>();
const { t } = useI18n();

const formSchema = toTypedSchema(getFromBrandSchema(t));

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
            <form @submit.prevent="onSubmit">
                <UiInput :label="$t('name')" name="name"></UiInput>

                <div v-if="values.logo_url">
                    <img :src="values.logo_url" alt="" />
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
