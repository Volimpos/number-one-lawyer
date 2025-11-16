<template>
  <div class="empty-cart">
    <p class="empty-cart__title">в корзине ничего нет...</p>
    <p class="empty-cart__cta">
      перейдите в каталог чтобы посмотреть наши украшения
    </p>
    <Button size="large" @click="$router.push('/catalog')" fluid
      >Перейти в каталог</Button
    >
  </div>
</template>

<script setup lang="ts">
import { Button } from "../button";
</script>

<style scoped>
.empty-cart {
  width: 100%;
  height: 70dvh;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.empty-cart__title {
  font-size: 1.5rem;
  color: var(--contrast);
}
.empty-cart__cta {
  color: var(--gray400);
  font-weight: 400;
}
</style>
