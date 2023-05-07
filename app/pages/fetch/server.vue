<script setup lang="ts">
const result = useFetch("/api/getCurrentTime", {
  key: "time",
  transform: (data) => data.substring(0, 19),
})
</script>

<template>
  <FetchPage header="Server Side Rendering (SSR)" :result="result" />
</template>
