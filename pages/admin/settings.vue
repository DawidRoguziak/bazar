<script setup lang="ts">
import LangSwitch from "~/app-modules/language/components/LangSwitch.vue";

definePageMeta({
    layout: "admin-menu",
});
</script>

<template>
    <div class="w-full h-full">
        <UiCard class="max-w-[150px]">
            <UiCardHeader class="text-center">
                {{ $t("language") }}
            </UiCardHeader>
            <UiCardContent class="lang-switch flex justify-center">
                <LangSwitch />
            </UiCardContent>
        </UiCard>
    </div>
</template>

<!-- // find better why to change color -->
<style lang="css" scoped>
:deep(.lang-switch) {
    .text-bazarGray-300 {
        color: black !important;
    }
}
</style>
