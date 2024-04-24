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

const formRef = useForm<HTMLFormElement>();

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
                <UiFormsInput
                    label="name_en"
                    name="name_en"
                    variant="warning"
                />
                <UiFormsInput label="name_pl" name="name_pl" variant="error" />
                <UiFormsInput
                    label="Image"
                    name="image_url"
                    type="file"
                    variant="success"
                />

                <UiFormsInput label="description_en" name="description_en" />
                <UiFormsInput label="description_pl" name="description_pl" />

                <UiFormsInput
                    label="base_price_usd"
                    name="base_price_usd"
                    type="number"
                />
                <UiFormsInput
                    label="base_price_pln"
                    name="base_price_pln"
                    type="number"
                />

                <UiFormsInput
                    label="base_price_pln"
                    name="base_price_pln"
                    type="number"
                />

                <UiFormsInput label="discount" name="discount" type="number" />

                <UiFormsInput label="quantity" name="quantity" type="number" />

                <UiFormsInput label="weight" name="weight" type="number" />

                <UiFormsInput label="color_en" name="color_en" />
                <UiFormsInput label="color_pl" name="color_pl" />

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
