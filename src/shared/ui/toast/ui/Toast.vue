<template>
  <ClientOnly>
    <Teleport to="body">
      <div class="toast-container">
        <transition-group name="toast-list" tag="ul">
          <li
            class="toast"
            :class="{
              'toast-error': toast.severity === 'error',
              'toast-info': toast.severity === 'info',
              'toast-success': toast.severity === 'success'
            }"
            v-for="toast in toastList"
            :key="toast.id"
          >
            <div
              class="flex flex-row items-center justify-between gap-2 w-full"
            >
              <p class="summary">{{ toast.summary }}</p>
              <button
              class="toast__close-btn"
                @click="removeToast(toast)"
              >
                <i class="pi pi-times"></i>
              </button>
            </div>
            <div class="details">{{ toast.details }}</div>
          </li>
        </transition-group>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useToast } from "~/src/shared/model/toast/store";
const toastStore = useToast();
const { removeToast } = toastStore;
const { toastList } = storeToRefs(toastStore);
</script>

<style scoped>
.toast-container {
  position: fixed;
  right: 1rem;
  top: 4.5rem;
  width: 20rem;
  height: 80dvh;
  overflow: hidden;
  pointer-events: none;
  z-index: 22;
}

.toast {
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  pointer-events: auto;
}

.toast-info {
  background-color: rgb(202, 213, 247);
}
.toast-info .toast__close-btn,
.toast-info .summary 
{
  color: rgb(0, 51, 205);
}

.toast-error {
  background-color: rgb(247, 202, 202);
}
.toast-error .toast__close-btn,
.toast-error .summary {
  color: rgb(207, 0, 0);
}

.toast-success {
  background: rgb(202, 255, 202);
}

.toast-success .toast__close-btn,
.toast-success .summary {
  color: rgb(0, 134, 0);
}

.summary {
  color: var(--gray500);
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
.details {
  color: var(--gray500);
  font-size: 0.875rem;
  padding-bottom: 0.5rem;
}

.toast-list-enter-active,
.toast-list-leave-active {
  transition: all 300ms ease-in-out;
}
.toast-list-enter-from,
.toast-list-leave-to {
  opacity: 0;
  transform: translateX(5rem);
}
</style>
