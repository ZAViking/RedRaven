<template>
  <!-- <title>SwitchAssist</title> -->
  <NuxtLayout>
    <NuxtPage class="bg-[#f0f0f0] dark:bg-[#121212]" />
  </NuxtLayout>
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
// For general achievements
const RedRavenColours = [
  "#FF5302",
  "#021C40",
  "#FF3801",
  "#035BCC",
  "#3076D8",
  "#FAC464",
];

// For national holidays that don't really have their own colours
const SouthAfricanColours = [
  "#FFFFFF",
  "#002395",
  "#DE3831",
  "#007A4E",
  "#FFB614",
  "#000000",
];

// For birthdays / New Years
const RainbowColours = [
  "#ff0000",
  "#ffa500",
  "#ffff00",
  "#008000",
  "#0000ff",
  "#4b0082",
  "#ee82ee",
];

// For Christmas
const ChristmasColours = ["#ffffff", "#ff0000"];

// For Valentines
const ValentinesColours = ["#ffffff", "#ff0000", "#FFC0CB"];
</script>
