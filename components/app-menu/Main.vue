<script setup lang="ts">
import LangSwitch from "~/app-modules/language/components/LangSwitch.vue";
</script>

<template>
    <div>
        <div
            class="flex justify-center items-center w-full bg-bazarGray-800 py-[12px] h-[42px]"
        >
            <div
                class="flex justify-between max-sm:w-full sm:w-[clamp(300px,80%,1200px)] p-2"
            >
                <div
                    class="max-sm:hidden flex items-center text-bazarGray-300 text-body-regular-t"
                >
                    <span class="material-symbols-outlined text-body-regular-l">
                        location_on
                    </span>
                    <span>
                        Store Location: Lincoln- 344, Illinois, Chicago,USA
                    </span>
                </div>

                <div class="flex items-center">
                    <LangSwitch />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
