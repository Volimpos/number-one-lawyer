import { ref, onMounted, onUnmounted } from "vue";

const useFloatButtonScroll = (threshold: number = 300) => {
  const isVisible = ref<boolean>(false);
  
  const handleScroll = () => {
    isVisible.value = window.scrollY >= threshold;
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Проверяем начальное состояние
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return { isVisible };
};

export { useFloatButtonScroll };
