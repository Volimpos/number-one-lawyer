<template>
  <div class="quantity">
    <Button shape="circle" severity="secondary" @click="emit('descrease')">
      <i class="pi pi-minus"></i>
    </Button>
    <p class="quantity_text">{{ props.quantity }}</p>
    <Button shape="circle" severity="secondary" @click="emit('increase')">
      <i class="pi pi-plus"></i>
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from "~/src/shared/ui/button";

const props = defineProps({
  quantity: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits<{
  (e: "increase"): void;
  (e: "descrease"): void;
}>();
</script>

<style scoped>
.quantity {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  user-select: none;
  touch-action: manipulation;
}

.quantity_text {
  font-size: 1rem;
  color: var(--contrast);
}

@media screen and (max-width: 64rem) {
  .quantity {
    gap: 1.5rem;
  }

  .quantity_text {
    font-size: 1.25rem;
  }
}
</style>
