<script setup lang="ts">
import { useTheme } from "vuetify"
const drawer = useState(() => false)

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Fetch", link: "/fetch" },
]

const options = ["This does nothing", "This also does nothing"]

const theme = useTheme()
const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark ? "light" : "dark")
</script>

<template>
  <v-layout>
    <v-app-bar>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Learn Nuxt</v-toolbar-title>
      <v-spacer />
      <v-btn
        @click="toggleTheme"
        variant="text"
        :icon="
          theme.global.current.value.dark
            ? 'mdi-weather-night'
            : 'mdi-weather-sunny'
        "
      />
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" variant="text" icon="mdi-dots-vertical"></v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(option, index) in options"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ option }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <div v-for="{ link, title } in navLinks">
          <NuxtLink :to="link">
            <v-list-item :title="title" />
          </NuxtLink>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
