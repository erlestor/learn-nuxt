// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@invictus.codes/nuxt-vuetify",
    // "@nuxtjs/eslint-module"
  ],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: "dark",
      },
    },
  },
  app: {
    head: {
      title: "Learn Nuxt",
      meta: [
        {
          name: "description",
          content:
            "This is my amazing site aimed at learning Nuxt and Vuetify.",
        },
      ],
    },
  },
  routeRules: {
    "/fetch/client": { ssr: false },
    "/fetch/server": { ssr: true },
    "/fetch/static": { swr: true },
  },
})
