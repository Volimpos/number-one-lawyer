<template>
  <section class="faq">
    <div class="faq__inner">
      <h2 class="faq__title">Вопросы, которые задают почти всегда</h2>
      <div class="faq__content">
        <img :src="faqImage" alt="FAQ" class="faq__image" />
        <div class="faq__list">
          <div
            v-for="(item, index) in items"
            :key="item.q"
            class="faq-item"
            :class="{ 'faq-item--open': openItems[index] }"
          >
            <button
              class="faq-item__q"
              @click="toggleItem(index)"
              type="button"
            >
              {{ item.q }}
              <span class="faq-item__icon">+</span>
            </button>
            <div class="faq-item__a-wrapper">
              <div class="faq-item__a">
                <p>{{ item.a }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import faqImage from "../../assets/faq_img.webp";

const items = [
  {
    q: "Страховая занизила выплату — есть смысл спорить?",
    a: "Да. Занижение часто связано с «внутренними расчётами» и спорными коэффициентами. Мы делаем независимую оценку/экспертизу, готовим претензию и, если нужно, идём в суд: доплата + штраф + неустойка.",
  },
  {
    q: "Можно ли обжаловать постановление ГИБДД, если уже подписал протокол?",
    a: "Можно. Подпись — не признание вины. Важно уложиться в сроки и правильно сформулировать доводы: процессуальные нарушения, отсутствие события/состава, ошибки в схеме, видеозаписи и т.д.",
  },
  {
    q: "Меня вызывают в суд по лишению прав. Что делать прямо сейчас?",
    a: "Не тянуть. Нужна позиция до заседания: анализ материалов, ходатайства, доказательства, работа со сроками и процедурой. Чем раньше подключимся — тем больше инструментов защиты.",
  },
  {
    q: "Сколько времени занимает дело и сколько это стоит?",
    a: "Сроки зависят от вида спора (страховая/ГАИ/взыскание с виновника) и стадии, на которой подключаемся. На консультации честно оценим перспективу, риски и бюджет.",
  },
];

const openItems = ref<boolean[]>(new Array(items.length).fill(false));

const toggleItem = (index: number) => {
  openItems.value[index] = !openItems.value[index];
};
</script>

<style scoped>
.faq {
  padding: 4rem 0;
}

.faq__inner {
  width: 100%;
  margin: 0 auto;
  padding-inline: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}

.faq__title {
  font-size: 3rem;
  line-height: 110%;
  font-weight: 700;
  color: var(--gray600);
}

.faq__subtitle {
  max-width: 44rem;
  color: var(--gray400);
}

.faq__content {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.5rem;
  align-items: start;
  margin-top: 2rem;
}

.faq__image {
  width: 100%;
  height: 36rem;
  object-fit: cover;
  object-position: 50% 10%;
  border-radius: 0.5rem;
}

.faq__list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  border-radius: 0.5rem;
  padding: 1.25rem 1.5rem;
  background: var(--white);
  text-align: left;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);
  user-select: none;
  transition: background-color 0.2s;
}

.faq-item--open {
  border-color: var(--gray300);
  background: var(--blueAccent);
}

.faq-item__q {
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-weight: 600;
  color: var(--gray600);
  font-size: 1.125rem;
  text-align: left;
  font-family: inherit;
}

.faq-item__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  border: 1px solid var(--gray300);
  color: var(--gray600);
  flex: 0 0 auto;
  transition: transform 0.2s;
}

.faq-item--open .faq-item__icon {
  transform: rotate(45deg);
}

.faq-item__a-wrapper {
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 0.2s,
    margin-top 0.2s;
  margin-top: 0;
}

.faq-item--open .faq-item__a-wrapper {
  max-height: 500px;
  margin-top: 0.75rem;
}

.faq-item__a {
  color: var(--gray500);
}

@media screen and (max-width: 96rem) {
  .faq__inner {
    padding-inline: 2rem;
  }
}

@media screen and (max-width: 80rem) {
  .faq__inner {
    padding-inline: 1rem;
  }
}

@media screen and (max-width: 64rem) {
  .faq__inner {
    align-items: flex-start;
    text-align: left;
  }
  .faq__title {
    font-size: 2rem;
  }
  .faq__content {
    grid-template-columns: 1fr;
  }
  .faq__image {
    height: 24rem;
  }
  .faq-item {
    padding: 1rem;
  }
}
</style>
