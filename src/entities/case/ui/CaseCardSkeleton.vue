<template>
  <article class="case-card" aria-busy="true" aria-live="polite">
    <Skeleton class="case-image" />

    <div class="service-info">
      <Skeleton class="date" />
      <Skeleton class="sphere" />
    </div>

    <div class="case-content">
      <Skeleton class="case-title-line case-title-line--1" />
      <Skeleton class="case-title-line case-title-line--2" />

      <div class="case-description">
        <Skeleton class="desc-line desc-line--1" />
        <Skeleton class="desc-line desc-line--2" />
        <Skeleton class="desc-line desc-line--3" />
      </div>
    </div>

    <Skeleton class="case-link-skeleton" />
  </article>
</template>
  
<script setup lang="ts">
import { Skeleton } from "../../../shared/ui/skeleton";
</script>
  
<style scoped>
.case-card {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1rem;
  background-color: var(--white);
  box-shadow: var(--cardShadow);
  padding: 1.5rem;
  border-radius: 0.5rem;
}

.case-image {
  width: 100%;
  height: 12rem;
  aspect-ratio: 16/9;
  border-radius: 0.25rem;
}

.service-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  width: 100%;
}

.date {
  height: 1rem;
  flex: 1 1 0;
  width: auto;
  border-radius: 999px;
}

.sphere {
  height: 1.5rem;
  border-radius: 999px;
  flex: 2 1 0;
  width: auto;
}

.case-content {
  height: 10.5rem;
  overflow: hidden;
  width: 100%;
}

.case-title-line {
  height: 1.5rem;
  border-radius: 999px;
}

.case-title-line--1 {
  width: 100%;
}

.case-title-line--2 {
  width: 60%;
  margin-top: 0.5rem;
}

.case-description {
  margin-top: 0.5rem;
  height: 6.75rem;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.desc-line {
  height: 0.875rem;
  border-radius: 999px;
}

.desc-line--1 {
  width: 100%;
}

.desc-line--2 {
  width: 95%;
}

.desc-line--3 {
  width: 70%;
}

.case-link-skeleton {
  height: 2rem;
  width: 7.5rem;
  border-radius: 0.25rem;
}

@media screen and (max-width: 80rem) {
  .case-card {
    padding: 1.25rem;
    gap: 0.75rem;
  }

  .case-image {
    height: 14vw;
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
}
</style>
