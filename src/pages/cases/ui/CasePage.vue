<template>
  <div class="wrapper">
    <div class="case-info">
    <div class="case-text">
        <p class="sphere">Защита прав потребителей</p>
        <p class="case-title">Взыскали деньги с автосалона за некачественный автомобиль</p>
        <p class="case-description">
            Клиент приобрел Киа Рио с пробегом в автосалоне подержанных авто. После покупки выяснилось, что пробег автомобиля значительно выше заявленного, отличается комплектация, а состояние оставляет желать лучшего. Условия кредита же были сумасшедшими: ставка более 60% годовых, куча дополнительных услуг, о которых его не предупреждали. Таким образом реальная стоимость автомобиля оказалась выше рыночной более чем в два раза. В судебном порядке удалось оспорить сделку и взыскать компенсацию. 
        </p>
        <button class="show-documents-btn">
            Документы по делу
        </button>
    </div>
    <img :src="image" alt="Кейс" class="case-image">
  </div>
  <div class="more-cases">
    <p class="more-cases__subtitle">Другие кейсы</p>
    <CasesSection/>
  </div>
  </div>
  
</template>

<script setup lang="ts">
import { CasesSection } from '~/src/widgets/cases-section';
import image from "~/src/app/assets/case-image.jpg"
</script>

<style scoped>
.wrapper {
  padding: 10rem 5rem 1rem;
}
.case-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
.case-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: start;
}

.sphere {
  background: var(--gray100);
  border-radius: 999px;
  padding: 0.5rem 2rem;
  font-size: 0.875rem;
  color: var(--gray500);
  user-select: none;
}
.case-title {
font-size: 2.75rem;
line-height: 110%;
font-weight: 700;
color: var(--gray600);
}

.case-text {
  color: var(--gray600);
}

.show-documents-btn {
  border: 1.75px solid var(--primary);
  color: var(--primaryDark);
  height: 2.75rem;
  padding-inline: 2rem;
  border-radius: 0.25rem;
  transition: 200ms;
  font-weight: 500;
}

.show-documents-btn:hover {
background: var(--primary);
color: var(--gray600);
}
.show-documents-btn:active {
  background: var(--primaryDark);
  border-color: var(--primaryDark);
} 

.case-image {
  border-radius: 0.5rem;
  object-fit: cover;
  height: 90dvh;
  width: 100%;
}

.more-cases {
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
}

.more-cases__subtitle {
  font-size: 2rem;
  font-weight: 600;
  color: var(--gray600);
}

@media screen and (max-width: 96rem) {
  .wrapper {
  padding: 10rem 2rem 1rem;
}
}

@media screen and (max-width: 80rem) {
  .wrapper {
  padding: 10rem 1rem 1rem;
}
.case-info {
  gap: 1rem;
}
}

@media screen and (max-width: 64rem) {
  .case-info {
  grid-template-columns: repeat(1, 1fr);
  gap: 3rem;
}
.case-title {
  font-size: 2rem;
  line-height: 100%;
}
.case-image {
  aspect-ratio: 1/1;
  height: auto;
}
}


</style>