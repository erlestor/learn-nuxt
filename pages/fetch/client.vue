<script setup lang="ts">
const result = useLazyFetch("/api/getCurrentTime", {
  key: "time",
  transform: (data) => data.substring(0, 19),
})
</script>

<template>
  <FetchPage header="Client Side Rendering (SPA)" :result="result" />
</template>
