import type { Component } from "vue";
import { useScroll } from "~/src/shared/lib/useScroll";
type DrawerListeners = Record<string, (...args: any[]) => any>;

export const useBottomDrawer = defineStore("bottomDrawerStore", () => {
  const isDrawerOpen = ref<boolean>(false);
  const isDrawerMaskOpen = ref<boolean>(false);
  const scrollBlock = useScroll();
  const component = ref<Component | null>(null);
  const props = ref<Record<string, any> | null>(null);
  const listeners = ref<DrawerListeners>({});

  const openDrawer = async (
    childComponent: Component | null = null,
    componentProps: Record<string, any> = {},
    componentListeners: DrawerListeners = {}
  ) => {
    component.value = childComponent ? markRaw(childComponent) : null;
    props.value = componentProps;
    listeners.value = componentListeners;

    isDrawerMaskOpen.value = true;
    scrollBlock.lock();
    setTimeout(() => {
      isDrawerOpen.value = true;
    }, 10);
  };

  const closeDrawer = async () => {
    isDrawerOpen.value = false;
    setTimeout(() => {
      isDrawerMaskOpen.value = false;
      scrollBlock.unlock();
    }, 200);
    component.value = null;
    props.value = {};
  };

  const toggleDrawer = () => {
    isDrawerMaskOpen.value ? closeDrawer() : openDrawer();
  };

  return {
    isDrawerOpen,
    isDrawerMaskOpen,
    component,
    props,
    listeners,
    openDrawer,
    closeDrawer,
    toggleDrawer,
  };
});
