<template>
  <section class="hero">
    <div class="hero__inner">
      <a  href="https://go.2gis.com/XAbrT" target="_blank" class="hero__badge">
        <span class="max-lg:hidden"
          >Реальные отзывы в независимых источниках.</span
        >
        <span class="lg:hidden">Отзывы клиентов</span>
        <span class="hero__badge-btn">Читать →</span>
      </a>

      <h1 class="hero__title">
        Команда адвокатов Челябинска по уголовным делам
      </h1>

      <p class="hero__subtitle">
        Профессиональная защита обвиняемых и восстановление прав потерпевших.
        Специализация: дела по наркотикам, финансовым преступлениям, хищению.
        Опыт ведения сложных дел, судебное и досудебное сопровождение.
      </p>

      <div class="hero__actions">
        <LeadButton />
        <NuxtLink to="/cases" class="hero__secondary-btn"
          >Наши кейсы →</NuxtLink
        >
      </div>

      <div class="hero__cards">
        <div
          v-for="(card, index) in heroCards"
          :key="index"
          class="hero-card__item"
          :class="{
            'hero-card__item--right-aligned':
              index === heroCards.length - 1 && heroCards.length % 3 !== 0,
          }"
        >
          <div class="hero-card__icon">{{ index + 1 }}</div>
          <div class="hero-card__title">{{ card.title }}</div>
          <div class="hero-card__text">{{ card.text }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { LeadButton } from "~/src/features/lead-button";

interface HeroCard {
  title: string;
  text: string;
}

const heroCards: HeroCard[] = [
  {
    title: "Консультации",
    text: "Бесплатные первичные консультации по уголовным делам. Анализ ситуации, оценка перспектив дела, разработка стратегии защиты или защиты прав потерпевшего.",
  },
  {
    title: "Сопровождение на допросах",
    text: "Присутствие адвоката на допросах в следственных органах. Защита от незаконных методов ведения допроса, контроль соблюдения прав, помощь в формулировке показаний.",
  },
  {
    title: "Выезд в СИЗО",
    text: "Срочные и плановые встречи с подзащитными в следственных изоляторах. Консультации, подготовка к следственным действиям, обжалование меры пресечения.",
  },
  {
    title: "Досудебное сопровождение",
    text: "Защита на стадии дознания и предварительного следствия. Участие в следственных действиях, обжалование незаконных решений следователя, сбор доказательств, ходатайства о прекращении дела или изменении меры пресечения.",
  },
  {
    title: "Судебное сопровождение",
    text: "Полное ведение дела в суде: подготовка процессуальных документов, участие в заседаниях, защита интересов на всех стадиях уголовного процесса, обжалование приговоров.",
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
  width: 64rem;
  font-size: 4rem;
  line-height: 110%;
  font-weight: 700;
  color: var(--gray600);
}

.hero__subtitle {
  max-width: 44rem;
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

.hero__secondary-btn {
  color: var(--gray500);
  font-weight: 500;
}

.hero__cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  width: 100%;
  margin-top: 2rem;
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
  .hero__cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
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

  .hero__cards {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }
  .hero-card__item {
    padding: 1.75rem 2rem;
  }
  .hero-card__title {
    margin-top: 1.5rem;
  }
}
</style>
