<template>
  <section class="you-get">
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
import photo from "~/src/pages/spheres/labour-law/assets/auto_1.webp";
const content = [
  {
    title: "Ассистента на переговорах",
    description:
      "Выезжаем в ГАИ и страховую компанию, ведём переговоры и добиваемся максимальной выплаты. При правильном подходе часто можно избежать суда.",
  },
  {
    title: "Уверенность в судебном процессе",
    description:
      "Выходим в суд за Вас чтобы завершить процесс с максимальной выгодой. Вы можете спать спокойно, зная, что в суде работают профессионалы.",
  },
  {
    title: "Заботу и правововую поддержку",
    description:
      "Консультируем неограниченно, объясняем суть действий и всегда держим в курсе дел. Понимаем, что разбитый автомобиль и проблемы с документами могут выбить из колеи, поэтому всегда относимся с пониманием в Вашим вопросам.",
  },
];
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
  object-position: 50% 10%;
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
  }
  .you-get__content {
    gap: 1.5rem;
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
