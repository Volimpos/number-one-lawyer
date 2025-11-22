<template>
  <div>
    <div class="ring-container">
      <p class="ring-text">
        Приложите Ваше кольцо, чтобы определить точный размер. Круг должен быть
        внутри кольца.
      </p>
      <div class="ring-area">
        <ring-circle :diameter-mm="selectedSize" />
      </div>

      <div class="flex flex-row items-center justify-between">
        <Button size="small" @click="selectPrevSize">
          <i class="pi pi-minus"></i>
        </Button>
        <p class="size-label">{{ selectedSize }} мм</p>
        <Button size="small" @click="selectNextSize">
          <i class="pi pi-plus"></i>
        </Button>
      </div>
    </div>
    <div class="sizes-table-container">
      <SizeTable
        :measurementArray="sizes"
        :sizeValuesArray="sizes"
        size-measure="Диаметр (мм)"
        :selected-size="selectedSize"
        @onSelect="(size: string) => selectSize(size)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "~/src/shared/ui/button";
import { generateNumberSizes } from "../lib/generateNumberSizes";
import RingCircle from "./RingCircle.vue";
import SizeTable from "./SizeTable.vue";
const sizes = ref<string[]>(generateNumberSizes(16, 23));
const selectedSize = ref<string>(sizes.value[0] ?? "");

const selectSize = (size: string) => {
  selectedSize.value = size;
};

const selectNextSize = () => {
  const index = sizes.value.findIndex((item) => item === selectedSize.value);
  if (index === -1) return;
  const nextSize = sizes.value[index + 1];
  if (nextSize) {
    selectedSize.value = nextSize;
  }
};
const selectPrevSize = () => {
  const index = sizes.value.findIndex((item) => item === selectedSize.value);
  if (index === -1) return;
  const prevSize = sizes.value[index - 1];
  if (prevSize) {
    selectedSize.value = prevSize;
  }
};
</script>

<style scoped>
.ring-container {
  background-color: var(--gray100);
  border-radius: 0.25rem;
  padding: 1rem;
}

.ring-text {
  font-size: 0.875rem;
  color: var(--gray400);
  text-align: center;
}

.ring-area {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 8rem;
}

.sizes-table-container {
  height: 40svh;
  margin-top: 2rem;
}
</style>
