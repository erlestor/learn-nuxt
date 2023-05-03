<script setup lang="ts">
const { header } = defineProps(["header"])

const { data, pending, refresh } = await useLazyFetch("/api/getCurrentTime", {
  key: "time",
  transform: (data) => data.substring(0, 19),
})
</script>

<template>
  <Page>
    <span class="text-h2 text-secondary">{{ header }}</span>
    <span class="text-h4" v-if="data">Last fetch at {{ data }}</span>
    <v-progress-circular
      v-if="pending && !data"
      indeterminate
      :size="40"
    ></v-progress-circular>
    <v-btn
      color="primary"
      :loading="pending && data"
      :disabled="pending"
      @click="refresh"
      >refresh</v-btn
    >
    <NuxtLink to="/fetch">
      <v-btn>Back</v-btn>
    </NuxtLink>
  </Page>
</template>
