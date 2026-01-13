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

      <h1 class="hero__title">
        Работаем, чтобы сохранить Ваше время, деньги и нервы
      </h1>

      <p class="hero__subtitle">
        Доверьте решение своего вопроса профессионалам. Мы гарантируем
        индивидуальный подход к каждому делу, абсолютную конфиденциальность и
        прозрачность на всех этапах работы.
      </p>

      <div class="hero__actions">
        <LeadButton />
        <NuxtLink to="/cases" class="hero__secondary-btn"
          >Наши кейсы →</NuxtLink
        >
      </div>

      <div class="hero__cards">
        <img
          class="hero-card__image max-lg:hidden"
          src="../../assets/lawyer_1.webp"
          alt="Юрист консультирует клиента"
        />

        <img
          class="hero-card__image"
          src="../../assets/lawyer_2.webp"
          alt="Юрист за рабочим столом"
        />
        <img
          class="hero-card__image max-lg:hidden"
          src="../../assets/lawyer_3.webp"
          alt="Юрист изучает документы"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { LeadButton } from "../../../../features/lead-button";
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

.hero-card__image {
  width: 100%;
  height: 36rem;
  object-fit: cover;
  border-radius: 0.25rem;
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
    margin-top: 1rem;
  }

  .hero-card__image {
    height: 32rem;
  }
}
</style>
