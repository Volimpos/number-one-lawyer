<template>
  <component
    :is="as"
    class="skeleton"
    :class="{ 'skeleton--shimmer': shimmer }"
    :style="styleObject"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";

type SkeletonTag = keyof HTMLElementTagNameMap;

const props = withDefaults(
  defineProps<{
    as?: SkeletonTag;
    width?: string;
    height?: string;
    size?: string;
    radius?: string;
    circle?: boolean;
    clipPath?: string;
    shimmer?: boolean;
    duration?: string;
    baseColor?: string;
    highlightColor?: string;
  }>(),
  {
    as: "div",
    shimmer: true,
    duration: "1.35s",
    baseColor: "var(--gray100)",
    highlightColor: "rgba(255, 255, 255, 0.65)",
  },
);

const styleObject = computed(() => {
  const w = props.size ?? props.width;
  const h = props.size ?? props.height;

  return {
    ...(w ? { width: w } : null),
    ...(h ? { height: h } : null),
    ...(props.clipPath ? { clipPath: props.clipPath } : null),
    borderRadius: props.circle ? "9999px" : props.radius,
    backgroundColor: props.baseColor,
    "--skeleton-highlight": props.highlightColor,
    "--skeleton-duration": props.duration,
  } as Record<string, string>;
});
</script>

<style scoped>
.skeleton {
  display: block;
  position: relative;
  overflow: hidden;
  user-select: none;
}

.skeleton--shimmer::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    var(--skeleton-highlight) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  transform: translateX(-100%);
  animation: skeleton-shimmer var(--skeleton-duration) ease-in-out infinite;
}

@keyframes skeleton-shimmer {
  100% {
    transform: translateX(100%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .skeleton--shimmer::before {
    animation: none;
    transform: none;
    opacity: 0.35;
  }
}
</style>

