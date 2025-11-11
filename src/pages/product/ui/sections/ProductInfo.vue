<template>
  <div class="mt-20">
    <div class="flex flex-row items-start w-full max-lg:flex-col">
      <h1 class="title">
        {{ props.title }}
      </h1>
      <div class="price-container">
        <p class="price">{{ formatPrice(props.price) }} ₽</p>
      </div>
    </div>
    <h2 class="sr-only">Информация о товаре</h2>
    <div class="flex flex-row items-start mt-10 w-full max-lg:flex-col-reverse">
      <div class="description-highlighs-container">
        <div class="description">{{ props.description }}</div>
        <div class="highlights">
          <p class="highlights-title">Хайлайтсы</p>
          <ul class="highlights-list">
            <li
              v-for="highlight in props.highlights"
              :key="highlight"
              class="list-item"
            >
              {{ highlight }}
            </li>
          </ul>
        </div>
      </div>
      <div class="select-size-container">
        <div class="flex flex-row items-center justify-between">
          <span class="font-medium text-sm">Размер</span>
          <span class="font-medium text-sm text-gray-500"
            >Гайд по размерам</span
          >
        </div>
        <div class="mt-6">
          <select-size
            :sizes="props.sizes"
            @select="(size) => emit('select', size)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatPrice } from "~/src/shared/lib/formatPrice";
import { SelectSize } from "~/src/features/select-size";
import type { ProductSize } from "~/src/entities/product";

interface Props {
  title: string;
  description: string;
  price: string;
  highlights: string[];
  sizes: ProductSize[];
}
const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "select", size: ProductSize): void;
}>();
</script>

<style scoped>
.title {
  border: 1px solid var(--gray200);
  padding-right: 1.125rem;
  border-width: 0 1px 0 0;
  flex: 2;
  font-weight: 700;
  color: var(--contrast);
  font-size: 2rem;
}

.price-container {
  padding-left: 2rem;
  flex: 1;
}

.price {
  font-size: 1.85rem;
}

.description-highlighs-container {
  border: 1px solid var(--gray200);
  padding-right: 1.125rem;
  border-width: 0 1px 0 0;
  flex: 2;
  padding-top: 1.5rem;
}
.description {
  font-weight: 500;
  font-size: 1rem;
}
.highlights {
  margin-top: 2rem;
  font-size: 0.875rem;
}

.highlights-title {
  font-size: 0.875rem;
}

.highlights-list {
  margin-top: 1rem;
  list-style: disc;
  list-style-position: inside;
}

.list-item {
  color: var(--gray500);
  margin-top: 0.5rem;
}

.select-size-container {
  flex: 1;
  padding-left: 2rem;
}

@media screen and (max-width: 64rem) {
  .title {
    border: none;
    padding-right: 0;
    flex: 1;
  }
  .price-container {
    padding-left: 0;
  }
  .description-highlighs-container {
    padding-right: 0;
    flex: 1;
    padding-top: 0;
    margin-top: 4rem;
  }
  .select-size-container {
    padding-left: 0;
    width: 100%;
  }
}
</style>
