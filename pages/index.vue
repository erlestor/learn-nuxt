<script lang="ts"></script>

<template>
  <main>
    <span class="text-h1 text-secondary">Home</span>
    <NuxtLink to="/about">
      <v-btn color="primary">About</v-btn>
    </NuxtLink>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  height: 100vh;
  gap: 16px;
}
</style>
