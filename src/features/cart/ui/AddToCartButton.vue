<template>
  <Button fluid size="large" @click="addProductToCart">В корзину</Button>
</template>

<script setup lang="ts">
import { Button } from "~/src/shared/ui/button";
import { useCart } from "~/src/features/cart/model/store";
import type { Product, ProductSize } from "~/src/entities/product";
import { useToast } from "~/src/shared/model/toast/store";

const cartStore = useCart();
const { addProduct } = cartStore;
const toast = useToast();
const { addToast } = toast;
const props = defineProps<{
  product: Product | null;
  size: ProductSize | null;
}>();

const addProductToCart = () => {
  if (!props.product || !props.size) {
    addToast({
      severity: "error",
      summary: "Ошибка",
      details: "Размер не выбран",
    });
    return;
  }
  addProduct(props.product, props.size);
  addToast({
    summary: props.product.title,
    details: `Добавлено в корзину (размер ${props.size.value})`,
  });
};
</script>

<style scoped></style>
