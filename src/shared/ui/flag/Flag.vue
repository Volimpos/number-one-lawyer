<template>
  <div class="flag-container">
    <div class="flag flag-base" :class="props.variant">
      <span class="flag__number">{{ props.title }}</span>
      <span class="flag__text">{{ props.text }}</span>
    </div>
    <div class="flag flag-shadow"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  text: string;
  variant: "primary" | "secondary";
}>();
</script>

<style scoped>
.flag-container {
  position: relative;
}

.flag {
  width: 6.25rem;
  min-height: 9rem;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
}

.flag-base {
  display: flex;
  gap: 0.5rem;
  align-items: start;
  position: relative;
  padding: 0 0.5rem 1rem;
  flex-direction: column;
  justify-content: center;
  color: var(--white);
  z-index: 2;
}

.flag-base.primary {
  background: var(--primaryDark);
}

.flag-base.secondary {
  background: rgb(82, 68, 124);
}

.flag-shadow {
  background: rgba(0, 0, 0, 0.06);
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
  z-index: 1;
}

.flag__number {
  font-size: 1.25rem;
  line-height: 1;
  font-weight: 700;
}

.flag__text {
  font-size: 0.75rem;
  line-height: 1;
  text-align: left;
}
</style>
