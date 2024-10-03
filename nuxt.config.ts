export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  typescript: { strict: false },
  github: {
    repo: 'nuxt-modules/supabase',
  },

  modules: [
    // '@nuxt/content',
    '@nuxt/ui',
    // '@nuxt/Icon',
    // '@nuxtjs/fontaine',
    "@nuxtjs/color-mode",
    "@nuxtjs/supabase",
    // "@nuxt/image",
    // "@nuxt/scripts",
    // "@vueuse/nuxt",
    // '@nuxt/vue-toastification',
  ],

  supabase: {
    redirectOptions: {
      login: '/dashboard',
      callback: '/confirm',
      // include: ['/protected'],
      exclude: ['/unprotected', '/public/*'],
    },
  },

  
  ui: {
    icons: ["mdi", "simple-icons", "line-md", "heroicons"],
  },
  // Fonts
  fontMetrics: {
    fonts: ['DM Sans'],
  },

  colorMode: {
    preference: "light",
  },

  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.NUXT_PUBLIC_SUPABASE_URL,
      SUPABASE_KEY: process.env.NUXT_PUBLIC_SUPABASE_KEY,
      BASE_URL: process.env.BASE_URL,
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  css: ['@/assets/css/global.css'],

  devServer: {
    // https: {
      // cert: "./certs/d9380e05c8e024c7.crt",
      // key: "./certs/privkey.key",
    // },
    // port: 8080,
    // host: "0.0.0.0",
  },
  
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  $development: {
    //
  }
})
