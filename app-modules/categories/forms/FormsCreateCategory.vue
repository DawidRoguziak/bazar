<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { object, string } from "zod";
import { useForm } from "vee-validate";

export type FormCreateCategory = {
    name_en: string;
    name_pl: string;
};

const emit = defineEmits<{
    submit: [data: FormCreateCategory, formRef: HTMLFormElement];
}>();

const formRef = ref<HTMLFormElement>();

const formSchema = toTypedSchema(
    object({
        name_en: string().min(2).max(80),
        name_pl: string().min(2).max(80),
    })
);

const { handleSubmit } = useForm({
    validationSchema: formSchema,
});

const onSubmit = handleSubmit((values: FormCreateCategory) => {
    console.log("Form submitted!", values);
    emit("submit", { data: values, formRef });
});
</script>

<template>
    <form ref="formRef" @submit.prevent="onSubmit">
        <UiCard class="pt-4">
            <UiCardContent>
                <FormInput label="name_en" name="name_en" />
                <FormInput label="name_pl" name="name_pl" />
            </UiCardContent>
            <UiCardFooter>
                <UiButton type="submit" class="w-full" size="sm">
                    Submit
                </UiButton>
            </UiCardFooter>
        </UiCard>
    </form>
</template>

<style scoped></style>
