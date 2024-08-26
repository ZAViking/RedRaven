<template>
  <div>
    <AppHeader />
    <NuxtLayout>
      <Navbar />
      <NuxtPage />
      <!-- <AppFooter /> -->
    </NuxtLayout> 
    
  </div>

  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
</template>

<script setup>
    import { createClient } from '@supabase/supabase-js'
    const supabase = createClient('https://ytiebogxacxkojflncmo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0aWVib2d4YWN4a29qZmxuY21vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyMzE4NzEsImV4cCI6MjAzOTgwNzg3MX0.ZaefiBZF7fdA3RtMCd3InnQQ9gJCZzW7bRNU_yumjYE')
    const countries = ref([])

    async function getCountries() {
      const { data } = await supabase.from('countries').select()
      countries.value = data
  }

onMounted(() => {
  getCountries()
})
</script>