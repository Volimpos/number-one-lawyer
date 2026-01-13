<template>
  <section class="hero">
    <div class="hero__inner">
      <NuxtLink to="/reviews" class="hero__badge">
        <span class="max-lg:hidden"
          >Реальные отзывы в независимых источниках.</span
        >
        <span class="lg:hidden">Отзывы клиентов</span>
        <span class="hero__badge-btn">Читать →</span>
      </NuxtLink>

      <h1 class="hero__title">Помощь опытных автоюристов в Челябинске</h1>

      <p class="hero__subtitle">
        Восстанавливаем справедливость на дорогах. Взыскание ущерба при ДТП,
        оспаривание вины, помощь при лишении прав и споры со страховыми
        компаниями. Более 10 лет успешной практики.
      </p>

      <div class="hero__actions">
        <LeadButton />
        <NuxtLink to="/cases" class="hero__secondary-btn"
          >Наши кейсы →</NuxtLink
        >
      </div>

      <div class="hero__cards">
        <div class="hero-card__item">
          <div class="hero-card__icon">1</div>
          <div class="hero-card__title">Помощь при ДТП</div>
          <div class="hero-card__text">
            Оспаривание вины, взыскание стоимости ремонта, установление
            виновника и привлечение к ответственности
          </div>
        </div>

        <div class="hero-card__item">
          <div class="hero-card__icon">2</div>
          <div class="hero-card__title">Лишение прав</div>
          <div class="hero-card__text">
            Находим нарушения, обжалуем постановление, возвращаем права
          </div>
        </div>

        <div class="hero-card__item">
          <div class="hero-card__icon">3</div>
          <div class="hero-card__title">Споры со страховой</div>
          <div class="hero-card__text">
            Добиваемся выплат в судебном и досудебном порядке. Оспорим
            незаконный отказ.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { LeadButton } from "~/src/features/lead-button";
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
  max-width: 58rem;
  font-size: 4rem;
  line-height: 110%;
  font-weight: 700;
  color: var(--gray600);
}

.hero__subtitle {
  max-width: 36rem;
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
}

.hero-card__item {
  background-color: var(--white);
  border-radius: 0.5rem;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);
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
