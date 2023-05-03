<script setup lang="ts">
const { data, pending } = useLazyFetch("/api/getCurrentTime", {
  transform: (data) => data.substring(0, 19),
})

// virke som om den bruke den data som sist va brukt, men refetche også ny i tilfelle den e oppdatert egt
// ved refresh vente den på data før den viser siden, derav useLazyFetch e nyttig
</script>

<template>
  <div class="page">
    <span class="text-h1 text-secondary">Fetch</span>
    <span class="text-h4" v-if="data">Last fetch at {{ data }}</span>
    <span class="text-h4" v-if="pending">Loading...</span>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  gap: 16px;
}
</style>
