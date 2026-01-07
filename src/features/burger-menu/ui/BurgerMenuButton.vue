<template>
  <button
    @click="toggleBurgerMenu"
    class="burger-menu-button"
    :class="{ 'burger-button-accent': isBurgerButtonAccent }"
  >
    <span class="burger-icon-wrapper">
      <Transition name="burger-icon">
        <i
          :key="isBurgerMenuOpen ? 'close' : 'open'"
          :class="['pi', isBurgerMenuOpen ? 'pi-times' : 'pi-bars']"
        ></i>
      </Transition>
    </span>
  </button>
</template>

<script setup lang="ts">
import { useBurgerMenu } from "../model/useBurgerMenu";
import { useBurgerButtonAccent } from "../model/useBurgerButtonAccent";

const { toggleBurgerMenu, isBurgerMenuOpen } = useBurgerMenu();
const { isBurgerButtonAccent } = useBurgerButtonAccent();
</script>

<style scoped>
.burger-menu-button {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  z-index: 100;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: var(--gray500);
  transition: background-color 0.2s ease;
}

.burger-icon-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.burger-icon-wrapper i {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.burger-icon-enter-active,
.burger-icon-leave-active {
  transition: opacity 0.2s ease;
}

.burger-icon-enter-from,
.burger-icon-leave-to {
  opacity: 0;
}

.burger-icon-enter-to,
.burger-icon-leave-from {
  opacity: 1;
}

.burger-button-accent {
  background-color: var(--blueAccent);
  backdrop-filter: blur(10px);
}

@media screen and (max-width: 1024px) {
  .burger-menu-button {
    display: flex;
  }
}
</style>
