<template>
  <div class="w-full" v-if="productsInCart.length > 0">
    <Cart />
    <ContactForm
      :withTitle="false"
      :isIndependentForm="false"
      :loading="isLoading"
      button-text="Заказать"
      @submit-form="
        (contacts) => {
          sendOrder(contacts);
        }
      "
    />
  </div>

  <EmptyCart v-else />
</template>

<script setup lang="ts">
import { Cart } from "~/src/features/cart";
import { ContactForm } from "~/src/features/contact-form";
import { EmptyCart } from "~/src/shared/ui/empty-cart";
import { useCart } from "~/src/features/cart/model/store";
import { useToast } from "~/src/shared/model/toast/store";
import { sendContactsWithProducts } from "../api/sendContactsWithProducts";
import type { ContactFormInterface } from "~/src/features/contact-form/types";
import { useModal } from "~/src/shared/model/modal/store";
const cartStore = useCart();
const { closeModal } = useModal();
const { addToast } = useToast();
const { productsInCart } = storeToRefs(cartStore);
const isLoading = ref<boolean>(false);

const sendOrder = async (contacts: ContactFormInterface) => {
  isLoading.value = true;
  const response = await sendContactsWithProducts(
    contacts,
    productsInCart.value
  );
  if (response && response.result) {
    addToast({
      summary: "Заказ создан",
      details: "Скоро мы свяжемся с Вами для уточнения деталей",
    });
    closeModal();
  } else {
    addToast({
      severity: "error",
      summary: "Произошла ошибка",
      details: response?.error,
    });
  }

  isLoading.value = false;
};
</script>

<style scoped></style>
