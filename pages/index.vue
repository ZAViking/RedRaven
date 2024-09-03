<template>
  <LogIn />
</template>
  
  <script setup lang="js">
  
  definePageMeta({
    layout: 'default',
    title: 'Red Raven | Home',
  })
  
  useHead({
    title: 'Red Raven | Home',
  })

  const router = useRouter()
  const userPreferencesCookie = useCookie('user-preferences')
  // const user = useSupabaseUser()
  // const supabase = useSupabaseClient()
  
  onMounted(async () => {
    if (user.value === undefined) {
      router.push('/login')
    }
  })
  </script>
  
  <style scoped></style>
  