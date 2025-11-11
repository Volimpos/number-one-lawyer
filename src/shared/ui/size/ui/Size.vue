<template>
  <label
    :class="{
      label_disabled: !props.inStock,
      label_checked: props.selected,
    }"
    :aria-label="props.value"
    class="label"
  >
    <input
      @change="emit('onSelect')"
      type="radio"
      name="size"
      :value="props.value"
      :disabled="!props.inStock"
      class="sr-only"
    />
    <span
      class="text"
      :class="{
        text_disabled: !props.inStock,
        text_checked: props.selected,
      }"
    >
      {{ props.value }}
    </span>
  </label>
</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  inStock: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: "onSelect"): void;
}>();
</script>

<style scoped>
.label {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem;
  border-radius: 0.25rem;
  border: 1px solid var(--gray200);
  transition: 200ms;
}
.label:hover {
  background-color: var(--gray100);
}

.label_checked {
  background: var(--contrast);
  border: 1px var(--contrast);
}
.label_checked:hover {
  background: var(--contrast);
}
.label_disabled {
  background: var(--gray100);
  cursor: not-allowed;
}

.text {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--contrast);
  text-transform: uppercase;
  user-select: none;
}
.text_checked {
  color: white;
}
.text_disabled {
  color: var(--gray300);
}
</style>
