<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        class="bottom-drawer-overlay"
        v-if="isDrawerMaskOpen"
        @click="closeDrawer"
      >
        <Transition name="slide-up">
          <div class="bottom-drawer" v-if="isDrawerOpen" @click.stop>
            <div class="w-full flex items-center justify-end px-4 pt-4">
              <Button
                shape="circle"
                severity="secondary"
                text
                @click="closeDrawer"
              >
                <i class="pi pi-times"></i>
              </Button>
            </div>
            <div class="drawer-body">
              <component
                :is="component"
                v-if="component"
                v-bind="props"
                v-on="drawerStore.listeners"
              ></component>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { Button } from "~/src/shared/ui/button";
import { useBottomDrawer } from "~/src/shared/model/bottom-drawer/store";
const drawerStore = useBottomDrawer();
const { isDrawerOpen, isDrawerMaskOpen, component, props, listeners } =
  storeToRefs(drawerStore);
const { closeDrawer } = drawerStore;
</script>

<style scoped>
.bottom-drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background: var(--contrastTransparent);
  z-index: 33;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.bottom-drawer {
  width: 100%;
  background-color: white;
  padding-bottom: 2rem;
  border-radius: 0.5rem 0.5rem 0 0;
}
.drawer-body {
  padding-top: 1rem;
  height: 85%;
  width: 100%;
  overflow: hidden;
  padding: 1.5rem;
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
