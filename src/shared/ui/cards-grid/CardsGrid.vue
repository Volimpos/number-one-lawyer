<template>
  <section class="cards-container">
    <div class="cards-container__group">
      <div
        v-for="(card, index) in props.cards"
        :key="card.image || index"
        class="card"
      >
        <div class="card__image-wrapper">
          <img :src="card.image" :alt="card.alt" class="card__image">
        </div>
        <h3 v-if="card.title" class="card__title">{{ card.title }}</h3>
        <p v-if="card.description" class="card__description">{{ card.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  cards: Array<{
    image: string;
    alt: string;
    title?: string | null;
    description?: string | null;
  }>;
}>();
</script>

<style scoped>
.cards-container {
  width: 100%;
  min-height: 36rem;
  overflow: hidden;
}

.cards-container__group {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  min-height: 36rem;
}

.card {
  min-height: 36rem;
}

.card__image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 0.5rem;
}

.card__image-wrapper {
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: 0.5rem;
  background: var(--gray100);
}

.card__title {
  font-size: 1.75rem;
  line-height: 110%;
  font-weight: 700;
  color: var(--gray600);
  text-align: center;
  margin-top: 1rem;
}

.card__description {
  max-width: 40rem;
  color: var(--gray400);
  text-align: center;
  margin-top: 1rem;
}

@media screen and (max-width: 80rem) {
  .cards-container__group {
    gap: 1rem;
  }

  .card__title {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 64rem) {
  .cards-container,
  .cards-container__group,
  .card {
    min-height: 28rem;
  }

  .cards-container__group {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
