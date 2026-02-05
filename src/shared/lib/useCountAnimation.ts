import { ref, watch, type Ref } from "vue";

interface UseCountAnimationOptions {
  duration?: number;
  startPercent?: number;
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

const useCountAnimation = (
  targetValues: number[],
  trigger: Ref<boolean>,
  options: UseCountAnimationOptions = {}
) => {
  const { duration = 2000, startPercent = 0 } = options;

  const animatedValues = ref<number[]>(
    targetValues.map((val) => val * startPercent)
  );
  const hasAnimated = ref(false);

  function animate() {
    if (hasAnimated.value) return;
    hasAnimated.value = true;

    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);

      animatedValues.value = targetValues.map((targetValue) => {
        return (startPercent + easedProgress * (1 - startPercent)) * targetValue;
      });

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  watch(
    trigger,
    (newValue) => {
      if (newValue && !hasAnimated.value) {
        animate();
      }
    },
    { immediate: true }
  );

  return { animatedValues };
};

export { useCountAnimation };
