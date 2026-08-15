<template>
  <article class="stats-section">
    <div>
      <h2 class="stats-section__title">Наши успехи</h2>
      <p class="stats-section__subtitle">
        Мы очень давно помогаем людям сохранять деньги и другие активы. Если все
        достижения посчитать математически, то получается следующее.
      </p>
    </div>

    <div class="stats-section__grid">
      <div
        v-for="stat in stats"
        :key="stat.description"
        class="stats-section__item"
      >
        <h3 class="stats-section__item-title">
          {{ stat.prefix }}{{ stat.value }}{{ stat.suffix }}
        </h3>
        <p class="stats-section__item-description">{{ stat.description }}</p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface StatItem {
  value: number | string;
  suffix: string;
  prefix: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: 15,
    suffix: " лет+",
    prefix: "",
    description: "Опыта наших специалистов в юридической сфере",
  },
  {
    value: "Топ 5",
    suffix: "",
    prefix: "",
    description: "Юридических компаний Челябинска",
  },
  {
    value: 9,
    suffix: "",
    prefix: "",
    description: "Сфер правовой экспертизы",
  },
  {
    value: "Огромная",
    suffix: "",
    prefix: "",
    description: "Судебная практика",
  },
];
</script>

<style scoped>
.stats-section {
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.stats-section__title {
  font-size: 3rem;
  line-height: 110%;
  font-weight: 700;
  color: var(--gray600);
  text-align: center;
}

.stats-section__subtitle {
  max-width: 40rem;
  color: var(--gray400);
  text-align: center;
  max-width: 36rem;
  margin-top: 1rem;
}
.stats-section__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  width: 100%;
  padding: 0 5rem;
  margin-top: 2rem;
  gap: 0.5rem;
}

.stats-section__item {
  padding: 2rem;
  background-color: var(--blueShadow);
  border-radius: 0;
}
.stats-section__item-title {
  color: var(--gray500);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.075rem;
}
.stats-section__item-description {
  color: var(--gray400);
}

/* 4 колонки – скругляем только крайние карточки слева и справа */
.stats-section__item:first-child {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.stats-section__item:last-child {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

@media screen and (max-width: 96rem) {
  .stats-section__grid {
    padding-inline: 2rem;
  }
}

@media screen and (max-width: 80rem) {
  .stats-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-inline: 1rem;
    gap: 0.75rem;
  }

  /* 2 колонки – скругляем все четыре угла сетки */
  .stats-section__item,
  .stats-section__item:first-child,
  .stats-section__item:last-child {
    border-radius: 0;
  }

  .stats-section__item:nth-child(1) {
    border-top-left-radius: 0.5rem;
  }

  .stats-section__item:nth-child(2) {
    border-top-right-radius: 0.5rem;
  }

  .stats-section__item:nth-child(3) {
    border-bottom-left-radius: 0.5rem;
  }

  .stats-section__item:nth-child(4) {
    border-bottom-right-radius: 0.5rem;
  }
}

@media screen and (max-width: 64rem) {
  .stats-section {
    padding-inline: 1rem;
    align-items: start;
  }
  .stats-section__title {
    text-align: left;
    font-size: 2rem;
  }
  .stats-section__subtitle {
    text-align: left;
  }
  .stats-section__grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding-inline: 0;
    margin-top: 0.5rem;
  }

  /* 1 колонка – сперва полностью сбрасываем скругление на всех псевдоклассах,
     потом задаём только нужные углы у первой и последней карточки */
  .stats-section__item,
  .stats-section__item:first-child,
  .stats-section__item:last-child,
  .stats-section__item:nth-child(1),
  .stats-section__item:nth-child(2),
  .stats-section__item:nth-child(3),
  .stats-section__item:nth-child(4) {
    border-radius: 0;
  }

  .stats-section__item:first-child {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  .stats-section__item:last-child {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
}
</style>
