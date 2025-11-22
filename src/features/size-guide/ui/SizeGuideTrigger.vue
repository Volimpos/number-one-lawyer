<template>
  <Button
    text
    size="small"
    v-if="props.category !== 'earrings'"
    severity="secondary"
    @click="openSizeModal"
    >Гайд по размерам</Button
  >
</template>

<script setup lang="ts">
import { Button } from "~/src/shared/ui/button";
import { useModal } from "~/src/shared/model/modal/store";
import SizeGuide from "./SizeGuide.vue";
import type { Categories } from "../model/types";

const props = defineProps<{
  category: Categories;
}>();

const modal = useModal();
const { openModal } = modal;

const openSizeModal = () => {
  openModal(SizeGuide, "Размеры", {
    category: props.category,
  });
};
</script>

<style scoped></style>
