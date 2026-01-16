<template>
  <article class="cta-section">
    <div class="cta-section__inner">
      <div class="text-block">
        <h3 class="cta-section__title">За советы денег не берем!</h3>
        <p class="cta-section__description">
          Получите бесплатную консультацию по Вашему вопросу прямо сейчас. Ни
          одна нейросеть не заменит точный, профессиональный совет знающего
          специалиста. Доверьте решение своего вопроса Юристу №1 в Челябинске и
          мы Вас не подведем.
        </p>
        <LeadButton />
      </div>
      <div class="image-block">
        <img src="../assets/cta.webp" alt="Юрист консультирует клиента" />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { LeadButton } from "~/src/features/lead-button";
</script>

<style scoped>
.cta-section {
  padding: 4rem 5rem;
}
.cta-section__inner {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  height: 70dvh;
  background: var(--yellowToBlueGradient);
  border-radius: 0.5rem;
}
.text-block {
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1.5rem;
}
.cta-section__title {
  font-size: 3rem;
  line-height: 110%;
  font-weight: 700;
  color: var(--gray600);
}
.cta-section__description {
  color: var(--gray500);
}
.image-block {
  flex: 1;
  position: relative;
}
.image-block img {
  width: 32rem;
  aspect-ratio: 1/1;
  position: absolute;
  bottom: 0;
  right: 3rem;
  border-radius: 0.5rem 0.5rem 0 0;
}

@media screen and (max-width: 96rem) {
  .cta-section {
    padding: 4rem 2rem;
  }
}

@media screen and (max-width: 80rem) {
  .cta-section {
    padding: 4rem 1rem;
  }
  .cta-section__inner {
    height: 60dvh;
  }
  .text-block {
    flex: 1;
    padding: 2rem;
  }
  .cta-section__title {
    font-size: 2rem;
  }

  .image-block img {
    height: calc(100% - 2rem);
    aspect-ratio: 3/4;
    object-fit: cover;
    right: 2rem;
  }
}

@media screen and (max-width: 64rem) {
  .cta-section {
    padding: 0 1rem;
  }

  .cta-section__inner {
    flex-direction: column;
    height: auto;
  }
  .text-block {
    padding: 1.5rem;
  }
  .cta-section__title {
    font-size: 1.75rem;
  }
  .image-block {
    width: 100%;
    aspect-ratio: 1/1;
    height: 20rem;
  }
  .image-block img {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 0 0 0.5rem 0.5rem;
  }
}
</style>
