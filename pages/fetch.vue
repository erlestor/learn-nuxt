<script setup lang="ts">
const { data, pending } = await useFetch("/api/getCurrentTime", {
  lazy: true,
  transform: (data) => data.substring(0, 19),
})

// ved navigasjon bruke den data som sist va brukt, men refetche også ny som erstatte den gamle
// ved refresh vente den på data før den viser siden, alle sidan e ssr?
// trodd man kunna bruk useLazyFetch for å fikse mennjjj
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
