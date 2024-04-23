<script setup lang="ts">
import { useLangStore } from "~/app-modules/language/useLangStore";

const { language } = storeToRefs(useLangStore());
const { setLanguage, availableLanguage } = useLangStore();

const lastAvailableLanguageIndex = availableLanguage.length - 1;
</script>

<template>
    <UiDropdownMenu>
        <UiDropdownMenuTrigger>{{ language }}</UiDropdownMenuTrigger>
        <UiDropdownMenuContent>
            <template v-for="(lang, index) in availableLanguage">
                <UiDropdownMenuItem
                    class="flex justify-center"
                    @click="setLanguage(lang)"
                    >{{ lang }}
                </UiDropdownMenuItem>
                <UiDropdownMenuSeparator
                    v-if="lastAvailableLanguageIndex !== index"
                />
            </template>
        </UiDropdownMenuContent>
    </UiDropdownMenu>
</template>

<style scoped></style>
