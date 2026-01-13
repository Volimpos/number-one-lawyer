<template>
  <article class="review-card">
    <p class="review-card__text">
      {{ props.text }}
    </p>

    <div class="review-card__footer">
      <div
        class="review-card__avatar"
        :style="`background-color: ${randomColor()}`"
      >
        <span>{{ props.initials }}</span>
      </div>

      <div class="review-card__info">
        <p class="review-card__name">{{ props.name }}</p>
        <StarsRating :rating="props.rating" />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { randomColor } from "~/src/shared/lib/randomColor";
import { StarsRating } from "~/src/shared/ui/stars-rating";

const props = withDefaults(
  defineProps<{
    text: string;
    name: string;
    initials: string;
    rating?: number;
  }>(),
  {
    rating: 5,
  }
);
</script>

<style scoped>
.review-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  background-color: var(--white);
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: var(--cardShadow);
}

.review-card__text {
  color: var(--gray500);
  text-align: left;
  line-height: 120%;
}

.review-card__footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.review-card__avatar {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 999px;
  background-color: #1f6715;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-weight: 600;
  font-size: 1.25rem;
}

.review-card__name {
  font-weight: 600;
  color: var(--gray500);
}
</style>
