<template>
  <section class="hero">
    <div class="hero__inner">
      <a href="https://go.2gis.com/XAbrT" target="_blank" class="hero__badge">
        <span class="max-lg:hidden"
          >Реальные отзывы в независимых источниках.</span
        >
        <span class="lg:hidden">Отзывы клиентов</span>
        <span class="hero__badge-btn">Читать →</span>
      </a>

      <h1 class="hero__title hero__title--animate">
        РВП, ВНЖ, гражданство РФ — юрист по миграционному праву в Челябинске
      </h1>

      <p class="hero__subtitle hero__subtitle--animate">
        Помогаем законно оформить РВП, ВНЖ и гражданство РФ, подготовить
        документы и пройти процедуры без лишних отказов и затягиваний. Защищаем
        при выдворении/депортации, запрете на въезд и в спорах с МВД. Работаем
        по Челябинску и области.
      </p>

      <div class="hero__actions hero__actions--animate">
        <LeadButton />
        <NuxtLink to="/cases" class="hero__secondary-btn"
          >Наши кейсы →</NuxtLink
        >
      </div>

      <div ref="cardsRef" class="hero__cards">
        <TransitionGroup name="slide-up-cards" tag="div" class="hero__cards-grid">
          <div
            v-for="(card, idx) in visibleCards"
            :key="card.title"
            class="hero-card__item"
            :style="{ '--stagger-delay': `${idx * 0.35}s` }"
          >
            <div class="hero-card__icon">{{ idx + 1 }}</div>
            <div class="hero-card__title">{{ card.title }}</div>
            <div class="hero-card__text">{{ card.text }}</div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { LeadButton } from "~/src/features/lead-button";
import { computed, ref } from "vue";
import { useIntersectionObserver } from "~/src/shared/lib/useIntersectionObserver";

const cardsRef = ref<HTMLElement | null>(null);
const { isVisible: isCardsVisible } = useIntersectionObserver(cardsRef, {
  threshold: 0.2,
  rootMargin: "0px 0px -20% 0px",
});

const heroCards = [
  {
    title: "РВП, ВНЖ, гражданство РФ",
    text: "Проверим основания, подготовим пакет документов, запишем и сопроводим по этапам — чтобы снизить риск отказа.",
  },
  {
    title: "Запрет на въезд и отказ",
    text: "Разберём причину, подготовим обращения и жалобы, при необходимости — иск в суд. Поможем восстановить право на въезд.",
  },
  {
    title: "Выдворение/депортация",
    text: "Оценим риски, соберём доказательства и защитим в споре с МВД и в суде. Работаем быстро в срочных ситуациях.",
  },
];

const visibleCards = computed(() => (isCardsVisible.value ? heroCards : []));
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100dvh;
  padding-block: 10rem 5rem;
}

.hero__inner {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 5rem;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 2rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--gray400);
  border: 1px solid var(--gray300);
  transition: 100ms;
}
.hero__badge:hover {
  border: 1px solid var(--gray400);
}

.hero__badge-btn {
  color: var(--primaryDark);
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

.hero__title {
  max-width: 58rem;
  font-size: 4rem;
  line-height: 110%;
  font-weight: 700;
  color: var(--gray600);
}

.hero__title--animate {
  opacity: 0;
  animation: slide-up 0.6s ease-out 1.1s forwards;
}

.hero__subtitle {
  max-width: 36rem;
  color: var(--gray400);
}

.hero__subtitle--animate {
  opacity: 0;
  animation: slide-up 0.6s ease-out 1.6s forwards;
}

.hero__actions {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  width: 30rem;
}

.hero__actions--animate {
  opacity: 0;
  animation: slide-up 0.6s ease-out 2s forwards;
}

.hero__secondary-btn {
  color: var(--gray500);
  font-weight: 500;
}

.hero__cards {
  width: 100%;
  margin-top: 2rem;
  min-height: 12rem;
}

.hero__cards-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  width: 100%;
}

.hero-card__item {
  background-color: var(--white);
  border-radius: 0.5rem;
  box-shadow: var(--cardShadow);
  gap: 1rem;
  padding: 2.5rem;
  text-align: left;
}
.hero-card__icon {
  color: var(--gray600);
  font-weight: 600;
  border-radius: 50%;
  background: var(--yellowToBlueGradient);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
}
.hero-card__title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--gray600);
  margin-top: 2.25rem;
}
.hero-card__text {
  color: var(--gray400);
  font-weight: 500;
}

/* Карточки поднимаются из-за невидимого барьера (нижняя граница контейнера) */
.slide-up-cards-enter-active {
  transition:
    transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      var(--stagger-delay, 0s),
    opacity 0.6s ease-out var(--stagger-delay, 0s);
}

.slide-up-cards-enter-from {
  opacity: 0;
  transform: translateY(2rem);
}

@media screen and (max-width: 96rem) {
  .hero__inner {
    padding-inline: 2rem;
  }
}

@media screen and (max-width: 80rem) {
  .hero__inner {
    padding-inline: 1rem;
  }
  .hero__title {
    font-size: 3rem;
    max-width: 44rem;
  }
  .hero__cards-grid {
    gap: 1rem;
  }
  .hero-card__item {
    padding: 1.5rem;
  }
  .hero-card__title {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
}

@media screen and (max-width: 64rem) {
  .hero__inner {
    gap: 1.5rem;
    align-items: flex-start;
  }
  .hero__badge {
    padding: 0.5rem 1rem;
  }
  .hero__title {
    font-size: 2rem;
    width: 100%;
    text-align: left;
    max-width: 100%;
  }
  .hero__subtitle {
    text-align: left;
    max-width: 100%;
    width: 100%;
  }
  .hero__actions {
    flex-direction: column;
    align-items: start;
    width: 100%;
  }

  .hero__cards-grid {
    display: flex;
    flex-direction: column;
  }
  .hero-card__item {
    padding: 1.75rem 2rem;
  }
  .hero-card__title {
    margin-top: 1.5rem;
  }
}
</style>
