<template>
  <input type="text" class="input-text" v-model="text" />
</template>

<script setup lang="ts">
const text = defineModel("text", { default: "" });
</script>

<style scoped>
.input-text {
  width: 100%;
  border: 1px solid var(--gray300);
  border-radius: 0.25rem;
  outline: none;
  height: 3rem;
  padding-inline: 1rem;
  color: var(--gray600);
  font-weight: 500;
}

.input-text:focus {
  border: 1px solid var(--gray500);
}
</style>
