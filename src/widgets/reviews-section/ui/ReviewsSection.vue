<template>
  <article
    ref="sectionRef"
    class="reviews-section"
    :class="{ 'reviews-section--visible': isSectionVisible }"
  >
    <a href="https://go.2gis.com/XAbrT" target="_blank" class="badge">
      <span>Отзывы в 2ГИС.</span>
      <span class="badge-btn">Изучить →</span>
    </a>

    <div>
      <h2 class="reviews-section__title">Обратная связь</h2>
      <p class="reviews-section__subtitle">
        Мы можем много рассказывать о себе, но еще лучше это сделают наши
        любимые клиенты. Показываем без лишней скромности.
      </p>
    </div>

    <div class="reviews-section__grid">
      <a
        href="https://go.2gis.com/XAbrT"
        target="_blank"
        class="double-gis-badge"
      >
        <div class="double-gis-badge__top">
          <StarsRating :rating="5" />
          <img
            src="../assets/2_gis.svg"
            alt="2GIS"
            class="double-gis-badge__logo"
          />
        </div>
        <div class="double-gis-badge__bottom">
          <div class="double-gis-badge__total-rating">
            <span class="double-gis-badge__total-rating-value">4.9</span>
            <sup class="double-gis-badge__total-rating-divider">/5</sup>
          </div>
          <div class="double-gis-badge__text">
            <span class="double-gis-badge__total-reviews-value"
              >Очень хорошо</span
            >
            <span class="double-gis-badge__total-reviews-text"
              >На основании 438 отзывов</span
            >
          </div>
        </div>
      </a>
      <ReviewCard
        v-for="(review, index) in reviews"
        :key="review.name"
        :text="review.text"
        :name="review.name"
        :initials="review.initials"
        :rating="review.rating"
        :class="{ 'review-card--centered': index === reviews.length - 1 }"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ReviewCard } from "~/src/shared/ui/review-card";
import { StarsRating } from "~/src/shared/ui/stars-rating";
import { useIntersectionObserver } from "~/src/shared/lib/useIntersectionObserver";

const sectionRef = ref<HTMLElement | null>(null);

const isMobile = typeof window !== "undefined" 
  ? window.matchMedia("(max-width: 64rem)").matches 
  : false;

const { isVisible: isSectionVisible } = useIntersectionObserver(sectionRef, {
  threshold: isMobile ? 0 : 0.5,
  rootMargin: isMobile ? "0px 0px -30% 0px" : "0px",
  once: true,
});
const reviews = [
  {
    text: "Отличная работа! Спасибо за подробные консультации, внимательное отношение и реальную помощь в решении моего вопроса от первого обращения и до окончательного результата.",
    name: "Иван Иванов",
    initials: "ИВ",
    rating: 5,
  },
  {
    text: "Грамотный и внимательный юрист: подробно разъяснил все нюансы моего дела, предложил несколько вариантов стратегии, подготовил все документы и в итоге помог успешно выиграть дело в суде.",
    name: "Мария Петрова",
    initials: "МП",
    rating: 5,
  },
  {
    text: "Очень внимательный и человеческий подход к клиенту: быстро подготовили все необходимые документы, объяснили каждый шаг простым и понятным языком и сопровождали меня до самого завершения дела.",
    name: "Алексей Смирнов",
    initials: "АС",
    rating: 5,
  },
  {
    text: "Профессионально, честно и без лишних обещаний: сразу обозначили реальные перспективы, не завышали ожидания и при этом добились результата, который в итоге даже превзошёл мои первоначальные ожидания.",
    name: "Ольга Кузнецова",
    initials: "ОК",
    rating: 5,
  },
  {
    text: "Помогли разобраться в сложной ситуации, где другие специалисты только разводили руками: детально изучили документы, нашли важные детали, предложили нестандартное решение и довели дело до положительного исхода. Настоящий профессионал своего дела.",
    name: "Дмитрий Соколов",
    initials: "ДС",
    rating: 5,
  },
  {
    text: "Всегда на связи, отвечает на вопросы без задержек, объясняет сложные юридические моменты простым и понятным языком и на практике доказывает, что действительно защищает интересы клиента, а не просто ведёт дело формально.",
    name: "Екатерина Морозова",
    initials: "ЕМ",
    rating: 5,
  },
];
</script>

<style scoped>
.reviews-section {
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.badge {
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

.badge:hover {
  border-color: var(--gray400);
}

.badge-btn {
  color: var(--primaryDark);
}

.reviews-section__title {
  font-size: 3rem;
  line-height: 110%;
  font-weight: 700;
  color: var(--gray600);
  text-align: center;
}

.reviews-section__subtitle {
  max-width: 40rem;
  color: var(--gray400);
  text-align: center;
  max-width: 32rem;
  margin-top: 1rem;
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

.reviews-section__title,
.reviews-section__subtitle,
.reviews-section__grid > * {
  opacity: 0;
  transform: translateY(1.5rem);
}

.reviews-section--visible .reviews-section__title {
  animation: slide-up 0.6s ease-out 0.2s forwards;
}

.reviews-section--visible .reviews-section__subtitle {
  animation: slide-up 0.6s ease-out 0.6s forwards;
}

.reviews-section--visible .reviews-section__grid > * {
  animation: slide-up 0.6s ease-out 0.9s forwards;
}

.reviews-section--visible .reviews-section__grid > *:nth-child(2) {
  animation-delay: 1s;
}

.reviews-section--visible .reviews-section__grid > *:nth-child(3) {
  animation-delay: 1.1s;
}

.reviews-section--visible .reviews-section__grid > *:nth-child(4) {
  animation-delay: 1.2s;
}

.reviews-section--visible .reviews-section__grid > *:nth-child(5) {
  animation-delay: 1.3s;
}

.reviews-section--visible .reviews-section__grid > *:nth-child(6) {
  animation-delay: 1.4s;
}

.reviews-section--visible .reviews-section__grid > *:nth-child(7) {
  animation-delay: 1.5s;
}
.reviews-section__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
  grid-auto-rows: 2fr;
  gap: 1.5rem;
  padding: 0 5rem;
  margin-top: 2rem;
}

.reviews-section__grid :deep(.review-card--centered) {
  grid-column: 2;
}

.double-gis-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  /* background-color: rgba(255, 255, 255, 0.58); */
  box-shadow: var(--cardShadow);
}
.double-gis-badge__top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray300);
  width: 100%;
  padding: 1rem 1.5rem;
}
.double-gis-badge__bottom {
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: var(--gray600);
}

.double-gis-badge__total-rating-value {
  font-weight: 600;
  font-size: 2rem;
}
.double-gis-badge__total-rating-divider {
  font-size: 1.25rem;
  font-weight: 600;
}

.double-gis-badge__text {
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
}
.double-gis-badge__total-reviews-value {
  font-weight: 700;
}
@media screen and (max-width: 80rem) {
  .reviews-section__grid :deep(.review-card--centered) {
    grid-column: 1;
  }
}

@media screen and (max-width: 96rem) {
  .reviews-section__grid {
    padding-inline: 2rem;
    gap: 1rem;
  }
}

@media screen and (max-width: 80rem) {
  .reviews-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-inline: 1rem;
  }
}

@media screen and (max-width: 64rem) {
  .reviews-section {
    padding-inline: 1rem;
    align-items: start;
  }
  .reviews-section__title {
    text-align: left;
    font-size: 2rem;
  }
  .reviews-section__subtitle {
    text-align: left;
  }
  .reviews-section__grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding-inline: 0;
    margin-top: 0.5rem;
  }
}
</style>
