<template>
  <label class="checkbox">
    <input type="checkbox" v-model="checked" />
    <span class="checkmark"></span>
  </label>
</template>

<script setup lang="ts">
const checked = defineModel("checked", { default: true });
</script>

<style scoped>
.checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  font-size: 1rem;
  outline: none;
}

.checkbox input {
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;
  outline: none;
}

.checkmark {
  width: 1.4rem;
  height: 1.4rem;
  background: white;
  border: 1px solid var(--gray600);
  border-radius: 3px;
  position: relative;
}

.checkbox input:checked + .checkmark {
  background: var(--gray600);
}

.checkbox input:checked + .checkmark::after {
  content: "";
  position: absolute;
  top: 4px;
  left: 7.5px;
  width: 0.4rem;
  height: 0.65rem;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  border-radius: 1px;
}
</style>
