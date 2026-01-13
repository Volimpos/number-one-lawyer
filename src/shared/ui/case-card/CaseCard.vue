<template>
  <article class="case-card">
    <img :src="props.image" :alt="props.title" class="case-image" />
    <div class="service-info">
      <p class="date">{{ props.date }}</p>
      <p class="sphere">{{ props.sphere }}</p>
    </div>
    <div class="case-content">
      <p class="case-title">{{ props.title }}</p>
      <p class="case-description">{{ props.description }}</p>
    </div>

    <NuxtLink :to="props.link" class="case-link">
      Смотреть
      <i class="pi pi-arrow-right"></i>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string;
  date: string;
  sphere: string;
  title: string;
  description: string;
  link: string;
}>();
</script>

<style scoped>
.case-card {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1rem;
  background-color: var(--white);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  border-radius: 0.5rem;
}
.case-image {
  width: 100%;
  height: 12rem;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 0.25rem;
}
.service-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  & p {
    font-size: 0.75rem;
  }
}

.date {
  color: var(--gray400);
}
.sphere {
  color: var(--gray500);
  background-color: var(--gray100);
  padding: 0.25rem 1rem;
  border-radius: 999px;
}
.case-content {
  height: 10.5rem;
  overflow: hidden;
}
.case-title {
  width: 100%;
  text-align: left;
  font-size: 1.25rem;
  color: var(--gray600);
  line-height: 130%;
}
.case-description {
  width: 100%;
  font-weight: 400;
  color: var(--gray600);
  text-align: left;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  height: 6.75rem;
  overflow: hidden;
}

.case-link {
  font-size: 0.875rem;
  background-color: var(--primary);
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  transition: 200ms;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.case-link:hover {
  background-color: var(--primaryDark);
}

@media screen and (max-width: 80rem) {
  .case-card {
    padding: 1.25rem;
    gap: 0.75rem;
  }
  .case-image {
    height: 14vw;
  }
  .case-title {
    font-size: 1.125rem;
  }
}

@media screen and (max-width: 64rem) {
  .case-card {
    padding: 1.5rem;
    gap: 1rem;
  }
  .case-image {
    width: 100%;
    height: 12rem;
  }
  .case-title {
    font-size: 1.25rem;
  }
}
</style>
