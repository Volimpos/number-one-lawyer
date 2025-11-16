<template>
  <Button
    fluid
    size="large"
    @click="
      openModal(OrderForm, {
        title: 'Корзина',
      })
    "
  >
    Корзина
    <template #iconLeft>
      <i class="pi pi-cart-arrow-down" v-if="productsInCart.length > 0"></i>
      <i class="pi pi-shopping-cart" v-else></i>
    </template>
  </Button>
</template>

<script setup lang="ts">
import { Button } from "~/src/shared/ui/button";
import { useModal } from "~/src/shared/model/modal/store";
import { useCart } from "~/src/features/cart/model/store";
import OrderForm from "./OrderForm.vue";
const cartStore = useCart();
const { productsInCart } = storeToRefs(cartStore);
const modalStore = useModal();
const { openModal } = modalStore;
</script>

<style scoped></style>
