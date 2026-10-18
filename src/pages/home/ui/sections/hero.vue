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

      <h1 class="hero__title">
        Юридическая помощь с понятным планом действий в Челябинске
      </h1>

      <p class="hero__subtitle">
        Доверьте решение своего вопроса профессионалам. Мы гарантируем
        индивидуальный подход к каждому делу, абсолютную конфиденциальность и
        прозрачность на всех этапах работы.
      </p>

      <div class="hero__actions">
        <LeadButton />
        <NuxtLink to="/about" class="hero__secondary-btn">
          О компании →
        </NuxtLink>
      </div>

      <div class="hero__cards">
        <div class="card__container">
          <img
            :src="cards[0]?.image"
            :alt="cards[0]?.alt"
            class="card__image"
          />
        </div>
        <div class="card__container">
          <AchievementsWidget />
        </div>
        <div class="card__container">
          <img
            :src="cards[1]?.image"
            :alt="cards[1]?.alt"
            class="card__image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { LeadButton } from "~/src/features/lead-button";
import { AchievementsWidget } from "~/src/features/achievements-widget";
import lawyer1 from "../../assets/lawyer_1.webp";
import lawyer2 from "../../assets/lawyer_2.webp";

interface Card {
  image: string;
  alt: string;
}

const cards: Card[] = [
  {
    image: lawyer1,
    alt: "Юрист консультирует клиента",
  },
  {
    image: lawyer2,
    alt: "Юрист за рабочим столом",
  },
];
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

.hero__title {
  max-width: 64rem;
  font-size: 4rem;
  line-height: 110%;
  font-weight: 700;
  color: var(--gray600);
}

.hero__subtitle {
  max-width: 48rem;
  color: var(--gray400);
}

.hero__actions {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  width: auto;
}

.hero__secondary-btn {
  color: var(--gray500);
  font-weight: 500;
}

.hero__cards {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
}

.card__container {
  height: 80svh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.5rem;
}
.card__image {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}

@media screen and (max-width: 96rem) {
  .hero__inner {
    padding-inline: 2rem;
  }

  .card__container {
    height: 70svh;
  }
}

@media screen and (max-width: 80rem) {
  .hero__inner {
    padding-inline: 1rem;
  }
  .hero__cards {
    gap: 1rem;
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
    grid-template-columns: 1fr;
  }

  .hero__cards-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .hero__cards {
    min-height: 32rem;
  }
  .card__container {
    height: 90svh;
  }

  .hero-card__image {
    height: 32rem;
  }
}
</style>
