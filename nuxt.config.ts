// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/supabase',
    '@nuxt/ui'
  ],
  // auth: {
  //   strategies: {
  //     discord: {
  //       clientId: '1247723763232018484',
  //       clientSecret: 'MsD3a0BD8Zj0s3yiJokanV_X15OjKJ7Q'
  //     },
  //   }
  // },
  css: ['@/assets/main.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  supabase: {
    // Options
    // ['@/utils/supabase/'],
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
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