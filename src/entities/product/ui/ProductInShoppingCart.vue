<template>
  <div class="shopping-cart-product">
    <div class="image-container">
      <img :src="props.product.images[0]" alt="product-image" class="image" />
    </div>
    <div class="product-info">
      <p class="title">
        {{ capitalizeFirst(props.product.title) }}
      </p>
      <p class="category">
        {{ capitalizeFirst(props.product.category.label) }}
      </p>
      <p class="size">Размер {{ props.product.selectedSize }}</p>
    </div>
    <div class="product__price-handling">
      <p class="price">{{ formatPrice(props.product.totalPrice) }} ₽</p>
      <div class="handling">
        <QuantityController
          :quantity="props.product.quantity"
          @increase="emit('increase')"
          @descrease="emit('decrease')"
        />
        <Button shape="circle" severity="secondary" @click="emit('remove')">
          <i class="pi pi-trash"></i>
        </Button>
      </div>
      <div class="mobile-handling">
        <MobileControlsButton
          :product="props.product"
          @increase="emit('increase')"
          @decrease="emit('decrease')"
          @remove="emit('remove')"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductInCart } from "../types";
import { capitalizeFirst } from "~/src/shared/lib/capitalizeFirst";
import { Button } from "~/src/shared/ui/button";
import MobileControlsButton from "./MobileControlsButton.vue";
import { QuantityController } from "~/src/shared/ui/quantity-controller";
import { formatPrice } from "~/src/shared/lib/formatPrice";
const props = defineProps<{
  product: ProductInCart;
}>();

const emit = defineEmits<{
  (e: "remove"): void;
  (e: "decrease"): void;
  (e: "increase"): void;
  (e: "mobile-controls"): void;
}>();
</script>

<style scoped>
.shopping-cart-product {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  gap: 0.5rem;
  border-bottom: 1px solid var(--gray200);
  height: 9rem;
  padding: 1rem 0.5rem 1rem 0;
  overflow: hidden;
}

.image-container {
  width: 7rem;
  border: 1px solid var(--gray200);
  border-radius: 0.25rem;
  padding: 0.25rem;
  height: 100%;
  user-select: none;
}

.image {
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  object-fit: cover;
  user-select: none;
}

.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 0.5rem;
  overflow: hidden;
  height: 100%;
}

.title {
  color: var(--contrast);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.category {
  font-size: 0.875rem;
  color: var(--gray400);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.size {
  font-size: 0.875rem;
  color: var(--contrast);
}

.product__price-handling {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 0 0 auto;
  align-items: end;
  justify-content: space-between;
}

.price {
  color: var(--contrast);
  font-weight: 500;
}
.handling {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  user-select: none;
}

.mobile-handling {
  display: none;
}

.product__price-quantity-remove__price {
  color: var(--contrast);
}

.quantity-mobile-handler {
  background-color: var(--gray100);
  display: none;
}
.quantity-mobile-handler:active {
  background-color: var(--gray200);
}

@media screen and (max-width: 64rem) {
  .product__description__title {
    -webkit-line-clamp: 2;
  }
  .handling {
    display: none;
  }

  .mobile-handling {
    display: flex;
  }
}
</style>
