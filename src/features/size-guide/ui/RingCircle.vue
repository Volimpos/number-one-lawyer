<template>
  <div
    v-if="isValid"
    class="circle"
    :style="{
      width: sizePx + 'px',
      height: sizePx + 'px',
    }"
  ></div>
  <p v-else class="error-ring-size">недопустимое значение диаметра</p>
</template>

<script setup lang="ts">
const props = defineProps({
  diameterMm: {
    type: String,
    required: true,
  },
});

const numberDiameter = computed(() => {
  const num = parseFloat(props.diameterMm);
  return isNaN(num) ? null : num;
});

const isValid = computed(
  () => numberDiameter.value !== null && numberDiameter.value > 0
);

const sizePx = computed(() => {
  if (!numberDiameter.value) return null;
  return numberDiameter.value * (96 / 25.4);
});
</script>

<style scoped>
.circle {
  border-radius: 50%;
  border: 1.5px solid var(--contrast);
}
.error-ring-size {
  font-size: 0.875rem;
  color: var(--gray400);
}
</style>
