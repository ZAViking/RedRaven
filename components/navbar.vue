<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// import { useSupabaseClient, useSupabaseUser } from '@supabase/js';
// import { useToast } from 'vue-toastification';

// State references
const isOpen = ref(false);
const isAdmin = ref(false);
const isDev = ref(false);
const route = useRoute();
const router = useRouter();
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const toast = useToast();

// Navigation links
const links = [
  { label: user.value?.user_metadata.full_name || 'User', icon: '', to: '/' },
  { label: 'Home', icon: 'i-heroicons-home', to: '/' },
  { label: 'Documentation', icon: 'i-heroicons-check-badge', to: '/documentation' },
  { label: 'Whitelist Application', icon: 'i-heroicons-check-badge', to: '/whitelist' },
  { label: 'Fast Customs', icon: 'i-heroicons-calendar', to: '/fast-customs' },
];

const adminLinks = [
  { label: 'Admin Menu', icon: 'i-heroicons-user-group', to: '/admin' },
];

const devLinks = [
  { label: 'Dev Menu', icon: 'i-heroicons-code-bracket', to: '/dev' },
];

// Keyboard shortcuts
defineShortcuts({
  m: () => (isOpen.value = !isOpen.value),
  h: { whenever: [isOpen], handler: () => { router.push('/'); isOpen.value = false; } },
  c: { whenever: [isOpen], handler: () => { router.push('/'); isOpen.value = false; } },
  s: { whenever: [isOpen], handler: () => { router.push('/'); isOpen.value = false; } },
  a: { whenever: [isOpen], handler: () => { 
    if (isAdmin.value) {
      router.push('/admin');
    } else {
      toast.add({ 
        title: 'No Admin Rights', 
        description: "Oi, funny guy, you're not an admin, you can't go there...", 
        color: 'gray', 
        icon: 'i-heroicons-information-circle', 
        timeout: 5000 
      });
    }
    isOpen.value = false; 
  }},
  d: { whenever: [isOpen], handler: () => { 
    if (isDev.value) {
      router.push('/dev');
    } else {
      toast.add({ 
        title: 'No Dev Rights', 
        description: "Oi, funny guy, you're not a dev, you can't go there...", 
        color: 'gray', 
        icon: 'i-heroicons-information-circle', 
        timeout: 5000 
      });
    }
    isOpen.value = false; 
  }},
  e: { whenever: [isOpen], handler: () => { router.push('/email-generator'); isOpen.value = false; } },
});

// Logout function
const logout = async () => {
  console.log('Logging out');
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Error logging out:', error.message);
  } else {
    console.log('Logged out successfully');
    router.push('/login');
  }
};

// Get admin status
const getAdminStatus = async () => {
  if (!user.value) {
    isAdmin.value = false;
    isDev.value = false;
    return;
  }

  const { data, error } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.value.id)
    .single();

  if (error) {
    console.error('Error fetching admin status:', error);
    isAdmin.value = false;
    isDev.value = false;
    return;
  }

  if (data?.role === 'admin' || data?.role === 'dev') {
    isAdmin.value = true;
    if (data.role === 'dev') {
      isDev.value = true;
    }
  } else {
    isAdmin.value = false;
    isDev.value = false;
  }
};

// Lifecycle hooks
onMounted(() => {
  getAdminStatus();
  const interval = setInterval(getAdminStatus, 90000);

  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<template>
  <div>
    <div class="button-container">
      <UButton icon="i-heroicons-bars-3" label="" @click="isOpen = true" />
    </div>
    <USlideover v-model="isOpen">
      <div class="p-4 flex-1">
        <!-- Close button for the slideover -->
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

        <!-- Non-Admin Nav Links -->
        <UVerticalNavigation :links="links" @click="isOpen = false" class="mb-2" />
        <UDivider />

        <!-- Admin Nav Links -->
        <UVerticalNavigation v-if="isAdmin" :links="adminLinks" @click="isOpen = false" class="mt-2 mb-2" />
        <UDivider />

        <!-- Dev Nav Links -->
        <UVerticalNavigation v-if="isDev" :links="devLinks" @click="isOpen = false" class="mt-2" />

        <!-- Logout Button -->
        <UButton color="gray" variant="solid" icon="i-mdi-logout-variant" class="p-2 mt-3" @click="logout">
          Logout
        </UButton>
      </div>
    </USlideover>
  </div>
  <UNotifications />
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: flex-end; /* Aligns the button to the right */
  padding-right: 16px; /* Add some right padding if needed */
}

UButton {
  color: white;
}
</style>
