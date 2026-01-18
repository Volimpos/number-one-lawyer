<template>
<div class="wrapper">
    <h1 class="title">О компании</h1>
  <div class="about-grid">
    <div class="contacts">
        <div class="content">
            <p class="subtitle">Реквизиты</p>
            <p>ООО «Юридическая Компания 1»</p>
            <p>ОГРН: 1257400023099</p>
            <p>ИНН: 7447323283</p>
            <p>Адрес: 454084, г. Челябинск, ул Кирова, д. 7а, помещ. 29 </p>
        </div>
       
        <div class="content">
            <p class="subtitle">История</p>
            <p>Наша юридическая компания была основана чтобы повышать уровень правовой грамотности населения и делать юриспруденцию доступной и распространенной. Ведь справедливость и баланс прав просто необходимы для комфортной жизни. С самого начала мы ставили перед собой задачу обеспечить высокий уровень профессионализма и индивидуальный подход к каждому делу.</p>
            <p>За годы работы компания зарекомендовала себя как надежный партнер, способный решать самые сложные юридические вопросы. Мы постоянно развиваемся, расширяем спектр услуг и повышаем квалификацию наших специалистов.</p>
            <p>Сегодня мы гордимся накопленным опытом и успешно реализованными проектами. Наша команда состоит из высококвалифицированных юристов, которые готовы прийти на помощь в любой правовой ситуации.</p>
        </div>
    </div>
    <div class="photos">
        <img :src="photo" alt="Юрист компании" v-for="photo in lawyerPhotos" :key="photo" class="photo">
    </div>
  </div>
</div>
 
</template>

<script setup lang="ts">
import photo1 from "../assets/1.webp"
import photo2 from "../assets/2.webp"
import photo3 from "../assets/3.webp"
import photo4 from "../assets/4.webp"
import photo5 from "../assets/5.webp"
import photo6 from "../assets/6.webp"
import photo7 from "../assets/7.webp"
import photo8 from "../assets/8.webp"

const lawyerPhotos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8]
</script>

<style scoped>
.wrapper {
    padding: 7rem 5rem 1rem;
}
.title {
    font-size: 3rem;
    color: var(--gray600);
    font-weight: 700;
    text-align: center;
    line-height: 110%;
}

.about-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 3rem;
    color: var(--gray600);
    padding-bottom: 12rem;
}
.subtitle {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}
.contacts {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.photos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}
.photo {
    height: 100%;
    border-radius: 0.25rem;
    object-fit: cover;
}
/* Смещение второй колонки вниз на 1/3 высоты */
.photo:nth-child(3n+2) {
    transform: translateY(50%);
}
/* Смещение третьей колонки вниз на 2/3 высоты */
.photo:nth-child(3n) {
    transform: translateY(25%);
}

@media screen and (max-width: 96rem){
    .wrapper {
    padding: 7rem 2rem 1rem;
} 
}

@media screen and (max-width: 80rem){
    .wrapper {
    padding: 7rem 1rem 1rem;
} 
.title {
    font-size: 2.5rem;
}
}

@media screen and (max-width: 64rem){
    .about-grid {
    display: flex;
    flex-direction: column;
    padding-bottom: 5rem;
}
    .photos {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}
.photo:nth-child(3n+2) {
    transform: translateY(0);
}
.photo:nth-child(3n) {
    transform: translateY(0);
}

.photo:nth-child(2n) {
    transform: translateY(4rem);
}

}



</style>