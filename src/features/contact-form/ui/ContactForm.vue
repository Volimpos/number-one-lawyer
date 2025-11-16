<template>
  <Form @submit="onSubmit" class="contact-form">
    <div v-if="props.withTitle" class="w-full">
      <h1 class="contact-form-h1">Оформить заказ</h1>
      <p class="contact-form-label">
        Оставьте Ваши контакты, и наши менеджеры перезвонят Вам
      </p>
    </div>

    <InputText placeholder="Ваше имя" v-model:text="formValues.name" />
    <InputPhone
      @input="(phoneNum) => (formValues.phone = phoneNum)"
      :error="formErrors?.phone?.errorText"
    />
    <AcceptPrivacy
      v-model:isAgree="formValues.acceptPrivacy"
      :error="formErrors?.acceptPrivacy?.errorText"
    />
    <Button
      fluid
      size="large"
      type="submit"
      :loading="loading"
      :disabled="loading"
      >{{ props.buttonText }}</Button
    >
  </Form>
</template>

<script setup lang="ts">
import { InputPhone } from "~/src/shared/ui/input-phone";
import { InputText } from "~/src/shared/ui/input-text";
import { Button } from "~/src/shared/ui/button";
import { AcceptPrivacy } from "~/src/shared/ui/accept-privacy";
import { validateForm } from "../model.ts/validateForm";
import type { ContactFormInterface, ContactFormError } from "../types";
import { useToast } from "~/src/shared/model/toast/store";
import { sendContacts } from "../api/sendContacts";
import { useModal } from "~/src/shared/model/modal/store";
const toast = useToast();
const { addToast } = toast;
const props = defineProps({
  withTitle: {
    type: Boolean,
    default: true,
  },
  buttonText: {
    type: String,
    default: "Оставить заявку",
  },
  isIndependentForm: {
    type: Boolean,
    required: true,
  },
});

const modalStore = useModal();
const { closeModal } = modalStore;

const formValues = ref<ContactFormInterface>({
  name: "",
  phone: "",
  acceptPrivacy: false,
});

const formErrors = ref<ContactFormError>({});
const loading = defineModel("loading", { default: false });

const onSubmit = () => {
  formErrors.value = {};
  const validate = validateForm(formValues.value);
  if (!validate.result) {
    return (formErrors.value = { ...formErrors.value, ...validate.errors });
  }
  props.isIndependentForm
    ? sendContactsToServer()
    : emit("submit-form", formValues.value);
};

const sendContactsToServer = async () => {
  loading.value = true;
  const response = await sendContacts(formValues.value);
  if (response?.result) {
    closeModal();
    addToast({
      summary: "Спасибо за заказ",
      details: "Мы скоро перезвоним Вам!",
    });
  } else {
    addToast({
      severity: "error",
      summary: "Возникла ошибка",
      details: response?.error,
      life: 0,
    });
  }
  loading.value = false;
};

const emit = defineEmits<{
  (e: "submit-form", contacts: ContactFormInterface): void;
}>();
</script>

<style scoped>
.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 6rem;
}

.contact-form-h1 {
  font-weight: 600;
  font-size: 2.25rem;
  width: 100%;
  text-align: center;
  color: var(--contrast);
  text-transform: uppercase;
}

.contact-form-label {
  color: var(--gray400);
  width: 90%;
  margin: auto;
  text-align: center;
  font-size: 0.875rem;
}
</style>
