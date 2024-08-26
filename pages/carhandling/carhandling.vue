<template>
    <h1>Car Handling</h1>
    <div>
      <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
        <UInput v-model="q" placeholder="Filter people..." />
      </div>
      <UTable
        v-model="selected"
        :rows="filteredRows"
        @select="select"
        sort-asc-icon="i-heroicons-arrow-up-20-solid"
        sort-desc-icon="i-heroicons-arrow-down-20-solid"
        :sort-button="{ icon: 'i-heroicons-sparkles-20-solid', color: 'primary', variant: 'outline', size: '2xs', square: false }"
        class="w-full"
        :columns="columns"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  
  // Define the Person interface
  interface Person {
    id: number
    name: string
    title: string
    email: string
    role: string
  }
  
  const columns = [{
    key: 'id',
    label: 'ID'
  }, {
    key: 'name',
    label: 'Name',
    sortable: true
  }, {
    key: 'title',
    label: 'Title',
    sortable: true
  }, {
    key: 'email',
    label: 'Email',
    sortable: true,
    direction: 'desc' as const
  }, {
    key: 'role',
    label: 'Role'
  }]
  
  const people: Person[] = [{
    id: 1,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member'
  }, {
    id: 2,
    name: 'Courtney Henry',
    title: 'Designer',
    email: 'courtney.henry@example.com',
    role: 'Admin'
  }, {
    id: 3,
    name: 'Tom Cook',
    title: 'Director of Product',
    email: 'tom.cook@example.com',
    role: 'Member'
  }, {
    id: 4,
    name: 'Whitney Francis',
    title: 'Copywriter',
    email: 'whitney.francis@example.com',
    role: 'Admin'
  }, {
    id: 5,
    name: 'Leonard Krasner',
    title: 'Senior Designer',
    email: 'leonard.krasner@example.com',
    role: 'Owner'
  }, {
    id: 6,
    name: 'Floyd Miles',
    title: 'Principal Designer',
    email: 'floyd.miles@example.com',
    role: 'Member'
  }]
  
  const q = ref('')
  const selected = ref<Person[]>([people[1]])
  
  const filteredRows = computed(() => {
    if (!q.value) {
      return people
    }
  
    return people.filter((person) => {
      return Object.values(person).some((value) => {
        return String(value).toLowerCase().includes(q.value.toLowerCase())
      })
    })
  })
  
  function select(row: Person) {
    const index = selected.value.findIndex((item) => item.id === row.id)
    if (index === -1) {
      selected.value.push(row)
    } else {
      selected.value.splice(index, 1)
    }
  }
  </script>
  