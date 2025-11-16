<template>
  <div>
    <Header />
    <slot />
    <Footer />
    <Modal />
    <Toast />
    <BottomDrawer />
  </div>
</template>

<script setup lang="ts">
import { Footer } from "~/src/app/layouts/footer";
import { Header } from "~/src/app/layouts/header";
import { useContactsStore } from "~/src/shared/model/contacts/store";
import { Modal } from "~/src/shared/ui/modal";
import { Toast } from "~/src/shared/ui/toast";
import { BottomDrawer } from "~/src/shared/ui/bottom-drawer";
import { useModal } from "~/src/shared/model/modal/store";
const contactStore = useContactsStore();
if (!contactStore.loaded) {
  await contactStore.getContacts();
}

const route = useRoute();
const { closeModal } = useModal();

// Закрываем при смене pathname
watch(
  () => route.path,
  () => {
    closeModal();
  }
);
</script>
