<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div>
    <!-- Burger Icon Button to Open Slideover -->
    <div class="flex justify-end p-4">
        <UButton 
        color="gray"
        icon="i-heroicons-bars-3-20-solid" 
        @click="isOpen = true" 
        class="text-gray-700 dark:text-white"
        />
    </div>

    <!-- Slideover Component -->
    <USlideover v-model="isOpen">
      <UCard
        class="flex flex-col flex-1"
        :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }"
      >
        <!-- Header Slot -->
        <template #header>
          <UButton
            color="gray"
            variant="ghost"
            size="sm"
            icon="i-heroicons-x-mark-20-solid"
            class="flex sm:hidden absolute end-5 top-5 z-10"
            square
            padded
            @click="isOpen = false"
          />
          <Placeholder class="h-8" />
        </template>

        <!-- Navigation Links -->
        <nav class="p-4">
          <ul class="space-y-4">
            <li>
              <NuxtLink to="/" @click="isOpen = false">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/whitelisting" @click="isOpen = false">Whitelisting Applications</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/1of1tandc" @click="isOpen = false">1 of 1 Terms and Conditions</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/redravencars" @click="isOpen = false">Red Raven Cars</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/carhandling" @click="isOpen = false">Car Handling</NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Footer Slot -->
        <template #footer>
          <Placeholder class="h-8" />
        </template>
      </UCard>
    </USlideover>
  </div>
</template>

<style lang="css">
    li {
        color: white;
    }
</style>
