<template>
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
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    rating?: number;
  }>(),
  {
    rating: 5,
  }
);
</script>

<style scoped>
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
