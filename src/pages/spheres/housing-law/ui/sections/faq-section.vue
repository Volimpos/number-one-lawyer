<template>
  <FaqSection :faqImage="faqImage" :items="items" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FaqSection } from "@/shared/ui/faq-section";
import faqImage from "../../assets/housing_law_2.webp";

const items = [
  {
    q: "Управляющая компания завышает плату за коммунальные услуги. Что делать?",
    a: "Сначала запросите детализацию платежей и сверьте с тарифами. Если обнаружены нарушения — направьте претензию в УК с требованием перерасчёта. При отказе обращайтесь в ГЖИ и суд. Можем помочь с проверкой начислений, составлением претензий и представлением интересов в суде.",
  },
  {
    q: "Можно ли выселить соседа, который нарушает покой и порядок?",
    a: "Да, но процесс сложный. Нужны доказательства систематических нарушений: протоколы участкового, показания свидетелей, видеозаписи, обращения в полицию. Если это наниматель — через суд о расторжении договора соцнайма. Если собственник — только при грубых нарушениях прав соседей. Поможем собрать доказательства и подготовить иск.",
  },
  {
    q: "Как приватизировать квартиру, если один из прописанных отказывается?",
    a: "Приватизация возможна только с согласия всех совершеннолетних членов семьи. Если кто-то отказывается — он должен оформить письменный отказ у нотариуса. При спорах между наследниками или при отсутствии согласия — решается через суд. Поможем оформить документы и защитить ваши права.",
  },
  {
    q: "УК не делает капитальный ремонт. Можно ли заставить?",
    a: "Да. УК обязана проводить капремонт по плану. Если работы не выполняются — жалоба в ГЖИ, прокуратуру, возможно взыскание ущерба через суд. Если дом в аварийном состоянии — можно требовать переселения. Поможем составить жалобы и иски, проконтролируем выполнение обязательств.",
  },
  {
    q: "Как оспорить кадастровую стоимость квартиры для снижения налога?",
    a: "Можно обратиться в комиссию по рассмотрению споров о кадастровой стоимости или в суд. Нужна независимая оценка, которая покажет завышение. Срок — до 31 декабря года, следующего за годом установления стоимости. Поможем собрать документы, заказать оценку и оспорить стоимость.",
  },
  {
    q: "Можно ли признать сделку купли-продажи квартиры недействительной?",
    a: "Да, при наличии оснований: обман, принуждение, недееспособность одной из сторон, нарушение прав третьих лиц (например, несовершеннолетних), отсутствие согласия супруга. Срок оспаривания — 1–3 года в зависимости от основания. Поможем оценить перспективы и подготовить иск.",
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
  box-shadow: var(--cardShadow);
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
