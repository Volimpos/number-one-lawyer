<template>
  <div class="min-h-[20dvh]">
    <div
      class="w-full flex flex-row items-center justify-between gap-2 border-b pb-4"
    >
      <p class="text-2xl">
        изменить <br />
        количество
      </p>
      <QuantityController
        :quantity="props.product.quantity"
        @increase="emit('increase')"
        @descrease="decrease"
      />
    </div>
    <div class="mt-4 w-full flex flex-row items-center justify-between gap-2">
      <Button text @click="emit('remove')">Удалить из корзины</Button>
      <p>Цена: {{ formatPrice(props.product.price) }} ₽</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { QuantityController } from "~/src/shared/ui/quantity-controller";
import { Button } from "~/src/shared/ui/button";
import { formatPrice } from "~/src/shared/lib/formatPrice";
import type { ProductInCart } from "~/src/entities/product";

const props = defineProps<{
  product: ProductInCart;
}>();

const emit = defineEmits<{
  (e: "increase"): void;
  (e: "decrease"): void;
  (e: "remove"): void;
}>();

const decrease = () => {
  emit("decrease");
  if (props.product.quantity <= 1) {
    emit("remove");
  }
};
</script>

<style scoped></style>
