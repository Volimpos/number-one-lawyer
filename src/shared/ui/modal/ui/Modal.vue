<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition name="fade">
        <div class="modal-overlay" v-if="isMaskOpen">
          <Transition name="slide-up">
            <div class="modal" v-if="isModalOpen">
              <div class="modal-header">
                <div class="header-title">
                  {{ title }}
                </div>
                <button class="close-modal" @click="toggleModal">
                  <i class="pi pi-times"></i>
                </button>
              </div>

              <div class="modal-body">
                <component
                  :is="component"
                  v-if="component"
                  v-bind="props"
                ></component>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useModal } from "~/src/shared/model/modal/store";

const modalStore = useModal();

const { isModalOpen, isMaskOpen, component, props, title } =
  storeToRefs(modalStore);
const { toggleModal } = modalStore;
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background: #00000062;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(0.25rem);
  overflow: hidden;
  z-index: 999;
}

.modal {
  background-color: white;
  transform: translateY(0);
  width: 36rem;
  padding: 2rem;
  border-radius: 0.5rem;
}

.modal-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--gray600);
}

.modal-body {
  margin-top: 0.5rem;
  overflow-y: auto;
  max-height: calc(100dvh - 10rem);
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}
.modal-body:hover {
  scrollbar-color: var(--gray150) transparent;
}

.modal-body::-webkit-scrollbar {
  width: 6px;
}

.modal-body::-webkit-scrollbar-track {
  background: transparent;
}

.modal-body::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 3px;
  transition: 200ms;
}
.modal-body:hover::-webkit-scrollbar-thumb {
  background: var(--gray150);
}

.modal-body::-webkit-scrollbar-thumb:hover {
  background: var(--gray150);
}

.close-modal {
  color: var(--gray500);
}

@media screen and (max-width: 64rem) {
  .modal {
    width: 100%;
    height: 100dvh;
    border-radius: 0;
    padding: 1rem;
  }
  .modal-body {
    max-height: 92%;
    height: 92%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 200ms ease-out;
}
.slide-up-leave-active {
  transition: all 200ms ease-in;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
