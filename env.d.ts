/// <reference types="nuxt" />
/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare global {
  // Vue `<script setup>` compiler macros (for Vetur / plain TS)
  const defineProps: <T>() => Readonly<T>;
  const defineEmits: <T>() => T;
  const defineExpose: (exposed?: any) => void;
  const withDefaults: <T, D extends Partial<T>>(props: T, defaults: D) => T & D;
}

export {};
