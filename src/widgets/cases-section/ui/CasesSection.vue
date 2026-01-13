<template>
  <div class="cases__grid">
    <CaseCard
      :image="case1Image"
      date="16 марта 2028г."
      sphere="Миграционное право"
      title="Оспорили выдворение иностранного гражданина"
      description="Гражданин Узбекистана Равшан В. был остановлен сотрудниками полиции для проверки документов. Оказалось, что у него истёк срок предельного пребывания в России. В судебном порядке удалось доказать законность его пребывания."
      link="/cases/1"
    />

    <CaseCard
      :image="case2Image"
      date="9 февраля 2025г."
      sphere="Права потребителей"
      title="Вернули деньги за билет в автобусе"
      description="Пенсионерка Галина К. оплатила проезд в автобусе, однако кондуктор отказался выдать билет. После обращения в суд нам удалось взыскать с перевозчика стоимость билета и компенсацию морального вреда."
      link="/cases/2"
    />

    <CaseCard
      :image="case3Image"
      date="21 августа 2024г."
      sphere="Трудовое право"
      title="Взыскали зарплату и неустойку за вынужденный простой"
      description="Сотрудник был незаконно отстранён от работы и более трёх месяцев не получал заработную плату. В результате судебного разбирательства мы взыскали всю задолженность и неустойку."
      link="/cases/3"
    />
  </div>
</template>

<script setup lang="ts">
import { CaseCard } from "~/src/shared/ui/case-card";
import case1Image from "../assets/case_1.jpg";
import case2Image from "../assets/case_2.jpg";
import case3Image from "../assets/case_3.jpg";
import case4Image from "../assets/case_4.jpg";
</script>

<style scoped>
.cases__grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.75rem;
}

@media screen and (max-width: 96rem) {
  .cases__grid {
    gap: 1rem;
  }
}

@media screen and (max-width: 64rem) {
  .cases__grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
