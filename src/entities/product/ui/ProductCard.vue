<template>
  <LinkButton nuxtLink :link="`/product/${slug(prepareSlug)}`">
    <div class="product-card">
      <img
        :src="props.product.images[0]"
        :alt="props.product.title"
        class="image"
      />
      <div class="text-block">
        <div>
          <h3 class="title">
            {{ capitalizeFirst(props.product.title) }}
          </h3>
          <p class="price">{{ formatPrice(props.product.price) }} ₽</p>
        </div>
        <p class="category">
          {{ capitalizeFirst(props.product.category.label) }}
        </p>
      </div>
    </div>
  </LinkButton>
</template>

<script setup lang="ts">
import { formatPrice } from "~/src/shared/lib/formatPrice";
import { capitalizeFirst } from "~/src/shared/lib/capitalizeFirst";
import { slug } from "../lib/slug";
import LinkButton from "~/src/shared/ui/LinkButton/LinkButton.vue";
import type { Product } from "../types";

interface Props {
  product: Product;
}

const props = defineProps<Props>();

const prepareSlug = `${props.product.id}-${props.product.title}`;
</script>

<style scoped>
.product-card {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column !important;
}

.image {
  aspect-ratio: 1/1;
  width: 100%;
  background-color: var(--gray100);
  border-radius: 0.25rem;
  object-fit: cover;
}

.text-block {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  gap: 0.5rem;
}

.title {
  font-size: 0.875rem;
  font-weight: 400;
  text-align: start;
}
.price {
  font-size: 1rem;
  font-weight: 500;
  text-align: start;
}
.category {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--gray500);
}
</style>
