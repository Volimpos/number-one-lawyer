<template>
  <section
    ref="sectionRef"
    class="you-get"
    :class="{ 'you-get--visible': isSectionVisible }"
  >
    <div class="you-get__inner">
      <h2 class="you-get__title">Что Вы получаете</h2>

      <div class="you-get__grid">
        <img
          :src="photo"
          alt="Автоюристы готовятся к судебному процессу"
          class="you-get__image"
        />
        <div class="you-get__content">
          <div
            class="you-get__content-item"
            v-for="item in content"
            :key="item.title"
          >
            <p class="you-get__content-item-title">
              {{ item.title }}
            </p>
            <p class="you-get__content-item-text">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver } from "~/src/shared/lib/useIntersectionObserver";

interface YouGetSectionContent
  extends Array<{
    title: string;
    description: string;
  }> {}

const props = defineProps<{
  photo: string;
  content: YouGetSectionContent;
}>();

const sectionRef = ref<HTMLElement | null>(null);
const { isVisible: isSectionVisible } = useIntersectionObserver(sectionRef, {
  threshold: 0.2,
  rootMargin: "0px 0px -15% 0px",
});
</script>

<style scoped>
.you-get {
  padding: 4rem 0;
}

.you-get__inner {
  width: 100%;
  margin: 0 auto;
  padding-inline: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}

.you-get__title {
  font-size: 3rem;
  line-height: 110%;
  font-weight: 700;
  color: var(--gray600);
  max-width: 60rem;
}

.you-get__subtitle {
  max-width: 46rem;
  color: var(--gray400);
}

.you-get__grid {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  width: 100%;
}

.you-get__image {
  border-radius: 0.5rem;
  height: 36rem;
  object-fit: cover;
  width: 100%;
}
.you-get__content {
  padding-block: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.you-get__content-item {
  text-align: left;
}
.you-get__content-item-title {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 110%;
  color: var(--gray600);
}

.you-get__content-item-text {
  color: var(--gray400);
  font-weight: 500;
  margin-top: 0.5rem;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(1.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.you-get__title,
.you-get__image,
.you-get__content-item {
  opacity: 0;
  transform: translateY(1.5rem);
}

.you-get--visible .you-get__title {
  animation: slide-up 0.6s ease-out 0.2s forwards;
}

.you-get--visible .you-get__image {
  animation: slide-up 0.6s ease-out 0.6s forwards;
}

.you-get--visible .you-get__content-item {
  animation: slide-up 0.6s ease-out 0.9s forwards;
}

.you-get--visible .you-get__content-item:nth-child(2) {
  animation-delay: 1s;
}

.you-get--visible .you-get__content-item:nth-child(3) {
  animation-delay: 1.1s;
}

.you-get--visible .you-get__content-item:nth-child(4) {
  animation-delay: 1.2s;
}

.you-get--visible .you-get__content-item:nth-child(5) {
  animation-delay: 1.3s;
}

@media screen and (max-width: 96rem) {
  .you-get__inner {
    padding-inline: 2rem;
  }
}

@media screen and (max-width: 80rem) {
  .you-get__inner {
    padding-inline: 1rem;
  }
  .you-get__grid {
    gap: 1rem;
  }
  .card {
    padding: 1.5rem;
  }
}

@media screen and (max-width: 64rem) {
  .you-get {
    padding: 3rem 0;
  }
  .you-get__inner {
    align-items: flex-start;
    text-align: left;
  }
  .you-get__title {
    font-size: 2rem;
  }
  .you-get__grid {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 0;
    gap: 2rem;
  }
  .you-get__content {
    gap: 1.25rem;
    padding-block: 0;
  }
  .you-get__content-item {
    border-radius: 0.5rem;
    padding: 1.5rem;
    background: var(--white);
    box-shadow: var(--cardShadow);
  }
}
</style>
