<script lang="ts" setup>
import { ref } from "vue";
import { cn } from "@/lib/utils";

import type { LinkProp } from "~/components/layout-parts/NavMenu.vue";

interface AdminMenu {
    defaultCollapsed?: boolean;
    navCollapsedSize?: number;
}

const props = withDefaults(defineProps<AdminMenu>(), {
    defaultCollapsed: false,
    navCollapsedSize: 4,
});

const { t } = useI18n();
const isCollapsed = ref(props.defaultCollapsed);

const productsLinks: LinkProp[] = [
    {
        title: t("Product list"),
        label: "",
        href: "/admin/products",
        icon: "package_2",
    },
    {
        title: "Create Product",
        label: "",
        href: "/admin/products/create",
        icon: "box_add",
    },
];

const settingsLinks: LinkProp[] = [
    {
        title: "Settings",
        label: "",
        href: "/admin/settings",
        icon: "settings",
    },
];

function onCollapse() {
    isCollapsed.value = true;
}

function onExpand() {
    isCollapsed.value = false;
}
</script>

<template>
    <UiTooltipProvider class="h-svh" :delay-duration="0">
        <UiResizablePanelGroup
            id="resize-panel-group-1"
            direction="horizontal"
            class="m-svh items-stretch"
        >
            <UiResizablePanel
                id="resize-panel-1"
                :default-size="15"
                :collapsed-size="navCollapsedSize"
                collapsible
                :min-size="10"
                :max-size="40"
                :class="
                    cn(
                        isCollapsed &&
                            'min-w-[50px] transition-all duration-300 ease-in-out'
                    )
                "
                @expand="onExpand"
                @collapse="onCollapse"
            >
                <div
                    v-if="isCollapsed"
                    class="text-center text-body-semiBold-xl"
                >
                    B
                </div>
                <div v-else class="text-center text-body-semiBold-xl">
                    BAZAR
                </div>
                <UiSeparator />
                <LayoutPartsNavMenu
                    :is-collapsed="isCollapsed"
                    :links="productsLinks"
                />
                <UiSeparator />
                <LayoutPartsNavMenu
                    :is-collapsed="isCollapsed"
                    :links="settingsLinks"
                />
            </UiResizablePanel>
            <UiResizableHandle id="resize-handle-1" with-handle />
            <UiResizablePanel
                id="resize-panel-2"
                :default-size="85"
                :min-size="30"
            >
                <UiScrollArea class="h-svh p-2">
                    <slot></slot>
                </UiScrollArea>
            </UiResizablePanel>
        </UiResizablePanelGroup>
    </UiTooltipProvider>
</template>