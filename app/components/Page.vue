<template>
  <div class="page">
    <slot />
  </div>
</template>
<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-top: 28px;
}
</style>
