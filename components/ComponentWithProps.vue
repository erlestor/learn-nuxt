<script setup lang="ts">
const props = defineProps(["msg"])
</script>

<template>
  <span class="text-body1">{{ props.msg }}</span>
</template>

<style scoped></style>
