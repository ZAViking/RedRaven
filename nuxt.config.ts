// import { Icon } from "#build/components";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript: { strict: false },
  github: {
    repo: 'nuxt-modules/supabase',
  },

  modules: [
    // '@nuxt/content',
    '@nuxt/ui',
    // '@nuxt/Icon',
    // '@nuxtjs/fontaine',
    "@nuxtjs/color-mode"
    "@nuxtjs/supabase",
    // "@nuxt/image",
    // "@nuxt/scripts",
    // "@vueuse/nuxt",
    // '@nuxt/vue-toastification',
  ],

  supabase: {
    // cookieOptions: {
    //   name: 'test',
    //   maxAge: 60 * 60,
    //   sameSite: 'strict',
    //   secure: false,
    // },
    // clientOptions: {
    //   auth: {
    //     flowType: 'implicit',
    //   },
    // },
    // redirect: true,
    redirectOptions: {
      login: '/login',
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

  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    },
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
