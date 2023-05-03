<script setup lang="ts">
const { data } = await useFetch("/api/hello", {
  transform: (data) => data.substring(0, 19),
})
</script>

<template>
  <div class="page">
    <span class="text-h1 text-secondary">Fetch</span>
    <span class="text-h3">Data fetched at {{ data }}</span>
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
