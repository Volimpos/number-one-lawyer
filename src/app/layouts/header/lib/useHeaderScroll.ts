import { ref, onMounted, onUnmounted } from "vue";

const useHeaderScroll = (threshold: number = 300) => {
  const isTransparent = ref<boolean>(false);
  const handleScroll = () => {
    isTransparent.value = window.scrollY > threshold;
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return { isTransparent };
};

export { useHeaderScroll };
