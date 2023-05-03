<script setup lang="ts">
const counter = useState(() => 0)
const msg = useState(() => "Well props are working")
</script>

<template>
  <div class="page">
    <span class="text-h1 text-secondary">Home</span>
    <span class="text-h3">{{ counter }}</span>
    <div>
      <v-btn color="primary" @click="counter++">Increment</v-btn>
      <v-btn color="secondary" @click="counter--">Descrement</v-btn>
    </div>
    <ComponentWithProps :msg="msg" />
    <div>
      <v-btn
        @click="msg = 'And I can change them too'"
        :disabled="msg === 'And I can change them too'"
        >Change props</v-btn
      >
    </div>
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
