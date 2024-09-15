<script setup lang="ts">
  import { ref, onMounted, onUnmounted, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  // import { useSupabaseClient, useSupabaseUser } from '@supabase/js';
  // import { useToast } from 'vue-toastification';

  // State references
  const isOpen = ref(false);
  const isAdmin = ref(false);
  const isDev = ref(false);
  const route = useRoute();
  const router = useRouter();
  // const supabase = useSupabaseClient();
  // const user = useSupabaseUser();
  const toast = useToast();

  // Navigation links
  const navigationLinks = [
    { label: 'Home', icon: 'i-heroicons-home', to: '/dashboard' },
  ];

  const businessLinks = [
    { label: 'Police SOP', icon: 'i-heroicons-calendar', to: '/business-info/police-sop' },
    { label: 'EMS SOP', icon: 'i-heroicons-calendar', to: '/business-info/ems-sop' },
    { label: 'Fast Customs', icon: 'i-heroicons-calendar', to: '/business-info/fast-customs' },
    { label: 'Burger Shop', icon: 'i-heroicons-calendar', to: '/business-info/burgershop' },
  ];

  const applicationLinks = [
    { label: 'Apply for Whitelisting', icon: 'i-heroicons-book-open', to: '/applications/whitelisting' },
    { label: 'Apply for a Business', icon: 'i-heroicons-book-open', to: '/applications/business-applications' },
    { label: '1 of 1 Cars Terms and Conditions', icon: 'i-heroicons-book-open', to: '/documents/1of1tandc' },
  ];

  const adminLinks = [
    { label: 'Whitelist Application Docs', icon: 'i-heroicons-book-open', to: 'documents/whitelisterinterviews' },
    { label: 'Business Application Docs', icon: 'i-heroicons-book-open', to: '/documents/business-docs' },
    { label: 'Gang Application Docs', icon: 'i-heroicons-book-open', to: '/documents/gang-docs' },
  ];

  const devLinks = [
    { label: 'Dev Menu', icon: 'i-heroicons-code-bracket', to: '/dev' },
  ];

  // Simulate user data, which can be replaced with Supabase integration later
  const user = ref({
    name: 'Duncan Smokey',  // Default user name
    email: 'johndoe@example.com',  // Default user email
  });

  // Computed property for welcome message
  const welcomeMessage = computed(() => `Welcome, ${user.value.name}`);

// Logout function
const logout = async () => {
  // console.log('Logging out');
  // const { error } = await supabase.auth.signOut();
  // if (error) {
    // console.error('Error logging out:', error.message);
  // } else {
    // console.log('Logged out successfully');
    router.push('/login');
  // }
};

// Get admin status
// const getAdminStatus = async () => {
//   if (!user.value) {
//     isAdmin.value = false;
//     isDev.value = false;
//     return;
//   }

//   const { data, error } = await supabase
//     .from('profiles')
//     .select('role')
//     .eq('id', user.value.id)
//     .single();

//   if (error) {
//     console.error('Error fetching admin status:', error);
//     isAdmin.value = false;
//     isDev.value = false;
//     return;
//   }

//   if (data?.role === 'admin' || data?.role === 'dev') {
//     isAdmin.value = true;
//     if (data.role === 'dev') {
//       isDev.value = true;
//     }
//   } else {
//     isAdmin.value = false;
//     isDev.value = false;
//   }
// };

// Lifecycle hooks
// onMounted(() => {
//   getAdminStatus();
//   const interval = setInterval(getAdminStatus, 90000);

//   onUnmounted(() => {
//     clearInterval(interval);
//   });
// });
</script>

<template>
  <div>
    <!-- Button to open the slideover -->
    <div class="pt-4 flex justify-end pr-4">
      <UButton 
      color="red"
      icon="i-heroicons-bars-3" 
      label="" 
      @click="isOpen = true" />
    </div>
    <!-- Slideover component bound to 'isOpen' -->
    <USlideover v-model="isOpen">
      <UCard
        class="flex flex-col flex-1"
        :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <!-- Header slot with title "Red Raven" -->
        <template #header>
          <div class="flex justify-between items-center p-4">
            <h2 class="text-lg font-semibold">{{ welcomeMessage }}</h2>
            <!-- Logout Button -->
            <UButton 
              color="gray" 
              variant="solid" 
              icon="i-mdi-logout-variant" 
              class="p-2 mt-3" @click="">
              Logout
            </UButton>
            <UButton
              color="gray"
              variant="ghost"
              size="sm"
              icon="i-heroicons-x-mark-20-solid"
              class="sm:hidden z-10"
              square
              padded
              @click="isOpen = false"/>
          </div>
        </template>

        <!-- Body content with categorized navigation links -->
        <div class="p-4 flex-1 space-y-4">
          <UDivider label="Navigation" />
          <UVerticalNavigation :links="navigationLinks" @click="isOpen = false" class="mb-2" />
          
          <UDivider label="Businesses" />
          <UVerticalNavigation :links="businessLinks" @click="isOpen = false" class="mb-2" />
          
          <UDivider label="Documentation" />
          <UVerticalNavigation :links="applicationLinks" @click="isOpen = false" class="mb-2" />
          
          <!-- Admin Links -->
          <UDivider label="Admin Panel [Actualy Hidden]" />
          <!-- <UVerticalNavigation v-if="isAdmin" :links="adminLinks" @click="isOpen = false" class="mt-2 mb-2" /> -->
          <UVerticalNavigation :links="adminLinks" @click="isOpen = false" class="mt-2 mb-2" />
          
          <!-- Dev Links -->
          <UDivider label="Development Panel [Actualy Hidden]" />
          <!-- <UVerticalNavigation v-if="isDev" :links="devLinks" @click="isOpen = false" class="mt-2" /> -->
          <UVerticalNavigation :links="devLinks" @click="isOpen = false" class="mt-2" />
        </div>
        <!-- Footer slot -->
        <!-- <template #footer>
          <Placeholder class="h-8" />
        </template> -->
      </UCard>
    </USlideover>
  </div>
</template>

<style scoped></style>
