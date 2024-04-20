<script setup lang="ts">

import {range} from "@antfu/utils";
</script>

<template>
  <div class="text-amber-300  w-full">
    <div class="text-display-regular">aa</div>
    <div class="text-bazarSoftPrimary ">
      sdasdsad

      <UiButton>
        test
      </UiButton>

    </div>

    <div class="text-heading-regular-1" v-for="a in range(10)" :key="a">dddd</div>
    <div class="text-heading-regular-2">dddd</div>
    <div class="text-heading-regular-3">dddd</div>
    <div class="text-heading-regular-4">dddd</div>
    <div class="text-heading-regular-5">dddd</div>

    <div class="text-heading-bold-1" v-for="i in range(2)">dddd</div>
    <div class="text-heading-bold-2">dddd</div>
    <div class="text-heading-bold-3">dddd</div>
    <div class="text-heading-bold-4">dddd</div>
    <div class="text-heading-bold-5">dddd</div>

    <div class="text-body-regular-xxl">dddd</div>
    <div class="text-body-semiBold-s">dddd</div>
    <div class="text-body-regular-t">dddd</div>
  </div>
</template>

<style scoped>

</style>