<template>
  <!-- <title>SwitchAssist</title> -->
  <NuxtLayout>
    <NuxtPage class="bg-[#f0f0f0] dark:bg-[#121212]" />
  </NuxtLayout>
  <UNotifications />
</template>

<style>
  .layout-enter-active,
  .layout-leave-active {
    transition: all 0.4s;
  }
  .layout-enter-from,
  .layout-leave-to {
    filter: grayscale(1);
  }
</style>

<script setup lang="ts">
</script>
