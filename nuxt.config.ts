// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  modules: [
    "@nuxt/ui",
    // "@nuxtjs/supabase",
    // "@nuxt/image",
    // "@nuxt/scripts",
    // "@vueuse/nuxt",
    "@nuxtjs/color-mode"
    // '@morev/vue-transitions/nuxt'
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  css: ['@/assets/css/global.css'],

  ui: {
    primary: 'gray',
    gray: 'cool',
    themes: ['dark', 'light'],
    icons: ["mdi", "simple-icons", "line-md", "heroicons"]
  },

  colorMode: {
    preference: "light",
  },

  devServer: {
    // https: {
      // cert: "./certs/d9380e05c8e024c7.crt",
      // key: "./certs/privkey.key",
    // },
    // port: 8080,
    // host: "0.0.0.0",
  },

  // supabase: {
  //   supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
  //   supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_KEY,
  //   redirectOptions: {
  //     login: "/login",
  //     callback: "/confirm",
  //     cookieRedirect: true,
  //   },
  // },
  // POES WEET NIET WAT DIT IS

  // runtimeConfig: {
  //   // Keys within public are also exposed client-side
  //   public: {
  //     supabaseUrl: process.env.SUPABASE_URL,
  //     supabaseKey: process.env.SUPABASE_KEY,
  //   },
  // },
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  $development: {
    //
  }
})