<template>
    <header class="dashboard-header">
      <AppHeader />
      <Navbar />
      <p class="dashboard-welcome-text">Welcome to the Red Raven</p>
    </header>
    <div class="dashboard">
      <!-- Render the tabs with labels and icons -->
      <ul class="dashboard-tabs">
        <li 
          v-for="(item, index) in items" 
          :key="index" 
          @click="activeTab = item.component"
          :class="{ active: activeTab === item.component }"
          class="dashboard-tab-item"
        >
          <UIcon :name="item.icon" class="dashboard-tab-icon" />
          {{ item.label }}
        </li>
      </ul>
  
      <!-- Render the content for the selected tab -->
      <component :is="activeTab" class="dashboard-tab-content" />
    </div>
  </template>
  
  <script setup lang="ts">
    import Economy from '@/components/dashboard-tabs/economy.vue';
    import Gangs from '@/components/dashboard-tabs/gangs.vue';
    import Leaderboards from '@/components/dashboard-tabs/leaderboards.vue';
    import Miscellaneous from '@/components/dashboard-tabs/miscellaneous.vue';
    import NewsEvents from '@/components/dashboard-tabs/news-events.vue';
    import PoliceCrime from '@/components/dashboard-tabs/police-crime.vue';
    
    const items = [
        { label: 'News & Events',       icon: 'i-heroicons-information-circle', component: NewsEvents },
        { label: 'Factions/Gangs Info', icon: 'i-heroicons-arrow-down-tray', component: Gangs },
        { label: 'Economy Overview',    icon: 'i-heroicons-eye-dropper', component: Economy },
        { label: 'Police & Crime',      icon: 'i-heroicons-shield-check', component: PoliceCrime },
        { label: 'Leaderboards',        icon: 'i-heroicons-chart-bar', component: Leaderboards },
        { label: 'Miscellaneous',       icon: 'i-heroicons-cog', component: Miscellaneous }
    ];
    const activeTab = ref(items[0].component); // Initialize with the first tab component
  </script>
  
  <style lang="css">
/* Header and Dashboard Styles */
    .dashboard-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: #0d0d0d;
        border-bottom: 2px solid #ff0000;
        height: 100px;
        width: 100%;
        position: relative;
    }
  
/* Styling for the Welcome Text in the Dashboard */
    .dashboard-welcome-text {
        color: #ffffff;
        font-size: 1.5rem;
        margin: 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
  
/* Styles for the Dashboard Tabs */
    .dashboard-tabs {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        list-style: none;
        padding: 0;
        margin-top: 20px; /* Add margin to create space above the buttons */
    }
  
    .dashboard-tab-item {
        cursor: pointer;
        padding: 15px 20px; /* Added 15px padding to the top for more space */
        background-color: #f0f0f0;
        color: #000000; /* Set text color to black */
        border-radius: 5px;
        transition: background-color 0.3s ease, color 0.3s ease;
    }
  
    .dashboard-tab-item.active {
        background-color: #ff0000;
        color: white; /* White text for the active tab */
    }

    .dashboard-tab-item:hover {
        background-color: #cc0000;
        color: white; /* Change text color on hover */
    }

    .dashboard-tab-icon {
        width: 1rem;
        height: 1rem;
        margin-right: 5px;
    }
  
  /* Tab Content Styles */
    .dashboard-tab-content {
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  </style>
  