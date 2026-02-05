import { ref, onMounted, onUnmounted, type Ref } from "vue";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

const useIntersectionObserver = (
  targetRef: Ref<HTMLElement | null>,
  options: UseIntersectionObserverOptions = {}
) => {
  const { threshold = 0.3, rootMargin = "0px", once = true } = options;

  const isVisible = ref(false);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (typeof window === "undefined") return;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            if (once && observer && targetRef.value) {
              observer.unobserve(targetRef.value);
            }
          } else if (!once) {
            isVisible.value = false;
          }
        });
      },
      { threshold, rootMargin }
    );

    if (targetRef.value) {
      observer.observe(targetRef.value);
    }
  });

  onUnmounted(() => {
    observer?.disconnect();
  });

  return { isVisible };
};

export { useIntersectionObserver };
