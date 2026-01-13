<template>
  <FaqSection :faqImage="faqImage" :items="items" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FaqSection } from "@/shared/ui/faq-section";
import faqImage from "../../assets/land_law_2.webp";

const items = [
  {
    q: "Как оформить право собственности на земельный участок?",
    a: "Оформление зависит от основания: приватизация, покупка, наследование, дарение. Нужно собрать документы (кадастровый паспорт, межевой план, документы-основания), провести кадастровые работы при необходимости, зарегистрировать право в Росреестре. Сроки — от 1 до 6 месяцев в зависимости от сложности. Мы поможем на всех этапах: от подготовки документов до регистрации.",
  },
  {
    q: "Сосед захватил часть моего земельного участка. Что делать?",
    a: "Сначала нужно провести межевание и установить точные границы участка. Затем направить соседу претензию с требованием освободить захваченную территорию. Если не помогает — обращаться в суд с иском о восстановлении границ и взыскании ущерба. Может потребоваться судебная землеустроительная экспертиза. Важно действовать оперативно, так как самовольное занятие может привести к утрате прав на часть участка.",
  },
  {
    q: "Могут ли изъять мой земельный участок для государственных нужд?",
    a: "Да, но только при соблюдении строгих условий: решение органа власти, публикация в СМИ, предварительное согласование, выкуп участка по рыночной стоимости или предоставление равноценного участка. Вы вправе оспорить решение об изъятии, требовать справедливую компенсацию, включая убытки и упущенную выгоду. Мы поможем защитить ваши права и добиться максимальной компенсации.",
  },
  {
    q: "Можно ли изменить категорию земельного участка?",
    a: "Да, но это сложная процедура, требующая обоснования и согласований. Нужно подать ходатайство в уполномоченный орган, провести экологическую экспертизу, получить согласования различных ведомств. Срок рассмотрения — до 2 месяцев. Отказ можно обжаловать в суде. Мы поможем подготовить документы, обосновать необходимость изменения категории и пройти все согласования.",
  },
  {
    q: "Как расторгнуть договор аренды земельного участка досрочно?",
    a: "Расторжение возможно по соглашению сторон, по решению суда при нарушении условий договора арендатором или арендодателем, а также в одностороннем порядке при наличии оснований, предусмотренных законом или договором. Нужно направить уведомление, при необходимости — претензию, собрать доказательства нарушений. Если вторая сторона не согласна — обращаться в суд. Мы поможем правильно оформить расторжение и защитить ваши интересы.",
  },
  {
    q: "Могу ли я приватизировать земельный участок под домом?",
    a: "Да, если вы являетесь собственником расположенного на участке жилого дома или иного объекта недвижимости. Приватизация возможна бесплатно один раз. Нужно подать заявление в уполномоченный орган, приложить документы на дом и участок. Срок рассмотрения — до 30 дней. Отказ можно обжаловать. Мы поможем собрать документы, правильно оформить заявление и пройти процедуру приватизации.",
  },
  {
    q: "Сколько времени занимает решение земельного спора и сколько это стоит?",
    a: "Сроки зависят от сложности дела: досудебное урегулирование — 1–2 месяца, судебное разбирательство — от 3 до 12 месяцев (иногда дольше при необходимости экспертиз). Стоимость зависит от объема работы: консультация, подготовка документов, представительство в суде. На первой консультации мы честно оценим перспективы, риски и бюджет. Расходы на юриста можно взыскать с проигравшей стороны.",
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
