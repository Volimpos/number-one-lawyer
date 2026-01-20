<template>
  <Form @submit="onSubmit" class="contact-form">
    <p class="subtitle">Оставьте Ваш номер телефона и мы свяжемся с Вами в течение 15 минут</p>

    <div class="w-full">
      <label class="form-label">Ваше имя</label>
      <InputText placeholder="Ваше имя" v-model:text="formValues.name" />
    </div>
    <div class="w-full">
      <label class="form-label">Контактный телефон</label>
      <InputPhone
      @input="(phoneNum) => (formValues.phone = phoneNum)"
      :error="formErrors?.phone?.errorText"
    />
    </div>
    
    <AcceptPrivacy
      v-model:isAgree="formValues.acceptPrivacy"
      :error="formErrors?.acceptPrivacy?.errorText"
    />
    <button 
    class="submit-btn" :disabled="loading"
      >
      <i class="pi pi-spinner pi-spin mr-2" v-if="loading"></i>
      Заказать звонок
    </button>
  </Form>
</template>

<script setup lang="ts">
import { InputPhone } from "~/src/shared/ui/input-phone";
import { InputText } from "~/src/shared/ui/input-text";
import { AcceptPrivacy } from "~/src/shared/ui/accept-privacy";
import { validateForm } from "../model/validateForm";
import type { ContactFormInterface, ContactFormError } from "../types";
import { useToast } from "~/src/shared/model/toast/store";
import { sendContacts } from "../api/sendContacts";
import { useModal } from "~/src/shared/model/modal/store";
import { ref } from "vue";
const toast = useToast();
const { addToast } = toast;


const modalStore = useModal();
const { closeModal } = modalStore;

const formValues = ref<ContactFormInterface>({
  name: "",
  phone: "",
  acceptPrivacy: false,
});

const formErrors = ref<ContactFormError>({});
const loading = ref<boolean>(false);

const onSubmit = () => {
  formErrors.value = {};
  const validate = validateForm(formValues.value);
  if (!validate.result) {
    return (formErrors.value = { ...formErrors.value, ...validate.errors });
  }
  sendContactsToServer()
};

const sendContactsToServer = async () => {
  loading.value = true;
  const response = await sendContacts(formValues.value);
  if (response && response.result) {
    closeModal();
    addToast({
      summary: "Спасибо за доверие",
      details: "Мы перезвоним в течение 15 минут",
      severity: 'success',
      life: 4000,
    });
  } else {
    addToast({
      severity: "error",
      summary: "Возникла ошибка",
      details: response?.error,
      life: 4000,
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
  gap: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
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

.subtitle {color: var(--gray500);}

.form-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--gray400);
}

.submit-btn {
  width: 100%;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);
  border-radius: 0.25rem;
  font-weight: 500;
  color: var(--gray600);
  transition: 200ms;
  border: none;
  outline: none;
}

.submit-btn:hover {
background: var(--primaryDark);
}

.submit-btn:disabled {
background: var(--primaryLight);
color: var(--gray400);
}



@media screen and (max-width: 64rem){
  .contact-form {
    padding-top: 3rem;
  }
  
}
</style>
