<script lang="ts" setup>
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export interface LinkProp {
    title: string;
    label?: string;
    href?: string;
    icon?: string;
}

interface NavProps {
    isCollapsed: boolean;
    links: LinkProp[];
}

defineProps<NavProps>();
</script>

<template>
    <div
        :data-collapsed="isCollapsed"
        class="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
        <nav
            class="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2"
        >
            <template v-for="(link, index) of links">
                <UiTooltip
                    v-if="isCollapsed"
                    :key="`1-${index}`"
                    :delay-duration="0"
                >
                    <UiTooltipTrigger as-child>
                        <NuxtLink
                            class="justify-center flex w-full"
                            active-class="text-bazarPrimary"
                            :to="link.href"
                            :class="
                                cn(
                                    buttonVariants({
                                        variant: 'text',
                                        size: 'icon',
                                    }),
                                    'h-9 w-9 text-bazarGray-900'
                                )
                            "
                        >
                            <span
                                v-if="link.icon"
                                class="material-symbols-outlined mr-1"
                            >
                                {{ link.icon }}
                            </span>
                            <span class="sr-only">{{ $t(link.title) }}</span>
                        </NuxtLink>
                    </UiTooltipTrigger>
                    <UiTooltipContent
                        side="right"
                        class="flex items-center gap-4"
                    >
                        {{ $t(link.title) }}
                        <span
                            v-if="link.label"
                            class="ml-auto text-muted-foreground"
                        >
                            {{ link.label }}
                        </span>
                    </UiTooltipContent>
                </UiTooltip>

                <NuxtLink
                    v-else
                    class="justify-start flex"
                    active-class="text-bazarPrimary"
                    :key="`2-${index}`"
                    :to="link.href"
                    :class="
                        cn(
                            buttonVariants({
                                variant: 'text',
                                size: 'sm',
                            }),
                            'justify-start py-1 px-2'
                        )
                    "
                >
                    <span
                        v-if="link.icon"
                        class="material-symbols-outlined mr-1"
                    >
                        {{ link.icon }}
                    </span>
                    {{ $t(link.title) }}
                    <span v-if="link.label">
                        {{ link.label }}
                    </span>
                </NuxtLink>
            </template>
        </nav>
        <slot></slot>
    </div>
</template>
