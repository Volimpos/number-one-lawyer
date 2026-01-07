<template>
  <article class="may-trust-section">
    <div>
      <h2 class="may-trust-section__title">Почему нам стоит доверять</h2>
      <p class="may-trust-section__subtitle">
        Наша юридическая деятельность основана на опыте, ответственности и
        внимании к деталям, которые напрямую влияют на результат для клиента.
      </p>
    </div>

    <div class="may-trust-section__grid">
      <div
        v-for="item in items"
        :key="item.title"
        class="may-trust-section__item"
      >
        <div class="may-trust-section__item-image-container">
          <img
            :src="item.image"
            :alt="item.title"
            class="may-trust-section__item-image"
          />
        </div>
        <div class="may-trust-section__item-text">
          <h3 class="may-trust-section__item-title">{{ item.title }}</h3>
          <p class="may-trust-section__item-description">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import mayTrust1 from "../../assets/may-trust_1.webp";
import mayTrust2 from "../../assets/may-trust_2.webp";
import mayTrust3 from "../../assets/may-trust_3.webp";

const items = [
  {
    title: "Умеем хранить секреты",
    description:
      "Ваши персональные данные и подробности дела не доступны никому кроме того юриста, с которым Вы сотрудничаете. Ваша конфиденциальная информация будет использована только на благо дела и только в необходимом объеме.",
    image: mayTrust1,
  },
  {
    title: "Надежны как швейцарские часы",
    description:
      "Придерживаемся намеченных договоренностей. Идем до конца и прикладываем все возможные усилия чтобы решить Вашу проблему. Поможем Вам выйти из любой ситуации с победой, либо минимальными потерями. Если не уверены, то откажем в сопровождении.",
    image: mayTrust2,
  },
  {
    title: "Забота и человечный подход",
    description:
      "Умеем объяснять сложные правовые категории простым языком, без лишних терминов. Если у Вас возникают вопросы относительно того, что делает юрист или на какой стадии дело, Вы всегда можете связаться, уточнить и мы с удовольствием ответим на все вопросы.",
    image: mayTrust3,
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
.may-trust-section__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
  padding: 0 5rem;
  margin-top: 2rem;
  gap: 1.5rem;
}

.may-trust-section__item-image-container {
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: 0.5rem;
}

.may-trust-section__item-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.may-trust-section__item-title {
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  margin-top: 1rem;
  color: var(--gray600);
}
.may-trust-section__item-description {
  text-align: center;
  margin-top: 0.25rem;
  color: var(--gray500);
}
@media screen and (max-width: 96rem) {
  .may-trust-section__grid {
    padding: 0 2rem;
  }
}
@media screen and (max-width: 80rem) {
  .may-trust-section__grid {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
  }
  .may-trust-section__item {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    direction: rtl;
  }
  .may-trust-section__item:nth-child(2) {
    direction: ltr;
  }
  .may-trust-section__item-image-container {
    aspect-ratio: 4/3;
  }
  .may-trust-section__item-title {
    text-align: left;
    margin-top: 0;
  }
  .may-trust-section__item-description {
    text-align: left;
  }
  .may-trust-section__item-image {
    object-position: center 10%;
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
  .may-trust-section__grid {
    gap: 3rem;
  }
  .may-trust-section__item {
    display: block;
  }
  .may-trust-section__item-image-container {
    aspect-ratio: 3/4;
  }
  .may-trust-section__item-title {
    margin-top: 1rem;
  }
  .may-trust-section__item-image {
    object-position: center 10%;
  }
}
</style>
