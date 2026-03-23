<template>
  <div class="flag-container">
    <a
      :href="props.link"
      target="_blank"
      class="flag flag-base"
      :class="props.variant"
    >
      <span class="flag__number" v-if="props.title">{{ props.title }}</span>
      <img
        v-if="props.icon"
        :src="props.icon"
        :alt="props.title"
        class="flag__icon"
      />
      <span class="flag__text">{{ props.text }}</span>
    </a>
    <div class="flag flag-shadow"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
  icon?: string;
  text: string;
  variant: "primary" | "secondary";
  link: string;
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
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  user-select: none;
  transition: all 0.2s ease;
}

.flag:hover {
  scale: 1.05;
}

.flag-base {
  display: flex;
  gap: 0.5rem;
  align-items: center;
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
  background: rgb(247, 247, 247);
  color: var(--gray600);
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
.flag__icon {
  height: 2.5rem;
  object-fit: contain;
}

.flag__text {
  font-size: 0.75rem;
  line-height: 1;
}
</style>
