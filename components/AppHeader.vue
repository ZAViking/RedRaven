<template>
  <header class="header-container">
    <img src="@/assets/images/redravenName_05KT.png" alt="Red Raven Logo" class="logo-image">
    <!-- <p class="dashboard-text">Dashboard</p> -->
  </header>
  <ColorToggle class="circle-hover" />
</template>

<script lang="js">
import ColorToggle from './ColorToggle.vue';

// import { filename } from 'pathe/utils'
//   const supabase = useSupabaseClient()
//   const user = useSupabaseUser()

//   const colorMode = useColorMode()
//   const glob = import.meta.glob('@/assets/images/*.png', { eager: true })
//   const images = Object.fromEntries(
//     Object.entries(glob).map(([key, value]) => [filename(key), value.default])
//   )
//   const events = ref([])
//   const clients = ref([])
//   let clientObject = {}
//   const popoverOpen = ref(false)
//   const userPreferencesCookie = useCookie('user-preferences')

//   const isDark = computed ({
//     get () {
//       return colorMode.value === 'dark'
//     },
//     set () {
//       colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
//     }
//   })

//   onMounted(() => {
//     getClients()

//     // Check if the userPreferences cookie is created by checking if it returns an empty object
//     console.log("UserPrefsCookie: ", userPreferencesCookie.value)

//     // Check if the object is empty
//     if (userPreferencesCookie.value == undefined) {

//       // Get the metadata
//       const userMetaData = user.value?.user_metadata

//       // Check if the userPreferences metadata is created before trying to load it
//       if (userMetaData && 'userPreferences' in userMetaData) {

//         // Load the user prefs into a cookie
//         userPreferencesCookie.value = userMetaData.userPreferences
//       } else {

//         // Add a user pref default object to the user metadata
//         createUserPrefs()

//         // Add a user pref default object to the user-preferences cookie
//         userPreferencesCookie.value = {
//           colorMode: 'dark',
//           checksClient: ['1of1'],
//           favoriteLinks: [],
//         }
//       }
//     } else {
//       console.log("The user preferences cookie was successfully loaded")
//     }
//   })
</script>

<style scoped>
  /* Container for the header */
  .header-container {
    display: flex;
    justify-content: space-between; /* Space between image and text */
    align-items: center; /* Center the content vertically */
    padding: 1rem;
    background-color: #0d0d0d; /* Darker shade of black */
    border-bottom: 2px solid #ff0000; /* Red bottom border for header */
    height: 100px; /* Height of the header */
    width: 100%; /* Take full width of the screen */
    position: relative;
  }

  /* Logo image styling */
  .logo-image {
    max-width: 150px; /* Adjust the size as needed */
    height: auto;
    margin-left: 20px; /* Space between the image and the left edge */
  }

  /* Positioning for ColorToggle, floating in the bottom right */
  .circle-hover {
    position: fixed; 
    bottom: 20px; 
    right: 20px; 
    cursor: pointer;
    z-index: 1000; 
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>