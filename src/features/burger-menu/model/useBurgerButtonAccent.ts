const isBurgerButtonAccent = ref(false);

const handleScroll = () => {
  if (typeof window === "undefined") return;

  isBurgerButtonAccent.value = window.scrollY > 300;
};

export const useBurgerButtonAccent = () => {
  onMounted(() => {
    if (typeof window === "undefined") return;

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
  });

  onBeforeUnmount(() => {
    if (typeof window === "undefined") return;

    window.removeEventListener("scroll", handleScroll);
  });

  return {
    isBurgerButtonAccent,
  };
};
