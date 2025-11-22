<template>
  <component :is="sizeComponent"></component>
</template>

<script setup lang="ts">
const props = defineProps<{
  category: Categories;
}>();
import SizeGuideRings from "./SizeGuideRings.vue";
import SizeGuideEarrings from "./SizeGuideEarrings.vue";
import SizeGuideBracelets from "./SizeGuideBracelets.vue";
import SizeGuideNecklace from "./SizeGuideNecklace.vue";
import type { Categories } from "../model/types";

const variants: Record<Categories, Component> = {
  rings: SizeGuideRings,
  earrings: SizeGuideEarrings,
  bracelets: SizeGuideBracelets,
  necklace: SizeGuideNecklace,
};

const sizeComponent = computed(() => {
  return variants[props.category] ? markRaw(variants[props.category]) : null;
});
</script>

<style scoped></style>
