<template>
  <div class="section">
    <section class="section__image-wrapper">
      <img :src="props.heroImage1" alt="Image1" class="image" />
      <div class="image-overlay">
        <div class="overlay__text-block first-block">
          <h2 class="hero-h2">{{ props.heroText1 }}</h2>
          <LinkButton large button nuxtLink link="/catalog">
            Перейти в каталог
          </LinkButton>
        </div>
      </div>
    </section>
    <section class="section__image-wrapper">
      <img :src="props.heroImage2" alt="Image2" class="image" />
      <div class="image-overlay">
        <div class="overlay__text-block second-block">
          <h2 class="hero-h2">{{ props.heroText2 }}</h2>
          <Button large>Оформить заказ</Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from "~/src/shared/ui/button";
import { LinkButton } from "~/src/shared/ui/LinkButton";
const props = defineProps({
  heroImage1: {
    type: String,
    required: true,
  },
  heroImage2: {
    type: String,
    required: true,
  },
  heroText1: {
    type: String,
    required: true,
  },
  heroText2: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.section {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.section__image-wrapper {
  height: 100svh;
  width: 100%;
  position: relative;
}

.image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.203);
}

.overlay__text-block {
  position: absolute;
  left: 0;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
}

.first-block {
  top: 15%;
}

.second-block {
  bottom: 15%;
}

.hero-h2 {
  font-size: 2.25rem;
  font-weight: 700;
  color: white;
  line-height: 110%;
  text-transform: uppercase;
  white-space: pre-line;
}

@media screen and (max-width: 80rem) {
  .hero-h2 {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: 64rem) {
  .section {
    flex-direction: column;
  }
}
</style>
