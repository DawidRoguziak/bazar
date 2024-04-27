<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { object, string } from "zod";
import { useForm } from "vee-validate";

export type FormCreateProduct = {
    name_en: string;
};

defineEmits<{
    submit: [data: FormCreateProduct, formRef: HTMLFormElement];
}>();

const formRef = ref<HTMLFormElement>();

const formSchema = toTypedSchema(
    object({
        username: string().min(2).max(50),
    })
);

const { handleSubmit } = useForm({
    validationSchema: formSchema,
});

const onSubmit = handleSubmit((values: FormCreateProduct) => {
    console.log("Form submitted!", values);
});
</script>

<template>
    <form ref="formRef" @submit.prevent="onSubmit">
        <UiCard class="pt-4">
            <UiCardContent>
                <UiFormInput label="name_en" name="name_en" variant="warning" />
                <UiFormInput label="name_pl" name="name_pl" variant="error" />
                <UiFormInput
                    label="Image"
                    name="image_url"
                    type="file"
                    variant="success"
                />

                <UiFormInput label="description_en" name="description_en" />
                <UiFormInput label="description_pl" name="description_pl" />

                <UiFormInput
                    label="base_price_usd"
                    name="base_price_usd"
                    type="number"
                />
                <UiFormInput
                    label="base_price_pln"
                    name="base_price_pln"
                    type="number"
                />

                <UiFormInput
                    label="base_price_pln"
                    name="base_price_pln"
                    type="number"
                />

                <UiFormInput label="discount" name="discount" type="number" />

                <UiFormInput label="quantity" name="quantity" type="number" />

                <UiFormInput label="weight" name="weight" type="number" />

                <UiFormInput label="color_en" name="color_en" />
                <UiFormInput label="color_pl" name="color_pl" />

                <div>tags_guids</div>
                <div>category_guid</div>
                <div>brand_guid</div>
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
