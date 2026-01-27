<template>
  <div class="header-container">
    <header class="header">
    <NuxtLink to="/" class="logo">
      <img
        class="logo__image"
        :src="logoMain"
        alt="Юридическая компания №1 лого"
      />
      </NuxtLink>
      <nav class="nav">
        <div
          class="nav-item nav-item--services"
          :class="{ 'nav-item--open': isServicesOpen }"
          ref="servicesRef"
        >
          <a href="#" @click.prevent="isServicesOpen = !isServicesOpen">
            Услуги
            <i
              class="pi pi-chevron-down chevron"
              :class="{ 'chevron--open': isServicesOpen }"
            ></i>
          </a>
          <Transition name="variant-fade">
            <div v-if="isServicesOpen" class="dropdown">
              <Menu />
            </div>
          </Transition>
        </div>
        <a
          href="https://go.2gis.com/XAbrT"
          target="_blank"
          class="nav-item"
          active-class="nav-item--active"
        >
          Отзывы
        </a>
        <NuxtLink
          to="/cases"
          class="nav-item nav-item--cases"
          active-class="nav-item--active"
          >Кейсы</NuxtLink
        >
      </nav>
      <div class="lead-btn-container">
        <LeadButton />
      </div>
      <BurgerMenuButton />
    </header>
    <BurgerMenu />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { BurgerMenuButton } from "~/src/features/burger-menu";
import { LeadButton } from "~/src/features/lead-button";
import { Menu } from "~/src/shared/ui/menu";
import { BurgerMenu } from "~/src/features/burger-menu";
import logoMain from "~/src/shared/assets/logo.svg";

const isServicesOpen = ref(false);
const servicesRef = ref<HTMLElement | null>(null);
const route = useRoute();

const handleClickOutside = (event: MouseEvent) => {
  if (!servicesRef.value) return;

  const target = event.target as Node | null;
  if (target && !servicesRef.value.contains(target)) {
    isServicesOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

watch(
  () => route.fullPath,
  () => {
    isServicesOpen.value = false;
  }
);
</script>

<style scoped>
.header-container {
  position: absolute;
  top: 1rem;
  left: 0;
  width: 100%;
  margin: 0 auto;
  z-index: 2;
  user-select: none;
}
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding-inline: 5rem;
  margin: 0 auto;
}
.logo {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.logo__image {
  width: 50px;
  height: 50px;
  display: block;
  object-fit: contain;
  image-rendering: -webkit-optimize-contrast;
  backface-visibility: hidden;
  transform: translateZ(0);
}
.nav {
  gap: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.nav-item {
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}
.nav-item:hover {
  background-color: var(--blueShadow);
}

.nav-item--active {
  background-color: var(--blueShadow);
}

/* Выделение кнопки Кейсы для всех путей, начинающихся с /cases */
.nav-item--cases.router-link-active {
  background-color: var(--blueShadow);
}

.nav-item--open {
  background-color: var(--blueShadow);
}
.chevron {
  font-size: 0.5rem;
  transition: transform 0.2s ease;
}
.chevron--open {
  transform: rotate(180deg);
}
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  background-color: var(--white);
  border-radius: 0.5rem;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
  z-index: 10;
}
.variant-fade-enter-active,
.variant-fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.variant-fade-enter-from,
.variant-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
.variant-fade-enter-to,
.variant-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.lead-btn-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

@media (max-width: 96rem) {
  .header {
    padding-inline: 2rem;
  }
}
@media (max-width: 80rem) {
  .header {
    padding-inline: 1rem;
  }
}

@media (max-width: 64rem) {
  .logo,
  .logo__image
  {
    width: 43px;
    height: 43px;
  }

  .nav,
  .lead-btn-container {
    display: none;
  }
}
</style>
