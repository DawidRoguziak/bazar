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
                <UiInput label="name_en" name="name_en" variant="warning" />
                <UiInput label="name_pl" name="name_pl" variant="error" />
                <UiInput
                    label="Image"
                    name="image_url"
                    type="file"
                    variant="success"
                />

                <UiInput label="description_en" name="description_en" />
                <UiInput label="description_pl" name="description_pl" />

                <UiInput
                    label="base_price_usd"
                    name="base_price_usd"
                    type="number"
                />
                <UiInput
                    label="base_price_pln"
                    name="base_price_pln"
                    type="number"
                />

                <UiInput
                    label="base_price_pln"
                    name="base_price_pln"
                    type="number"
                />

                <UiInput label="discount" name="discount" type="number" />

                <UiInput label="quantity" name="quantity" type="number" />

                <UiInput label="weight" name="weight" type="number" />

                <UiInput label="color_en" name="color_en" />
                <UiInput label="color_pl" name="color_pl" />

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
