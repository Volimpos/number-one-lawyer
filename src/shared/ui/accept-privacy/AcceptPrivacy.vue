<template>
  <div>
    <label class="flex flex-row items-center justify-start gap-3 w-full">
      <Checkbox v-model:checked="isAgree" />
      <p class="policy-text">
        Согласна(-ен) с
        <NuxtLink to="/privacy">политикой конфиденциальности сайта</NuxtLink>
      </p>
    </label>
    <p class="error">{{ props.error }}</p>
  </div>
</template>

<script setup lang="ts">
import { Checkbox } from "../checkbox";
const isAgree = defineModel("isAgree", { default: false });
const props = defineProps({
  error: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.policy-text {
  font-size: 0.875rem;
  color: var(--gray400);
  font-weight: 400;
}

.error {
  margin-top: 0.5rem;
  color: rgb(200, 53, 53);
  font-size: 0.875rem;
}
</style>
