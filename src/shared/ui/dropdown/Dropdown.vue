<template>
  <div
    ref="triggerRef"
    @mouseenter="isDropdownOpen = true"
    @mouseleave="isDropdownOpen = false"
    class="dropdown-container"
    @click.stop
  >
    <Button size="large" severity="secondary">
      <slot></slot>
      <i
        class="pi pi-angle-down ml-2 duration-200"
        :class="{ 'rotate-180': isDropdownOpen }"
      ></i>
    </Button>

    <Transition name="slide">
      <ul v-if="isDropdownOpen" class="dropdown-menu">
        <li
          class="dropdown-item"
          :class="{ 'item-active': active === item.value }"
          v-for="item in props.items"
          @click="item.action"
        >
          <span class="dropdown-content">{{ item.label }}</span>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { Button } from "../button";
import type { DropdownItemInterface } from "./types";

const isDropdownOpen = ref<boolean>(false);

onMounted(() => {
  document.addEventListener("click", () => {
    isDropdownOpen.value = false;
  });
});

const props = defineProps<{
  items?: DropdownItemInterface[];
  active?: string;
}>();
</script>

<style scoped>
.dropdown-container {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  max-height: 500px; /* достаточно большое значение */
  opacity: 1;
  padding: 0.25rem;
  margin: 0;
  list-style: none;
  background: white;
  position: absolute;
  top: 100%;
  z-index: 9;
  left: 0;
  width: auto;
  max-width: auto;
  border: 1px solid var(--gray100);
  border-radius: 0.15rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
  max-width: 70vw;
  overflow: hidden;
}

.dropdown-item {
  margin-block: 0.25rem;
  padding: 0.6rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--gray500);
  user-select: none;
  border-radius: 0.15rem;
}

.dropdown-item:hover {
  background-color: var(--gray100);
}
.dropdown-item:active {
  background-color: var(--gray150);
}

.item-active {
  background-color: var(--gray150);
}

/* Обязательно задай начальное состояние */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
