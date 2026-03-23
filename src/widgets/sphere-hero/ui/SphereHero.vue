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

      <h1
        class="hero__title"
        :style="{ '--hero-title-max-width': content.titleMaxWidth ?? '58rem' }"
      >
        {{ content.title }}
      </h1>

      <p
        class="hero__subtitle"
        :style="{
          '--hero-subtitle-max-width': content.subtitleMaxWidth ?? '36rem',
        }"
      >
        {{ content.subtitle }}
      </p>

      <div class="hero__actions hero__actions--animate">
        <LeadButton />
        <NuxtLink to="/cases" class="hero__secondary-btn"
          >Наши кейсы →</NuxtLink
        >
      </div>

      <div class="hero__cards">
        <div class="hero__cards-grid">
          <div
            v-for="(card, index) in content.cards"
            :key="`${card.title}-${index}`"
            class="hero-card__item"
            :class="{
              'hero-card__item--right-aligned':
                content.alignLastCardRight &&
                index === content.cards.length - 1 &&
                content.cards.length % 3 !== 0,
            }"
          >
            <div class="hero-card__icon">{{ index + 1 }}</div>
            <div class="hero-card__title">{{ card.title }}</div>
            <div class="hero-card__text">{{ card.text }}</div>
          </div>
        </div>
      </div>
      <div class="hero__achievements">
        <div class="hero__info-card hero__info-card--left">
          <p class="hero__info-card-label">Первый шаг</p>
          <p class="hero__info-card-title">
            Разбираем ситуацию и даем стратегию в день обращения
          </p>
          <p class="hero__info-card-text">
            Четко объясняем риски, варианты решения и план действий простым
            языком.
          </p>
        </div>
        <AchievementsWidget />
        <div class="hero__info-card hero__info-card--right">
          <p class="hero__info-card-label">Без сюрпризов</p>
          <p class="hero__info-card-title">
            Фиксируем условия и держим вас в курсе на каждом этапе
          </p>
          <p class="hero__info-card-text">
            Вы всегда понимаете, что уже сделано, что дальше и какой результат
            ожидаем.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { LeadButton } from "~/src/features/lead-button";
import { AchievementsWidget } from "~/src/features/achievements-widget";
import type { SphereHeroContent } from "../model/types";

defineProps<{
  content: SphereHeroContent;
}>();
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
  max-width: var(--hero-title-max-width);
  font-size: 4rem;
  line-height: 110%;
  font-weight: 700;
  color: var(--gray600);
}

.hero__subtitle {
  max-width: var(--hero-subtitle-max-width);
  color: var(--gray400);
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
  justify-items: center;
  justify-content: center;
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
  line-height: 110%;
}

.hero-card__text {
  color: var(--gray400);
  font-weight: 500;
  margin-top: 1rem;
}

.hero__achievements {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
  min-height: 80svh;
}

.hero__info-card {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border-radius: 0.5rem;
  background: var(--white);
  box-shadow: 0 20px 45px rgb(13 16 35 / 10%);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.hero__info-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    145deg,
    rgb(255 255 255 / 66%),
    rgb(255 255 255 / 8%)
  );
  z-index: -1;
}

.hero__info-card-label {
  display: inline-flex;
  width: fit-content;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primaryDark);
  background-color: white;
  border: 1px solid var(--gray200);
  border-radius: 1rem;
  padding: 0.35rem 1rem;
}

.hero__info-card-title {
  margin-top: 1.25rem;
  font-size: 1.35rem;
  line-height: 1.2;
  font-weight: 700;
  color: var(--gray600);
}

.hero__info-card-text {
  margin-top: 0.85rem;
  font-weight: 500;
  color: var(--gray400);
  max-width: 28ch;
}

.hero__info-card--right {
  align-items: flex-start;
}

.hero-card__item--right-aligned {
  grid-column: 3 / 4;
}

@media screen and (max-width: 80rem) {
  .hero-card__item--right-aligned {
    grid-column: auto;
  }
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
  .hero__achievements {
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
  .hero__achievements {
    display: flex;
    flex-direction: column;
    padding: 0;
    height: auto;
  }

  .hero__info-card {
    min-height: 14rem;
    width: 100%;
    padding: 1.5rem;
  }

  .hero__achievements > :nth-child(2) {
    height: 70svh;
    min-height: 70svh;
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
