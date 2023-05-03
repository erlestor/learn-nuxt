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
})
