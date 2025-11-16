<template>
  <button
    :class="buttonClass"
    :disabled="disabled || loading"
    :aria-label="ariaLabel"
    :aria-busy="loading"
    v-bind="$attrs"
  >
    <span v-if="loading" class="app-button__loading">
      <i class="pi pi-spinner-dotted pi-spin"></i>
    </span>

    <span v-else class="app-button__content">
      <slot name="iconLeft"></slot>
      <span class="app-button__label">
        <slot></slot>
      </span>
      <slot name="iconRight"></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  severity?: "primary" | "secondary" | "contrast";
  shape?: "rect" | "circle";
  size?: "small" | "normal" | "large";
  loading?: boolean;
  disabled?: boolean;
  fluid?: boolean;
  text?: boolean;
  ariaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  severity: "primary",
  shape: "rect",
  size: "normal",
  fluid: false,
  text: false,
  disabled: false,
});
const slots = useSlots();

const buttonClass = computed(() => [
  "app-button",
  `app-button-${props.severity}`,
  `app-button-${props.shape}`,
  `app-button-${props.size}`,
  {
    "app-button-fluid": props.fluid,
    "app-button-text": props.text,
    "app-button-loading": props.loading,
    "app-button-disabled": props.disabled,
    "app-button-icon-only":
      !slots.default && (slots.iconLeft || slots.iconRight),
  },
]);
</script>

<style scoped>
.app-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: 200ms;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
}

.app-button i,
.app-button__content i,
.app-button__loading i,
.app-button__label i {
  font-size: 0.875rem;
}

/* Формы */
.app-button-rect {
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

.app-button-circle {
  border-radius: 50%;
  aspect-ratio: 1/1;
}

/* Размеры для rectangular кнопок */
.app-button-rect.app-button-small {
  height: 2rem;
  padding-inline: 0.75rem;
}

.app-button-rect.app-button-normal {
  height: 2.5rem;
  padding-inline: 1rem;
}

.app-button-rect.app-button-large {
  height: 3rem;
  padding-inline: 1.25rem;
}

/* Размеры для circle кнопок */
.app-button-circle.app-button-small {
  width: 2rem;
  height: 2rem;
}

.app-button-circle.app-button-normal {
  width: 2.5rem;
  height: 2.5rem;
}

.app-button-circle.app-button-large {
  width: 3rem;
  height: 3rem;
}

/* Severity стили */
.app-button-primary {
  background-color: var(--contrast);
  color: white;
}

.app-button-primary:hover:not(.app-button-disabled) {
  opacity: 0.8;
}

.app-button-primary:active:not(.app-button-disabled) {
  opacity: 0.9;
}

.app-button-secondary {
  background-color: var(--gray150);
  color: var(--gray500);
}

.app-button-secondary:hover:not(.app-button-disabled) {
  background-color: var(--gray200);
}

.app-button-secondary:active:not(.app-button-disabled) {
  background-color: var(--gray150);
}

.app-button-contrast {
  background-color: white;
  color: var(--contrast);
}

.app-button-contrast:hover:not(.app-button-disabled) {
  background-color: var(--gray150);
}

.app-button-contrast:active:not(.app-button-disabled) {
  background-color: var(--gray100);
}

/* Text variant */
.app-button-text {
  background-color: transparent;
}

.app-button-text:not(.app-button-circle) {
  padding: 0 !important;
}

.app-button-text:hover:not(.app-button-disabled) {
  background-color: transparent;
}

.app-button-text:active:not(.app-button-disabled) {
  background-color: transparent;
}

.app-button-text.app-button-primary {
  color: var(--contrast);
}

.app-button-text.app-button-secondary {
  color: var(--gray400);
}

.app-button-text.app-button-contrast {
  color: white;
}

/* Circle text variant */
.app-button-circle.app-button-text:hover:not(.app-button-disabled) {
  background-color: var(--gray150);
}

.app-button-circle.app-button-text:active:not(.app-button-disabled) {
  background-color: var(--gray200);
}

/* Rect text variant - убираем высоту и паддинги */
.app-button-rect.app-button-text {
  height: auto;
  padding: 0.25rem 0.5rem;
}

/* Circle text variant - убираем фиксированные размеры */
.app-button-circle.app-button-text {
  width: auto;
  height: auto;
  padding: 1rem;
}

.app-button-circle.app-button-text.app-button-small {
  padding: 0.5rem;
}

/* Модификаторы */
.app-button-fluid {
  width: 100%;
}

.app-button-loading {
  cursor: wait;
}

.app-button-loading .app-button__content {
  opacity: 0.7;
}

.app-button-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Внутренние элементы */
.app-button__loading {
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-button__content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.app-button__label {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
