<template>
  <Teleport to="body">
    <Transition name="fade">
      <div class="modal-overlay" v-if="isMaskOpen" @click="toggleModal">
        <Transition name="slide-up">
          <div class="modal" v-if="isModalOpen" @click.stop>
            <div class="modal-header">
              <div class="header-title">
                {{ props?.title ?? "Диалог" }}
              </div>
              <Button
                text
                shape="circle"
                severity="secondary"
                @click="toggleModal"
              >
                <i class="pi pi-times"></i>
              </Button>
            </div>

            <div class="modal-body">
              <component :is="component" v-if="component"></component>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useModal } from "~/src/shared/model/modal/store";
import { Button } from "~/src/shared/ui/button";
const modalStore = useModal();

const { isModalOpen, isMaskOpen, component, props } = storeToRefs(modalStore);
const { toggleModal } = modalStore;
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background: var(--contrastTransparent);
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(0.25rem);
  overflow: hidden;
}

.modal {
  background-color: white;
  transform: translateY(0);
  width: 34rem;
  padding: 1.5rem;
  border-radius: 0.25rem;
}

.modal-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
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

@media screen and (max-width: 64rem) {
  .modal {
    width: 100%;
    height: 100dvh;
    border-radius: 0;
    padding: 1rem;
  }
  .modal-body {
    max-height: calc(100% - 4.5rem);
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
