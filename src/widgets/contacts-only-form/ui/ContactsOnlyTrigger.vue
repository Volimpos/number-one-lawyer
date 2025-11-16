<template>
  <div @click="openLeadModal" class="flex items-center justify-center">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useModal } from "~/src/shared/model/modal/store";

const openLeadModal = async () => {
  const { default: ContactsOnlyForm } = await import("./ContactsOnlyForm.vue");
  const { openModal } = useModal();
  openModal(ContactsOnlyForm, { title: "" });
};
</script>

<style scoped></style>
