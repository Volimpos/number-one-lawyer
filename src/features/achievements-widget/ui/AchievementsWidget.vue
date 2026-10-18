<template>
  <div class="achievements-widget">
    <div class="flags-container">
      <Flag
        title="ТОП-5"
        text="юридических компаний Челябинска по кол-ву клиентов"
        variant="primary"
        link="https://chel.dk.ru/news/237236993"
      />
      <Flag
        :icon="yandexMapsIcon"
        text="Хорошее место Яндекс.Карты"
        variant="secondary"
        link="https://yandex.ru/maps/-/CPRw50~X"
      />
    </div>

    <div class="cards-container">
      <a
        class="rate-card"
        v-for="item in rateData"
        :key="item.info"
        :href="item.link"
        target="_blank"
      >
        <div class="rate-card__logo-box">
          <img :src="item.logo" :alt="item.info" class="rate-card__logo" />
        </div>
        <div class="rate-card__content">
          <div class="rate-card__top">
            <div class="rate-number">{{ item.rate.toFixed(1) }}</div>
            <StarsRating :rating="item.rate" />
          </div>
          <p class="rate-card__title">{{ item.info }}</p>
          <p class="rate-card__meta">{{ item.note }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Flag } from "~/src/shared/ui/flag";
import { StarsRating } from "~/src/shared/ui/stars-rating";
import yandexLogo from "~/src/shared/assets/yandex.png";
import gisLogo from "~/src/shared/assets/2GIS_logo.svg";
import yandexMapsIcon from "~/src/shared/assets/yandex-maps-logo.svg";
interface RateData {
  logo: string;
  rate: number;
  info: string;
  note: string;
  link: string;
}

const rateData: RateData[] = [
  {
    logo: yandexLogo,
    rate: 5.0,
    info: "Яндекс.Карты",
    note: "Подтвержденные отзывы клиентов",
    link: "https://yandex.ru/maps/-/CPRw50~X",
  },
  {
    logo: gisLogo,
    rate: 4.9,
    info: "2GIS",
    note: "Высокая оценка сервиса",
    link: "https://2gis.ru/chelyabinsk/firm/70000001089709132",
  },
];
</script>

<style scoped>
.achievements-widget {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--blueAccent);
  padding: 1rem;
  border-radius: 0.5rem;
  height: 100%;
  min-height: 50svh;
  position: relative;
}

.flags-container {
  position: absolute;
  top: 0;
  left: 2rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.cards-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 38rem;
  padding: 1.25rem;
  position: absolute;
  bottom: 1.25rem;
  left: 0;
  right: 0;
  margin-inline: auto;
}

.rate-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(130deg, #ffffff 0%, #f5f8ff 100%);
  border-radius: 0.75rem;
  border: 1px solid rgba(20, 57, 122, 0.12);
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.14);
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
}

.rate-card:hover {
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.24);
}

.rate-card__logo-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.25rem;
  height: 5.25rem;
  border-radius: 0.75rem;
  background: #fff;
  border: 1px solid rgba(20, 57, 122, 0.12);
  flex-shrink: 0;
}

.rate-card__logo {
  width: 3.5rem;
  max-height: 2.5rem;
  object-fit: contain;
}

.rate-card__content {
  width: 100%;
  min-width: 0;
  text-align: left;
}

.rate-card__top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
}

.rate-number {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--gray700);
  letter-spacing: -0.04em;
  line-height: 1;
}

.rate-card__title {
  margin: 0.35rem 0 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--gray700);
  text-align: left;
}

.rate-card__meta {
  margin: 0.25rem 0 0;
  font-size: 0.875rem;
  color: var(--gray500);
  text-align: left;
}

@media (max-width: 96rem) {
  .achievements-widget {
    min-height: 46svh;
  }

  .flags-container {
    left: 1.5rem;
    gap: 1.5rem;
  }

  .cards-container {
    max-width: 34rem;
    padding: 1rem;
    bottom: 1rem;
  }
}

@media (max-width: 80rem) {
  .achievements-widget {
    min-height: 42svh;
  }

  .flags-container {
    left: 1.25rem;
    gap: 1rem;
  }

  .cards-container {
    max-width: 31rem;
    padding: 0.9rem;
    bottom: 0.9rem;
  }

  .rate-card {
    gap: 0.85rem;
    padding: 0.9rem;
  }

  .rate-card__logo-box {
    width: 4.75rem;
    height: 4.75rem;
  }

  .rate-card__logo {
    width: 3.1rem;
    max-height: 2.2rem;
  }

  .rate-number {
    font-size: 1.6rem;
  }
}

@media (max-width: 64rem) {
  .achievements-widget {
    min-height: 38svh;
  }

  .flags-container {
    left: 1rem;
    gap: 0.75rem;
  }

  .cards-container {
    max-width: 28rem;
    padding: 0.75rem;
    bottom: 0.75rem;
  }

  .rate-card {
    padding: 0.8rem;
    border-radius: 0.65rem;
  }

  .rate-card__logo-box {
    width: 4.3rem;
    height: 4.3rem;
  }

  .rate-card__logo {
    width: 2.8rem;
    max-height: 2rem;
  }

  .rate-number {
    font-size: 1.45rem;
  }

  .rate-card__title {
    font-size: 0.95rem;
  }

  .rate-card__meta {
    font-size: 0.82rem;
  }
}

@media (max-width: 768px) {
  .achievements-widget {
    min-height: 36svh;
  }

  .flags-container {
    left: 1rem;
    gap: 1rem;
  }

  .cards-container {
    padding: 0.75rem;
    bottom: 0.75rem;
  }

  .rate-card {
    padding: 0.75rem;
  }

  .rate-card__logo-box {
    width: 4.25rem;
    height: 4.25rem;
  }

  .rate-number {
    font-size: 1.5rem;
  }
}
</style>
