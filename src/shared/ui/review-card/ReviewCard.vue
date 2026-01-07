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
        <div class="review-card__rating">
          <span
            v-for="star in 5"
            :key="star"
            class="review-card__star"
            :class="{ 'review-card__star--filled': star <= props.rating }"
          >
            ★
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { randomColor } from "~/src/shared/lib/randomColor";

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
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);
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

.review-card__rating {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.1rem;
  font-size: 1.5rem;
  margin-block: -0.5rem;
}

.review-card__star {
  color: var(--gray300);
}

.review-card__star--filled {
  color: var(--primary);
}

@media (max-width: 768px) {
  .review-card {
    padding: 1.25rem 1.5rem;
    max-width: 100%;
  }
}
</style>
