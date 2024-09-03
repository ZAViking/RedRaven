<script setup lang="ts">
const toast = useToast()
</script>

<template>
  <UButton label="Show toast" @click="toast.add({ title: 'Applications submitted!' })" />
</template>