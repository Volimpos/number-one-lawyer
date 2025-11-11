<template>
  <div>
    <Header />
    <slot />
    <Footer />
    <!-- <OrderModal /> -->
    <!-- <ProductCard /> -->
    <Toast />
  </div>
</template>

<script setup lang="ts">
import { Footer } from "~/src/widgets/footer";
import { Header } from "~/src/widgets/header";
import { useContactsStore } from "~/src/shared/model/contacts/store";

// import AppHeader from "./layouts-defalut-components/AppHeader.vue";
// import OrderModal from "../components/OrderForm/OrderModal.vue";
// import ProductCard from "~/components/OrderForm/ProductCart.vue";
const contactStore = useContactsStore();
if (!contactStore.loaded) {
  await contactStore.getContacts();
}
</script>
