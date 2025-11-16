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
            }"
            v-for="toast in toastList"
            :key="toast.id"
          >
            <div
              class="flex flex-row items-center justify-between gap-2 w-full"
            >
              <p class="summary">{{ toast.summary }}</p>
              <Button
                text
                severity="contrast"
                size="small"
                @click="removeToast(toast)"
              >
                <i class="pi pi-times"></i>
              </Button>
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
import { Button } from "~/src/shared/ui/button";
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
  background-color: var(--contrast);
}

.toast-error {
  background-color: var(--contrast);
}

.toast-error .summary {
  color: rgba(255, 0, 0, 0.9);
}

.summary {
  color: white;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
.details {
  color: var(--gray200);
  font-size: 0.875rem;
  padding-bottom: 0.5rem;
}

.toast-list-enter-active,
.toast-list-leave-active {
  transition: all 400ms ease-in-out;
}
.toast-list-enter-from,
.toast-list-leave-to {
  opacity: 0;
  transform: translateX(5rem);
}
</style>
