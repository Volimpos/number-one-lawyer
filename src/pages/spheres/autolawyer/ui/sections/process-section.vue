<template>
  <section class="process">
    <div class="process__inner">
      <h2 class="process__title">Как мы ведём авто-дело: спокойно, быстро, по процедуре</h2>
      <p class="process__subtitle">
        В авто-спорах выигрывает не тот, кто громче, а тот, у кого доказательства и сроки под
        контролем. Мы выстраиваем работу так, чтобы вы понимали каждый шаг.
      </p>

      <div class="process__grid">
        <article v-for="step in steps" :key="step.title" class="step">
          <div class="step__num">{{ step.num }}</div>
          <p class="step__title">{{ step.title }}</p>
          <p class="step__text">{{ step.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    num: "01",
    title: "Разбираем ситуацию и риски",
    text: "Смотрим документы, схему/видео, сроки, перспективу. Сразу говорим честно: что реально добиться и чем рискуем.",
  },
  {
    num: "02",
    title: "Собираем доказательства",
    text: "Запросы, экспертиза, фиксация повреждений, подготовка позиции. Формируем пакет так, чтобы «не к чему было придраться».",
  },
  {
    num: "03",
    title: "Добиваемся результата",
    text: "Переговоры и претензия → суд → исполнительное производство при необходимости. Вы получаете итог, а не «процесс».",
  },
];
</script>

<style scoped>
.process {
  padding: 4rem 0;
  background: rgba(121, 114, 216, 0.03);
}

.process__inner {
  width: 100%;
  margin: 0 auto;
  padding-inline: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}

.process__title {
  font-size: 3rem;
  line-height: 110%;
  font-weight: 700;
  color: var(--gray600);
  max-width: 60rem;
}

.process__subtitle {
  max-width: 46rem;
  color: var(--gray400);
}

.process__grid {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  width: 100%;
}

.step {
  border: 1px solid var(--gray200);
  border-radius: 0.5rem;
  padding: 1.75rem;
  text-align: left;
  background: var(--white);
}

.step__num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  padding-inline: 0.75rem;
  border-radius: 999px;
  background: var(--yellowToBlueGradient);
  color: var(--gray600);
  font-weight: 700;
  font-size: 0.875rem;
}

.step__title {
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 120%;
  color: var(--gray600);
}

.step__text {
  margin-top: 0.75rem;
  color: var(--gray500);
}

@media screen and (max-width: 96rem) {
  .process__inner {
    padding-inline: 2rem;
  }
}

@media screen and (max-width: 80rem) {
  .process__inner {
    padding-inline: 1rem;
  }
  .process__grid {
    gap: 1rem;
  }
}

@media screen and (max-width: 64rem) {
  .process__inner {
    align-items: flex-start;
    text-align: left;
  }
  .process__title {
    font-size: 2rem;
  }
  .process__grid {
    grid-template-columns: 1fr;
    margin-top: 1rem;
  }
}
</style>

