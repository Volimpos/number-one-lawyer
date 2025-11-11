<template>
  <button class="app-button" :class="setBtnClass()" :disabled="props.disabled">
    <slot name="iconLeft" v-if="!loading"></slot>
    <i class="pi pi-spinner-dotted pi-spin" v-if="loading"></i>
    <slot></slot>
    <slot name="iconRight" v-if="!loading"></slot>
  </button>
</template>

<script setup lang="ts">
const loading = defineModel("loading");
interface Props {
  severity?: "primary" | "secondary" | "contrast";
  shape?: "rect" | "circle";
  large?: boolean;
  fluid?: boolean;
  text?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  severity: "primary",
  shape: "rect",
  large: false,
  fluid: false,
  text: false,
  disabled: false,
});

const setBtnClass = (): string => {
  let btnClass = "";
  if (props.severity === "primary") btnClass += "btn-primary ";
  if (props.severity === "secondary") btnClass += "btn-secondary ";
  if (props.severity === "contrast") btnClass += "btn-contrast ";
  if (props.shape === "rect") btnClass += "btn-rect ";
  if (props.shape === "circle") btnClass += "btn-circle ";
  if (props.text && props.shape === "rect") btnClass += "btn-rect-text ";
  if (props.text && props.shape === "circle") btnClass += "btn-circle-text ";
  if (props.fluid && props.shape !== "circle") btnClass += "fluid ";
  if (props.large && props.shape !== "circle") btnClass += "btn-rect-large ";
  if (!props.large && props.shape !== "circle") btnClass += "btn-rect-normal ";

  if (props.fluid && props.shape !== "circle") btnClass += "fluid";

  if (props.disabled) btnClass += "disabled";

  return btnClass;
};
</script>

<style scoped>
.app-button {
  transition: 200ms;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  border: none;
  outline: none;
}

.app-button:hover {
  opacity: 0.8;
}
.app-button:active {
  opacity: 0.9;
}

.btn-rect {
  border-radius: 0.25rem;
}
.btn-circle {
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
}

.btn-primary {
  background-color: var(--contrast);
  color: white;
}
.btn-primary i {
  color: white;
}

.btn-secondary {
  background-color: var(--gray200);
  color: var(--gray500);
}
.btn-secondary i {
  color: var(--gray500);
}

.btn-contrast {
  background-color: white;
  color: var(--contrast);
}
.btn-contrast i {
  color: var(--contrast);
}

.btn-rect-normal {
  height: 2.5rem;
  padding-inline: 1rem;
}

.btn-rect-large {
  height: 3rem;
  padding-inline: 1.25rem;
}

.btn-rect-text {
  background-color: transparent !important;
  height: auto;
  padding: 0;
}

.btn-circle-text {
  background-color: transparent;
}
.btn-circle-text:hover,
.btn-circle-text:active {
  background-color: var(--gray200);
}
.btn-circle-text:disabled {
  background-color: transparent !important;
}

.fluid {
  width: 100%;
}
</style>
