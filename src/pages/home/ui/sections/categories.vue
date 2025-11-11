<template>
  <div class="section">
    <h2 class="h2">Категории</h2>

    <div class="categories">
      <LinkButton nuxtLink :link="category.link" v-for="category in categories">
        <div class="category">
          <img :src="category.image" :alt="category.label" class="image" />
          <div class="overlay">
            <div class="text-block">
              <p class="label">{{ category.label }}</p>
              <p class="link">Перейти в каталог</p>
            </div>
          </div>
        </div>
      </LinkButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Category } from "~/src/entities/category";
import { LinkButton } from "~/src/shared/ui/LinkButton";

const props = defineProps({
  categoryImageRings: {
    type: String,
    required: true,
  },
  categoryImageEarrings: {
    type: String,
    required: true,
  },
  categoryImageBracelets: {
    type: String,
    required: true,
  },
  categoryImageNecklace: {
    type: String,
    required: true,
  },
});
const categories = ref<Category[]>([
  {
    label: "Кольца",
    link: "/catalog/rings",
    image: props.categoryImageRings,
    value: "rings",
  },
  {
    label: "Серьги",
    value: "earrings",
    image: props.categoryImageEarrings,
    link: "/catalog/earrings",
  },
  {
    label: "Браслеты",
    value: "bracelets",
    image: props.categoryImageBracelets,
    link: "/catalog/bracelets",
  },
  {
    label: "Колье",
    value: "necklace",
    image: props.categoryImageNecklace,
    link: "/catalog/necklace",
  },
]);
</script>

<style scoped>
.section {
  width: 100%;
  padding: 12rem 1rem;
  position: relative;
  color: var(--contrast);
}
.h2 {
  font-weight: 600;
  font-size: 2.25rem;
  color: var(--contrast);
}
.categories {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 28vw);
  gap: 1.5rem;
  padding-top: 100px;
  justify-content: stretch;
}

.category {
  overflow: hidden;
  border-radius: 0.25rem;
  position: relative;
  width: 100%;
  height: 28vw;
}

.image {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(180deg, #00000000 0%, #000000e3 100%);
  border-radius: 0.25rem;
}

.text-block {
  position: absolute;
  bottom: 2.5rem;
  left: 2.5rem;
  text-align: start;
}

.label {
  color: white;
  font-size: 1.5rem;
}
.link {
  font-size: 1rem;
  color: var(--gray200);
}
@media screen and (max-width: 80rem) {
  .text-block {
    bottom: 2rem;
    left: 2rem;
  }
  .label {
    font-size: 1.25rem;
  }
}
@media screen and (max-width: 64rem) {
  .section {
    padding-inline: 0.5rem;
  }
  .h2 {
    text-align: center;
  }
  .categories {
    display: flex;
    flex-direction: column;
  }

  .category {
    height: 60vw;
  }

  .label {
    font-size: 1.5rem;
  }
}
</style>
