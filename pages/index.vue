<script setup lang="ts"></script>

<template>
    <div class="w-full p-6">
        <div class="text-display-regular">aa</div>
        <div>{{ $t("welcome") }}</div>
        <div class="text-bazarSoftPrimary">
            sdasdsad

            <UiButton> test </UiButton>
            <div />
            <UiSwitch />
            <div />
            <div class="flex items-center space-x-2">
                <UiCheckbox id="terms" />
                <UiLabel
                    for="terms"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Accept terms and conditions
                </UiLabel>
            </div>

            <div />
            <UiRadioGroup default-value="comfortable">
                <div class="flex items-center space-x-2">
                    <UiRadioGroupItem id="r1" value="default" />
                    <UiLabel for="r1">Default</UiLabel>
                </div>
                <div class="flex items-center space-x-2">
                    <UiRadioGroupItem id="r2" value="comfortable" />
                    <UiLabel for="r2">Comfortable</UiLabel>
                </div>
                <div class="flex items-center space-x-2">
                    <UiRadioGroupItem id="r3" value="compact" />
                    <UiLabel for="r3">Compact</UiLabel>
                </div>
            </UiRadioGroup>
        </div>

        <div class="mt-2" />
    </div>
</template>

<style scoped></style>
