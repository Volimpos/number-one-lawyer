import type { Component } from "vue";
import { useScroll } from "~/src/shared/lib/useScroll";

export const useModal = defineStore("modalStore", () => {
  const isModalOpen = ref<boolean>(false);
  const isMaskOpen = ref<boolean>(false);
  const scrollBlock = useScroll();
  const component = ref<Component | null>(null);
  const props = ref<Record<string, any> | null>(null);
  const title = ref<string>("");
  
  const openModal = async (
    childComponent: Component | null = null,
    modalTitle: string = "Диалог",
    modalProps: Record<string, any> = {}
  ) => {
    title.value = modalTitle;
    isMaskOpen.value = true;
    scrollBlock.lock();
    setTimeout(() => {
      isModalOpen.value = true;
    }, 10);
    component.value = childComponent ? markRaw(childComponent) : null;
    props.value = modalProps;
  };

  const closeModal = async () => {
    isModalOpen.value = false;
    setTimeout(() => {
      isMaskOpen.value = false;
      scrollBlock.unlock();
    }, 200);
    component.value = null;
    props.value = null;
  };

  const toggleModal = () => {
    isMaskOpen.value ? closeModal() : openModal();
  };

  return {
    isModalOpen,
    isMaskOpen,
    component,
    props,
    title,
    openModal,
    closeModal,
    toggleModal,
  };
});
