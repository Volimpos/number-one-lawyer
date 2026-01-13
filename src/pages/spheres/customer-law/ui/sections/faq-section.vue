<template>
  <FaqSection :faqImage="faqImage" :items="items" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FaqSection } from "@/shared/ui/faq-section";
import faqImage from "../../assets/customer_2.webp";

const items = [
  {
    q: "Купленный товар оказался бракованным. Могу ли я вернуть деньги?",
    a: "Да, по закону о защите прав потребителей вы имеете право на возврат денег за товар ненадлежащего качества. Срок для предъявления требований — в течение гарантийного срока или срока годности, а если они не установлены — в течение 2 лет. Продавец обязан вернуть деньги в течение 10 дней с момента предъявления требования.",
  },
  {
    q: "Можно ли вернуть товар надлежащего качества, если он просто не подошёл?",
    a: "Да, если товар не был в употреблении, сохранены его товарный вид и потребительские свойства, пломбы и фабричные ярлыки. Срок возврата — 14 дней (не считая дня покупки). Исключение: товары, не подлежащие обмену (лекарства, нижнее бельё, парфюмерия и др.).",
  },
  {
    q: "Магазин отказывается принимать претензию. Что делать?",
    a: "Претензию можно направить заказным письмом с уведомлением — это будет доказательством обращения. Если продавец игнорирует претензию или отказывается удовлетворить требования, можно обратиться в Роспотребнадзор или сразу в суд. По закону потребитель освобождается от уплаты госпошлины.",
  },
  {
    q: "Услуга оказана некачественно. Могу ли я требовать компенсацию?",
    a: "Да. Вы вправе потребовать безвозмездного устранения недостатков, уменьшения цены, возмещения расходов на исправление недостатков или полного возмещения убытков. Также можно требовать компенсацию морального вреда и неустойку за просрочку выполнения требований (0,5% от цены услуги за каждый день просрочки).",
  },
  {
    q: "Интернет-магазин не возвращает деньги за неполученный товар. Как быть?",
    a: "При дистанционной продаже у вас есть право отказаться от товара в любое время до его передачи и в течение 7 дней после. Деньги должны вернуть в течение 10 дней. Если магазин затягивает, направьте претензию, при необходимости — жалобу в Роспотребнадзор и иск в суд. Можно также обратиться в банк для отмены операции.",
  },
  {
    q: "Навязали дополнительную услугу при покупке. Законно ли это?",
    a: "Нет, навязывание дополнительных услуг запрещено законом. Вы вправе отказаться от них и требовать возврата уплаченной суммы. Если продавец отказывает, это нарушение ваших прав — можно требовать компенсацию и обращаться в контролирующие органы.",
  },
  {
    q: "Сколько времени занимает решение спора и сколько это стоит?",
    a: "Сроки зависят от сложности дела и стадии подключения. Претензионный порядок — до 10 дней на ответ. Судебное разбирательство — обычно 2–3 месяца. Первая консультация поможет оценить перспективы, риски и стоимость. По делам о защите прав потребителей госпошлина не взимается, а расходы на юриста можно взыскать с продавца.",
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
