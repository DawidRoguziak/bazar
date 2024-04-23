<script setup lang="ts"></script>

<template>
    <div>
        <AppMenuMain></AppMenuMain>
        <div class="flex justify-center p-2">
            <div class="max-sm:w-full sm:w-[clamp(300px,80%,1200px)]">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
