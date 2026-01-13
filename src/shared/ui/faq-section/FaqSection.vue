<template>
  <section class="faq">
    <div class="faq__inner">
      <h2 class="faq__title">Вопросы, которые задают почти всегда</h2>
      <div class="faq__content">
        <img :src="faqImage" alt="FAQ" class="faq__image" />
        <div class="faq__list">
          <div
            v-for="(item, index) in props.items"
            :key="item.q"
            class="faq-item"
            :class="{ 'faq-item--open': openItems[index] }"
          >
            <button
              class="faq-item__q"
              @click="toggleItem(index)"
              type="button"
            >
              {{ item.q }}
              <span class="faq-item__icon">+</span>
            </button>
            <div class="faq-item__a-wrapper">
              <div class="faq-item__a">
                <p>{{ item.a }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  faqImage: string;
  items: {
    q: string;
    a: string;
  }[];
}>();

const openItems = ref<boolean[]>(new Array(props.items.length).fill(false));

const toggleItem = (index: number) => {
  openItems.value[index] = !openItems.value[index];
};
</script>

<style scoped>
.faq {
  padding: 4rem 0;
}

.faq__inner {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  padding-inline: 5rem;
}

.faq__title {
  font-size: 3rem;
  line-height: 110%;
  font-weight: 700;
  color: var(--gray600);
}

.faq__subtitle {
  max-width: 44rem;
  color: var(--gray400);
}

.faq__content {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  align-items: start;
  margin-top: 2rem;
}

.faq__image {
  grid-column: 1;
}

.faq__list {
  grid-column: 2 / 4;
}

.faq__image {
  width: 100%;
  max-width: 100%;
  height: 36rem;
  object-fit: cover;
  object-position: 20% 10%;
  border-radius: 0.5rem;
  box-sizing: border-box;
  display: block;
}

.faq__list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  border-radius: 0.5rem;
  padding: 1.25rem 1.5rem;
  background: var(--white);
  text-align: left;
  box-shadow: var(--cardShadow);
  user-select: none;
  transition: background-color 0.2s;
}

.faq-item--open {
  border-color: var(--gray300);
  background: var(--blueAccent);
}

.faq-item__q {
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-weight: 500;
  color: var(--gray600);
  font-size: 1.125rem;
  text-align: left;
  font-family: inherit;
  line-height: 110%;
}

.faq-item__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  border: 1px solid var(--gray300);
  color: var(--gray600);
  flex: 0 0 auto;
  transition: transform 0.2s;
}

.faq-item--open .faq-item__icon {
  transform: rotate(45deg);
}

.faq-item__a-wrapper {
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 0.2s,
    margin-top 0.2s;
  margin-top: 0;
}

.faq-item--open .faq-item__a-wrapper {
  max-height: 500px;
  margin-top: 0.75rem;
}

.faq-item__a {
  color: var(--gray600);
}

@media screen and (max-width: 96rem) {
  .faq__inner {
    padding-inline: 2rem;
  }
}

@media screen and (max-width: 80rem) {
  .faq__inner {
    padding-inline: 1rem;
  }
}

@media screen and (max-width: 64rem) {
  .faq__inner {
    align-items: flex-start;
    text-align: left;
  }
  .faq__title {
    font-size: 2rem;
  }
  .faq__content {
    grid-template-columns: 1fr;
  }
  .faq__image {
    grid-column: 1;
  }
  .faq__list {
    grid-column: 1;
  }
  .faq__image {
    height: 24rem;
  }
  .faq-item {
    padding: 1rem;
  }
}
</style>
