<template>
  <article ref="sectionRef" class="stats-section">
    <div>
      <h2 :class="['stats-section__title', { 'stats-section__title--animate': isVisible }]">
        Наши успехи
      </h2>
      <p :class="['stats-section__subtitle', { 'stats-section__subtitle--animate': isVisible }]">
        Мы очень давно помогаем людям сохранять деньги и другие активы. Если все
        достижения посчитать математически, то получается следующее.
      </p>
    </div>

    <div class="stats-section__grid">
      <div v-for="(stat, index) in stats" :key="stat.description" class="stats-section__item">
        <h3 class="stats-section__item-title">{{ formatNumber(animatedValues[index] ?? 0, stat) }}</h3>
        <p class="stats-section__item-description">{{ stat.description }}</p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from "../../../../shared/lib/useIntersectionObserver";
import { useCountAnimation } from "../../../../shared/lib/useCountAnimation";

interface StatItem {
  value: number;
  suffix: string;
  prefix: string;
  description: string;
  useSpaces: boolean;
}

const stats: StatItem[] = [
  {
    value: 20000,
    suffix: " +",
    prefix: "",
    description: "Консультаций проведено",
    useSpaces: true,
  },
  {
    value: 96,
    suffix: "%",
    prefix: "",
    description: "Побед в судебных процессах",
    useSpaces: false,
  },
  {
    value: 210,
    suffix: " млн. ₽",
    prefix: "",
    description: "Выбили для клиентов",
    useSpaces: false,
  },
  {
    value: 4000,
    suffix: " +",
    prefix: "",
    description: "Дел в работе сейчас",
    useSpaces: true,
  },
];

const sectionRef = ref<HTMLElement | null>(null);

const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.3 });

const { animatedValues } = useCountAnimation(
  stats.map((stat) => stat.value),
  isVisible,
  { duration: 1500, startPercent: 0.7 }
);

function formatNumber(value: number, stat: StatItem): string {
  const roundedValue = Math.round(value);
  let formatted: string;

  if (stat.useSpaces) {
    formatted = roundedValue.toLocaleString("ru-RU").replace(/,/g, " ");
  } else {
    formatted = roundedValue.toString();
  }

  return `${stat.prefix}${formatted}${stat.suffix}`;
}
</script>

<style scoped>
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
  opacity: 0;
  transform: translateY(1.5rem);
}

.stats-section__title--animate {
  animation: slide-up 0.6s ease-out forwards;
}

.stats-section__subtitle {
  max-width: 40rem;
  color: var(--gray400);
  text-align: center;
  max-width: 36rem;
  margin-top: 1rem;
  opacity: 0;
  transform: translateY(1.5rem);
}

.stats-section__subtitle--animate {
  animation: slide-up 0.6s ease-out 0.3s forwards;
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
