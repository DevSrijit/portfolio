<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
  <SpeedInsights />
  <div>
    <div>
      <LayoutNavbar class="fixed bottom-0 z-50 flex sm:bottom-auto sm:top-0" />
      <div class="sm:mt-[50px]">
        <slot />
      </div>
      <LayoutFooter />
    </div>
  </div>
</template>
