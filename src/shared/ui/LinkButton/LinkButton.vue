<template>
  <div>
    <NuxtLink
      v-if="nuxtLink"
      :to="props.link"
      class="app-link-button"
      :class="setBtnClass()"
    >
      <slot name="iconLeft" v-if="!loading"></slot>
      <slot></slot>
      <slot name="iconRight" v-if="!loading"></slot>
    </NuxtLink>
    <a v-else :href="props.link" class="app-link-button" :class="setBtnClass()">
      <slot name="iconLeft" v-if="!loading"></slot>
      <slot></slot>
      <slot name="iconRight" v-if="!loading"></slot>
    </a>
  </div>
</template>

<script setup lang="ts">
const loading = defineModel("loading");
interface Props {
  severity?: "primary" | "secondary" | "contrast";
  large?: boolean;
  button?: boolean;
  link?: string;
  nuxtLink?: boolean;
  fluid?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  severity: "primary",
  large: false,
  button: false,
  link: "#",
  nuxtLink: false,
  fluid: false,
});

const setBtnClass = (): string => {
  let btnClass = "";
  if (props.button) {
    if (props.severity === "primary") btnClass += "link-button-primary ";
    if (props.severity === "secondary") btnClass += "link-button-secondary ";
    if (props.severity === "contrast") btnClass += "link-button-contrast ";
  }

  if (!props.button) {
    if (props.severity === "primary") btnClass += "link-rimary ";
    if (props.severity === "secondary") btnClass += "link-secondary ";
    if (props.severity === "contrast") btnClass += "link-contrast ";
    if (props.fluid) btnClass += "fluid";
  }

  if (props.large) btnClass += "link-large ";
  if (!props.large) btnClass += "link-normal ";

  return btnClass;
};
</script>

<style scoped>
.app-link-button {
  transition: 200ms;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}
.app-link-button:hover {
  opacity: 0.8;
}
.app-link-button:active {
  opacity: 0.9;
}

.link-primary {
  color: var(--contrast);
}
.link-primary i {
  color: var(--contrast);
}

.link-secondary {
  color: var(--gray400);
}
.link-secondary i {
  color: var(--gray400);
}

.link-contrast {
  color: white;
}
.link-contrast i {
  color: white;
}

.link-normal {
  font-size: 0.875rem;
}

.link-large {
  height: 3rem;
  padding-inline: 1.25rem;
}

.link-button-primary {
  background-color: var(--contrast);
  color: white;
}
.link-button-primary i {
  color: white;
}
.link-button-secondary {
  background-color: var(--gray150);
  color: var(--gray500);
}
.link-button-secondary i {
  color: var(--gray500);
}

.link-button-contrast {
  background-color: white;
  color: var(--contrast);
}
.link-button-contrast i {
  color: var(--contrast);
}

.fluid {
  width: 100%;
  text-align: center;
  border: 2px solid violet;
}
</style>
