import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "footer" | "footer-ui-footer" | "header" | "header-lib-use-header-scroll" | "header-ui-header"
declare module 'nuxt/app' {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}