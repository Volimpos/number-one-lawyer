<template>
  <article
    ref="sectionRef"
    class="may-trust-section"
    :class="{ 'may-trust-section--visible': isSectionVisible }"
  >
    <div>
      <h2 class="may-trust-section__title">Почему нам стоит доверять</h2>
      <p class="may-trust-section__subtitle">
        Наша юридическая деятельность основана на опыте, ответственности и
        внимании к деталям, которые напрямую влияют на результат для клиента.
      </p>
    </div>

    <div class="cards-trust__container">
      <AnimatedCards :cards="cards" :threshold-perc="0.3"/>
    </div>
   
  </article>
</template>

<script setup lang="ts">

import { useIntersectionObserver } from "@/shared/lib/useIntersectionObserver";
import mayTrust1 from "@/pages/home/assets/may-trust_1.webp";
import mayTrust2 from "@/pages/home/assets/may-trust_2.webp";
import mayTrust3 from "@/pages/home/assets/may-trust_3.webp";
import { AnimatedCards } from "@/shared/ui/animated-cards";
const sectionRef = ref<HTMLElement | null>(null);
const { isVisible: isSectionVisible } = useIntersectionObserver(sectionRef, {
  threshold: 0.2,
  once: true,
});


const cards = [
  {
    title: "Умеем хранить секреты",
    description:
      "Ваши персональные данные и подробности дела не доступны никому кроме того юриста, с которым Вы сотрудничаете. Ваша конфиденциальная информация будет использована только на благо дела и только в необходимом объеме.",
    image: mayTrust1,
    alt: "Умеем хранить секреты",
  },
  {
    title: "Надежны как швейцарские часы",
    description:
      "Придерживаемся намеченных договоренностей. Идем до конца и прикладываем все возможные усилия чтобы решить Вашу проблему. Поможем Вам выйти из любой ситуации с победой, либо минимальными потерями. Если не уверены, то откажем в сопровождении.",
    image: mayTrust2,
    alt: "Надежны как швейцарские часы",
  },
  {
    title: "Забота и человечный подход",
    description:
      "Умеем объяснять сложные правовые категории простым языком, без лишних терминов. Если у Вас возникают вопросы относительно того, что делает юрист или на какой стадии дело, Вы всегда можете связаться, уточнить и мы с удовольствием ответим на все вопросы.",
    image: mayTrust3, 
    alt: "Забота и человечный подход",
  },
];

</script>

<style scoped>
.may-trust-section {
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.may-trust-section__title {
  font-size: 3rem;
  line-height: 110%;
  font-weight: 700;
  color: var(--gray600);
  text-align: center;
}

.may-trust-section__subtitle {
  max-width: 40rem;
  color: var(--gray400);
  text-align: center;
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

.may-trust-section__title,
.may-trust-section__subtitle {
  opacity: 0;
  transform: translateY(1.5rem);
}

.may-trust-section--visible .may-trust-section__title {
  animation: slide-up 0.6s ease-out 0.2s forwards;
}

.may-trust-section--visible .may-trust-section__subtitle {
  animation: slide-up 0.6s ease-out 0.6s forwards;
}

.cards-trust__container {
  padding: 1rem 5rem;
}

@media screen and (max-width: 96rem){
  .cards-trust__container {
  padding: 1rem 2rem;
}
  
}


@media screen and (max-width: 80rem) {
  .cards-trust__container {
  padding: 1rem;
}
  .may-trust-section__item-title {
    text-align: left;
    margin-top: 0;
  }
  .may-trust-section__item-description {
    text-align: left;
  }

}

@media screen and (max-width: 64rem) {
  .may-trust-section__title {
    font-size: 2rem;
    text-align: left;
    padding-inline: 1rem;
  }
  .may-trust-section__subtitle {
    padding-inline: 1rem;
    text-align: left;
  }

}
</style>
