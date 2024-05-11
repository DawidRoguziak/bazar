<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import AsyncSelectBrand from "~/components/ui/async-selects/AsyncSelectBrand.vue";

definePageMeta({
    layout: "admin-menu",
});

const {} = useForm();
const { value } = useField("test");
</script>

<template>
    <form>
        {{ value }}
        <div>
            <AsyncSelectBrand name="test"> </AsyncSelectBrand>
        </div>
    </form>
</template>

<style scoped></style>
