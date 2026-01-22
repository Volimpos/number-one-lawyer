<template>
  <article class="wrapper">
    <h1 class="h1">Спасибо за доверие!</h1>
    <p class="text">Мы перезвоним Вам в течение 15 минут. Юрист ответит на все интересующие вопросы и при необходимости запишет на личную встречу. Будем рады сотрудничеству.</p>
    <NuxtLink to="/" class="home">На главную</NuxtLink> 
  </article>
</template>

<script setup lang="ts">

</script>

<style scoped>
.wrapper {
  padding: 12rem 5rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
}

.h1 {
  font-size: 3.5rem;
  line-height: 110%;
  font-weight: 700;
  
}

.text {
  color: var(--gray500);
  width: 42rem;
}

.home {
  font-weight: 500;
  color: var(--primaryDark);
  border: 1.5px solid var(--primaryDark);
  height: 2.5rem;
  padding-inline: 2.5rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: 200ms;
}

.home:hover {
  color: var(--gray600);
  background: var(--primary);
  border: 1.5px solid var(--primary);
}

.home:active {
  color: var(--gray600);
  background: var(--primaryDark);
  border: 1.5px solid var(--primaryDark);
}

@media screen and (max-width: 96rem) {
  .wrapper {
    padding: 10rem 2rem 5rem;
  }
}

@media screen and (max-width: 80rem) {
  .wrapper {
    padding: 12rem 1rem 5rem;
    gap: 1.5rem;
  }

  .h1 {
    font-size: 2.75rem;
  }
  .text {
    width: 100%;
  }
}
</style>