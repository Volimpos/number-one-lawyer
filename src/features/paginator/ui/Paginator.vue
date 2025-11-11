<template>
  <div class="paginator">
    <template v-if="loading">
      <i class="pi pi-spinner pi-spin"></i>
    </template>
    <template v-else>
      <Button
        text
        shape="circle"
        severity="secondary"
        :disabled="props.page <= 1"
        @click="emit('first')"
      >
        <i class="pi pi-angle-double-left"></i>
      </Button>

      <Button
        text
        shape="circle"
        severity="secondary"
        :disabled="props.page <= 1"
        @click="emit('prev')"
      >
        <i class="pi pi-angle-left"></i>
      </Button>
      <span data-v-4e7b38d5="" class="text">
        Страница {{ props.page }} из {{ props.total }}
      </span>

      <Button
        text
        shape="circle"
        severity="secondary"
        @click="emit('next')"
        :disabled="props.total <= props.page"
      >
        <i class="pi pi-angle-right"></i>
      </Button>

      <Button
        text
        shape="circle"
        severity="secondary"
        @click="emit('last')"
        :disabled="props.total <= props.page"
      >
        <i class="pi pi-angle-double-right"></i>
      </Button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { Button } from "~/src/shared/ui/button";

const props = defineProps({
  page: {
    type: Number,
    default: 1,
  },
  total: {
    type: Number,
    default: 1,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: "first"): void;
  (e: "prev"): void;
  (e: "next"): void;
  (e: "last"): void;
}>();
</script>

<style scoped>
.paginator {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
}
</style>
