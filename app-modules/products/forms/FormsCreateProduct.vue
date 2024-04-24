<script setup lang="ts">
import { useBazarFetch } from "~/composables/useBazarFetch";
import { toTypedSchema } from "@vee-validate/zod";
import { object, string } from "zod";
import { useForm } from "vee-validate";

const { data, execute } = useBazarFetch("/api/products", {
    method: "POST",
    immediate: false,
    headers: { "Content-Type": "application/json" },
    body: {},
});

const formSchema = toTypedSchema(
    object({
        username: string().min(2).max(50),
    })
);

const form = useForm({
    validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
    console.log("Form submitted!", values);
});
</script>

<template>
    <form @submit="onSubmit">
        <UiCard>
            <UiCardContent>
                <UiFormField v-slot="{ componentField }" name="username">
                    <UiFormItem>
                        <UiFormLabel>Username</UiFormLabel>
                        <UiFormControl>
                            <UiInput
                                placeholder="shadcn"
                                v-bind="componentField"
                            />
                        </UiFormControl>
                        <UiFormDescription>
                            This is your public display name.
                        </UiFormDescription>
                        <UiFormMessage />
                    </UiFormItem>
                </UiFormField>
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
