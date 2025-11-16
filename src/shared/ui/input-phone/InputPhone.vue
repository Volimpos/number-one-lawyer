<template>
  <div class="w-full">
    <input
      type="tel"
      placeholder="+7 (000) 000-00-00"
      class="input-phone"
      :value="maskedPhone"
      @input="handleInput"
      ref="phoneInput"
    />
    <p class="error">{{ props.error }}</p>
  </div>
</template>

<script setup lang="ts">
const phone = ref<string>("");
const props = defineProps({
  error: {
    type: String,
    default: "",
  },
});
const maskedPhone = computed<string>(() => formatPhone(phone.value));
const emit = defineEmits<{
  (e: "input", number: string): void;
}>();

const handleInput = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  let input = target.value.replace(/\D/g, "");

  // Ограничиваем 11 цифрами (российский формат)
  if (input.length > 11) {
    input = input.slice(0, 11);
  }

  // Нормализуем начало номера
  if (input.startsWith("8")) {
    input = "7" + input.slice(1);
  } else if (input.startsWith("9")) {
    input = "7" + input;
  }

  phone.value = input;
  target.value = formatPhone(input);
  emit("input", input);
};

const formatPhone = (value: string): string => {
  if (!value) return "";

  // Гарантируем, что номер начинается с 7
  if (!value.startsWith("7")) {
    value = "7" + value;
  }

  // Разбиваем на группы для форматирования
  const match = value.match(/^7(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
  if (!match) return "";

  const [, part1, part2, part3, part4] = match;
  let formatted = "+7";
  if (part1) formatted += ` (${part1}`;
  if (part2) formatted += `) ${part2}`;
  if (part3) formatted += `-${part3}`;
  if (part4) formatted += `-${part4}`;

  return formatted;
};
</script>

<style scoped>
.input-phone {
  width: 100%;
  border: 1px solid var(--gray300);
  border-radius: 0.25rem;
  outline: none;
  height: 3rem;
  padding-inline: 1rem;
  color: var(--contrast);
}

.input-phone:focus {
  border: 1px solid var(--contrast);
}

.error {
  margin-top: 0.5rem;
  color: rgb(200, 53, 53);
  font-size: 0.875rem;
}
</style>
