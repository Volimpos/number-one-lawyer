<template>
  <section class="cases">
    <div class="cases__inner">
      <NuxtLink to="/blog/cases" class="cases__badge">
        <span
          >Больше кейсов <span class="max-lg:hidden">в нашем блоге.</span></span
        >
        <span class="cases__badge-btn">Смотреть →</span>
      </NuxtLink>

      <h2 class="cases__title">Успешные кейсы</h2>

      <p class="cases__subtitle">
        За время работы мы сопровождали большое количество дел в разных отраслях
        права. Делимся интересными примерами.
      </p>

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

        <CaseCard
          :image="case4Image"
          date="22 ноюля 5509г."
          sphere="Наследство"
          title="Взыскали моральный вред с робота"
          description="Робот был незаконно уничтожен. В результате судебного разбирательства мы взыскали моральный вред и возмещение ущерба. Ему было неприятно видеть, как его друг и создатель уничтожают его."
          link="/cases/4"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CaseCard } from "../../../../shared/ui/case-card";
import case1Image from "../../assets/case_1.jpg";
import case2Image from "../../assets/case_2.jpg";
import case3Image from "../../assets/case_3.jpg";
import case4Image from "../../assets/case_4.jpg";
</script>

<style scoped>
.cases {
  position: relative;
  padding: 4rem 0;
}

.cases__inner {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding-inline: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.cases__badge {
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

.cases__badge:hover {
  border-color: var(--gray400);
}

.cases__badge-btn {
  color: var(--primaryDark);
}

.cases__title {
  font-size: 3rem;
  line-height: 110%;
  font-weight: 700;
  color: var(--gray600);
}

.cases__subtitle {
  max-width: 40rem;
  color: var(--gray400);
}

.cases__grid {
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.75rem;
}

@media screen and (max-width: 96rem) {
  .cases__inner {
    padding-inline: 2rem;
  }
  .cases__grid {
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    & > :nth-child(4) {
      display: none;
    }
  }
}

@media screen and (max-width: 80rem) {
  .cases__inner {
    padding-inline: 1rem;
  }
  .cases__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    & > :nth-child(4) {
      display: flex;
    }
  }
}

@media screen and (max-width: 64rem) {
  .cases__inner {
    padding-inline: 1rem;
    align-items: flex-start;
    text-align: left;
  }
  .cases__badge {
    padding: 0.5rem 1rem;
  }

  .cases__title {
    font-size: 2rem;
  }

  .cases__subtitle {
    max-width: 100%;
  }

  .cases__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 0.5rem;
  }
}

@media screen and (max-width: 48rem) {
  .cases__grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
