<script setup lang="ts">
import { useLangStore } from "~/app-modules/language/useLangStore";

const { language, langMap } = storeToRefs(useLangStore());
const { setLanguage, availableLanguage } = useLangStore();

const lastAvailableLanguageIndex = availableLanguage.length - 1;
</script>

<template>
    <UiDropdownMenu>
        <UiDropdownMenuTrigger
            class="flex justify-center items-center text-body-regular-t text-bazarGray-300 gap-0.5"
        >
            {{ langMap[language] }}
            <span class="material-symbols-outlined text-body-regular-m">
                expand_more
            </span>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent>
            <template v-for="(lang, index) in availableLanguage">
                <UiDropdownMenuItem
                    class="flex justify-center cursor-pointer"
                    @click="setLanguage(lang)"
                >
                    {{ langMap[lang] }}
                </UiDropdownMenuItem>
                <UiDropdownMenuSeparator
                    v-if="lastAvailableLanguageIndex !== index"
                />
            </template>
        </UiDropdownMenuContent>
    </UiDropdownMenu>
</template>

<style scoped></style>
