<template>
  <ul class="menu-container">
    <NuxtLink
      class="menu-item"
      :to="item.link"
      v-for="item in spheres"
      :key="item.label"
      >{{ item.label }}</NuxtLink
    >
  </ul>
</template>

<script setup lang="ts">
import spheres from "../../model/menu/store";
</script>

<style scoped>
.menu-container {
  background-color: var(--white);
  padding-block: 0.75rem;
  border-radius: inherit;
}
.menu-item {
  display: block;
  padding: 0.5rem 1rem;
  color: var(--gray600);
  white-space: nowrap;
}
.menu-item:hover {
  background-color: var(--gray100);
}
</style>
