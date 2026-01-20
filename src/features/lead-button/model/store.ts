import { useScroll } from "~/src/shared/lib/useScroll";

export const useModal = defineStore("modalStore", () => {
  const isModalOpen = ref<boolean>(true);
  const isMaskOpen = ref<boolean>(true);
  const scrollBlock = useScroll();

  const openModal = async (
  ) => {
    isMaskOpen.value = true;
    scrollBlock.lock();
    setTimeout(() => {
      isModalOpen.value = true;
    }, 10);
  };

  const closeModal = async () => {
    isModalOpen.value = false;
    setTimeout(() => {
      isMaskOpen.value = false;
      scrollBlock.unlock();
    }, 200);
  };

  const toggleModal = () => {
    isMaskOpen.value ? closeModal() : openModal();
  };

  return {
    isModalOpen,
    isMaskOpen,
    openModal,
    closeModal,
    toggleModal,
  };
});
