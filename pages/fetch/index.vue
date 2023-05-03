<script setup lang="ts">
const pages = ["client", "static", "server"]
</script>

<template>
  <Page>
    <span class="text-h1 text-secondary">Fetch</span>
    <span class="text-body1"
      >Click these buttons to test different rendering patterns</span
    >
    <!-- TODO: use buttongroup if it exists -->
    <div class="flex">
      <div v-for="page in pages" :key="page">
        <NuxtLink :to="`/fetch/${page}`">
          <v-btn>{{ page }}</v-btn>
        </NuxtLink>
      </div>
    </div>
  </Page>
</template>

<style scoped>
.flex {
  display: flex;
}
</style>
