<template>
  <article class="reviews-section">
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
      <ReviewCard
        v-for="review in reviews"
        :key="review.name"
        :text="review.text"
        :name="review.name"
        :initials="review.initials"
        :rating="review.rating"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import { ReviewCard } from "~/src/shared/ui/review-card";
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
.reviews-section__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
  grid-auto-rows: 2fr;
  gap: 1.5rem;
  padding: 0 5rem;
  margin-top: 2rem;
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
