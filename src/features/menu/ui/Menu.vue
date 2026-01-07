<template>
  <ul class="menu-container">
    <NuxtLink
      class="menu-item"
      :to="item.link"
      v-for="item in menuItems"
      :key="item.label"
      >{{ item.label }}</NuxtLink
    >
  </ul>
</template>

<script setup lang="ts">
const menuItems = [
  {
    label: "Автоюрист",
    link: "/autolawyer",
  },
  {
    label: "Жилищное право",
    link: "/housing_law",
  },
  {
    label: "Защита прав потребителей",
    link: "/customer_law",
  },
  {
    label: "Земельное право",
    link: "/land_law",
  },
  {
    label: "Миграционное право",
    link: "/migration_law",
  },
  {
    label: "Наследственное право",
    link: "/inheritance_law",
  },
  {
    label: "Семейное право",
    link: "/family_law",
  },
  {
    label: "Трудовое право",
    link: "/labor_law",
  },
  {
    label: "Уголовное право",
    link: "/criminal_law",
  },
];
</script>

<style scoped>
.menu-container {
  background-color: var(--white);
  padding-block: 0.75rem;
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
