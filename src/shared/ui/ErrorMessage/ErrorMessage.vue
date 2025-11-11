<template>
  <div class="error-container">
    <div class="error-message">
      Произошла ошибка загрузки. Попробуйте перезагрузить страницу
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.error-container {
  width: 50%;
  margin: 0 auto;
  padding: 0.5rem;
}
.error-message {
  border: 2px dashed var(--gray300);
  background-color: var(--gray100);
  color: var(--gray400);
  width: 100%;
  height: 20rem;
  font-weight: 500;
  border-radius: 0.25rem;
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin: 5% 0;
  text-align: center;
}

@media screen and (max-width: 64rem) {
  .error-container {
    width: 100%;
  }
  .error-message {
    width: 100%;
    height: 80%;
  }
}
</style>
