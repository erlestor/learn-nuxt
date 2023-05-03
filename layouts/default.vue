<script setup lang="ts">
const drawer = useState(() => false)

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Fetch", link: "/fetch" },
]
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
      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
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
