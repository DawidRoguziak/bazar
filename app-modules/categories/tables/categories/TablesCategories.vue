<script setup lang="ts">
import { ref, onMounted } from "vue";
import { columns } from "./columns";
import type { Payment } from "./columns";

const data = ref<Payment[]>([
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
    },
]);
</script>

<template>
    <div class="container py-10 mx-auto">
        <GenericDataTable :columns="columns" :data="data" />
    </div>
</template>
