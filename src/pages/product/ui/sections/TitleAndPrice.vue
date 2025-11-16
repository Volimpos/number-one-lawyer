<template>
  <div class="flex flex-row items-start w-full max-lg:flex-col">
    <h1 class="title">
      {{ props.title }}
    </h1>
    <div class="price-container">
      <p class="price">{{ formatPrice(props.price) }} ₽</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatPrice } from "~/src/shared/lib/formatPrice";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.title {
  border: 1px solid var(--gray150);
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

@media screen and (max-width: 64rem) {
  .title {
    border: none;
    padding-right: 0;
    flex: 1;
    font-size: 1.85rem;
  }
  .price-container {
    padding-left: 0;
    padding-top: 1.5rem;
    font-size: 1.5rem;
  }
}
</style>
