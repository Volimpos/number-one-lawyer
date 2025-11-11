<template>
  <div class="section">
    <div class="cta-section">
      <div class="text-block">
        <h2 class="h2">{{ props.ctaText }}</h2>

        <div class="buttons-section">
          <LinkButton link="/catalog" nuxt-link button large
            >Перейти в каталог</LinkButton
          >
          <Button @click="" large severity="contrast">
            Оформить заказ
            <template #iconRight>
              <i class="pi pi-arrow-right" />
            </template>
          </Button>
        </div>
      </div>
      <div class="image-block">
        <img :src="props.ctaImage" :alt="props.ctaText" class="image" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "~/src/shared/ui/button";
import { LinkButton } from "~/src/shared/ui/LinkButton";
// import { useModal } from "~/composables/useModal";

// const { toggleModal } = useModal();
const props = defineProps({
  ctaText: {
    type: String,
    required: true,
  },
  ctaImage: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.section {
  width: 100%;
  padding: 0 1rem 12rem;
  overflow: hidden;
  color: var(--contrast);
}
.cta-section {
  border: 1px solid var(--gray200);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 35vw;
  overflow: hidden;
}

.h2 {
  font-size: 2.25rem;
  line-height: 120%;
  font-weight: 600;
  white-space: pre-line;
}

.text-block {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
}

.buttons-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  font-weight: 500;
}

.image-block {
  flex: 1;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media screen and (max-width: 64rem) {
  .section {
    padding: 5rem 0.5rem 7rem;
  }
  .cta-section {
    height: auto;
    flex-direction: column;
  }

  .text-block {
    padding: 4rem 2rem;
    text-align: center;
  }

  .buttons-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
  }
}
</style>
