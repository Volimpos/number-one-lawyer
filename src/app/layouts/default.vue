<template>
  <div class="app-root">
    <div class="app-background">
      <div class="bg-blob bg-blob--left"></div>
      <div class="bg-blob bg-blob--right"></div>
      <div class="bg-blob bg-blob--center-top"></div>
      <div class="bg-blob bg-blob--center-bottom"></div>
    </div>

    <div class="app-content">
      <Header />
      <slot />
      <Footer />
      <FloatButton/>
      <Modal />
      <Toast/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Footer } from "~/src/app/layouts/footer";
import { Header } from "~/src/app/layouts/header";
import { Modal } from "~/src/shared/ui/modal";
import { useModal } from "~/src/shared/model/modal/store";
import { Toast } from "~/src/shared/ui/toast";
import { FloatButton } from "~/src/widgets/float-button";
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
  background-color: var(--white);
}

.app-background {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.app-content {
  position: relative;
  z-index: 1;
}

.bg-blob {
  position: absolute;
  border-radius: 9999px;
  filter: blur(100px);
  opacity: 0.12;
  will-change: transform, opacity;
}

.bg-blob--left {
  width: 40vw;
  height: 40vw;
  background-color: rgb(0, 110, 255, 0.6); /* небесно-фиолетовый, бледнее */
  top: 50%;
  left: 50%;
  animation: blob-carousel 10s linear infinite;
  animation-delay: 0s;
}

.bg-blob--right {
  width: 40vw;
  height: 40vw;
  background-color: rgb(
    163,
    124,
    255,
    0.5
  ); /* небесно-фиолетовый, чуть теплее и бледнее */
  top: 50%;
  left: 50%;
  animation: blob-carousel 10s linear infinite;
  animation-delay: -8s;
}

.bg-blob--center-top {
  width: 32vw;
  height: 32vw;
  background-color: rgba(250, 200, 80, 0.35); /* золотой, ещё бледнее */
  top: 50%;
  left: 50%;
  animation: blob-carousel 10s linear infinite;
  animation-delay: -16s;
}

.bg-blob--center-bottom {
  width: 36vw;
  height: 36vw;
  background-color: rgba(
    245,
    185,
    60,
    0.35
  ); /* золотой, потемнее и ещё бледнее */
  top: 50%;
  left: 50%;
  animation: blob-carousel 10s linear infinite;
  animation-delay: -24s;
}

@keyframes blob-carousel {
  0% {
    transform: translate(-50%, -50%) translate(-36vw, 0vh) scale(1);
  }
  25% {
    transform: translate(-50%, -50%) translate(0vw, -30vh) scale(1.06);
  }
  50% {
    transform: translate(-50%, -50%) translate(36vw, 0vh) scale(1.02);
  }
  75% {
    transform: translate(-50%, -50%) translate(0vw, 26vh) scale(1.04);
  }
  100% {
    transform: translate(-50%, -50%) translate(-36vw, 0vh) scale(1);
  }
}

@media (max-width: 64rem) {
  .bg-blob {
    filter: blur(70px);
    opacity: 0.3;
  }

  .bg-blob--left,
  .bg-blob--right,
  .bg-blob--center-top,
  .bg-blob--center-bottom {
    width: 55vw;
    height: 55vw;
  }

  .bg-blob--left {
    top: -15vh;
    left: -25vw;
  }

  .bg-blob--right {
    top: 25vh;
    right: -25vw;
  }

  .bg-blob--center-top {
    top: 5vh;
  }

  .bg-blob--center-bottom {
    bottom: -15vh;
  }
}
</style>
