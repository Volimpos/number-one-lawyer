<template>
  <div class="app-root">
    <Header />
    <slot />
    <Footer />
    <Modal />
  </div>
</template>

<script setup lang="ts">
import { Footer } from "~/src/app/layouts/footer";
import { Header } from "~/src/app/layouts/header";

import { Modal } from "~/src/shared/ui/modal";
import { useModal } from "~/src/shared/model/modal/store";

const route = useRoute();
const { closeModal } = useModal();

// Закрываем при смене pathname
watch(
  () => route.path,
  () => {
    closeModal();
  }
);
</script>

<style scoped>
.app-root {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  /* Базовый цвет фона */
  background-color: var(--white);
  /* Сверху лежит линейный градиент, который к низу страницы плавно сводит цвет к белому.
     Под ним — два овальных пятна слева и справа + еле заметное жёлто-оранжевое пятно по центру,
     каждая «полоса» высотой 160vh и повторяется по вертикали */
  background-image:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 88%,
      rgba(255, 255, 255, 0.7) 93%,
      rgba(255, 255, 255, 1) 97%,
      rgba(255, 255, 255, 1) 100%
    ),
    radial-gradient(
      ellipse at left center,
      rgba(150, 159, 255, 0.18) 0,
      rgba(150, 159, 255, 0.14) 30%,
      transparent 70%
    ),
    radial-gradient(
      ellipse at right center,
      rgba(150, 159, 255, 0.18) 0,
      rgba(150, 159, 255, 0.14) 30%,
      transparent 70%
    ),
    radial-gradient(
      circle at center top,
      rgba(255, 204, 128, 0.08) 0,
      transparent 60%
    );
  background-size:
    100% 100%,
    35% 160vh,
    35% 160vh,
    60% 160vh;
  background-repeat: no-repeat, repeat-y, repeat-y, repeat-y;
  background-position:
    center top,
    left top,
    right top,
    center top;
  z-index: 0;
}
</style>
