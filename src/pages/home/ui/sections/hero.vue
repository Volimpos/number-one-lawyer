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
        Работаем, чтобы сохранить Ваше время, деньги и нервы
      </h1>

      <p class="hero__subtitle hero__subtitle--animate">
        Доверьте решение своего вопроса профессионалам. Мы гарантируем
        индивидуальный подход к каждому делу, абсолютную конфиденциальность и
        прозрачность на всех этапах работы.
      </p>

      <div class="hero__actions hero__actions--animate">
        <LeadButton />
        <NuxtLink to="/cases" class="hero__secondary-btn">
          Наши кейсы →
        </NuxtLink
        >
      </div>

      <div class="animated-card-wrapper">
        <AnimatedCards :cards="cards"/>
      </div>
     
    </div>
  </section>
</template>

<script setup lang="ts">
import { LeadButton } from "@/features/lead-button";
import { useStaggeredReveal } from "@/shared/lib/useStaggeredReveal";
import lawyer1 from "../../assets/lawyer_1.webp";
import lawyer2 from "../../assets/lawyer_2.webp";
import lawyer3 from "../../assets/lawyer_3.webp";
import { AnimatedCards } from "@/shared/ui/animated-cards";

const cards = [
  {
    image: lawyer1,
    alt: "Юрист консультирует клиента",
  },
  {
    image: lawyer2,
    alt: "Юрист за рабочим столом",
  },
  {
    image: lawyer3,
    alt: "Юрист изучает документы",
  },
];

const cardsRef = ref<HTMLElement | null>(null);
const { isVisible: isCardsVisible, staggeredItems: staggeredCards } =
  useStaggeredReveal(cards, cardsRef, { threshold: 0.3 });
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
  max-width: 64rem;
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
  max-width: 48rem;
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

  .hero__cards {
    margin-top: 1rem;
  }

  .hero__cards-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .hero__cards {
    min-height: 32rem;
  }

  .hero-card__image {
    height: 32rem;
  }

  .hero-card__wrapper {
    transform: none;
    opacity: 0;
    transition: opacity 0.8s ease-out;
    transition-delay: calc(var(--stagger-index, 0) * 150ms);
  }

  .hero__cards--visible .hero-card__wrapper {
    opacity: 1;
  }
}
</style>
