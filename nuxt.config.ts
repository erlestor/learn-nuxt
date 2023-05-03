// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@invictus.codes/nuxt-vuetify",
    // cause eslint sucks apparently
    // ["@nuxtjs/eslint-module", { fix: true }],
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
})
