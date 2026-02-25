import { computed, ref, type Ref } from "vue";

interface UseStaggeredRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

interface StaggeredItem<T> {
  item: T;
  style: { "--stagger-index": number };
}

/**
 * Composable для плавной staggered-анимации через CSS transitions.
 *
 * Использование:
 * 1. Применить v-for с staggeredItems (элементы всегда в DOM)
 * 2. Добавить класс видимости на контейнер: :class="{ 'visible': isVisible }"
 * 3. В CSS: задать начальное состояние, transition, и конечное состояние при .visible
 *
 * CSS пример:
 * ```css
 * .item {
 *   opacity: 0;
 *   transform: translateY(1rem);
 *   transition: opacity 0.6s ease, transform 0.6s ease;
 *   transition-delay: calc(var(--stagger-index) * 100ms);
 *   will-change: transform, opacity;
 * }
 * .container--visible .item {
 *   opacity: 1;
 *   transform: translateY(0);
 * }
 * ```
 */
const useStaggeredReveal = <T>(
  items: T[],
  _targetRef: Ref<HTMLElement | null>,
  _options: UseStaggeredRevealOptions = {}
) => {
  const isVisible = ref(true);

  // Элементы всегда в DOM с индексом для CSS transition-delay
  const staggeredItems = computed<StaggeredItem<T>[]>(() => {
    return items.map((item, index) => ({
      item,
      style: { "--stagger-index": index },
    }));
  });

  return { isVisible, staggeredItems };
};

export { useStaggeredReveal };
export type { UseStaggeredRevealOptions, StaggeredItem };
