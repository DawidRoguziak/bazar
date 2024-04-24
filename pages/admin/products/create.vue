<script setup lang="ts">
import FormsCreateProduct from "~/app-modules/products/forms/FormsCreateProduct.vue";

definePageMeta({
    layout: "admin-menu",
});

function onSubmit() {
    useNuxtApp().$bazarFetch("/api/products", {
        method: "POST",
        immediate: false,
        body: {},
    });
}
</script>

<template>
    <div>
        <FormsCreateProduct class="max-w-[400px]" />
    </div>
</template>

<style scoped></style>
