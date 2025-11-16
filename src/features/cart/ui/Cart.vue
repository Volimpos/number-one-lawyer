<template>
  <div class="shopping-cart">
    <TransitionGroup name="slide" tag="div">
      <ProductInShoppingCart
        v-for="product in productsInCart"
        :key="`${product.id}+${product.selectedSize}`"
        :product="product"
        @increase="increaseQuantity(product)"
        @decrease="decreaseQuantity(product)"
        @remove="removeProduct(product)"
      />
    </TransitionGroup>
    <div class="flex flex-row items-center justify-between gap-2 mt-4">
      <p class="total-order__title">Сумма заказа:</p>
      <p class="total-order__price">{{ formatPrice(totalOrderPrice) }} ₽</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCart } from "~/src/features/cart/model/store";
import { ProductInShoppingCart } from "~/src/entities/product";
import { formatPrice } from "~/src/shared/lib/formatPrice";
const cartStore = useCart();
const { increaseQuantity, decreaseQuantity, removeProduct } = cartStore;
const { productsInCart, totalOrderPrice } = storeToRefs(cartStore);
</script>

<style scoped>
.total-order__title {
  font-weight: 400;
  color: var(--gray400);
}

.total-order__price {
  color: var(--contrast);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 350ms ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(5rem);
}
</style>
