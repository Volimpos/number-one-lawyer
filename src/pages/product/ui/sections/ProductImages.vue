<template>
  <div class="product__images">
    <img
      :src="image"
      :alt="`Изображение ${index + 1}`"
      v-for="(image, index) in props.images"
      class="image"
      :class="imageSizes[index]"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  images: string[];
}>();

const imageSizes = [
  "row-span-2 aspect-3/4",
  "col-start-2 aspect-4/5 lg:aspect-3/4",
  "col-start-2 row-start-2",
  "row-span-2 aspect-4/5 lg:aspect-3/4",
];
</script>

<style scoped>
.product__images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 17vw);
  gap: 2rem;
}
.image {
  border-radius: 0.25rem;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 64rem) {
  .product__images {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
