<template>
  <ContactForm
    :withTitle="true"
    :isIndependentForm="true"
    button-text="Отправить"
  />
</template>

<script setup lang="ts">
import { ContactForm } from "~/src/features/contact-form";
</script>

<style scoped></style>
