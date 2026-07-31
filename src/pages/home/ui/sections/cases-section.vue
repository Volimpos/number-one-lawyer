<template>
  <section class="cases">
    <div class="cases__inner">
      <!-- <NuxtLink to="/cases" class="cases__badge">
        <span
          >Больше кейсов <span class="max-lg:hidden">в нашем блоге.</span></span
        >
        <span class="cases__badge-btn">Смотреть →</span>
      </NuxtLink> -->

      <h2 class="cases__title">Успешные кейсы</h2>

      <p class="cases__subtitle">
        За время работы мы сопровождали большое количество дел в разных отраслях
        права. Делимся интересными примерами.
      </p>
      <CasesSection class="mt-8 max-lg:mt-2" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { CasesSection } from "~/src/widgets/cases-section";
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

@media screen and (max-width: 96rem) {
  .cases__inner {
    padding-inline: 2rem;
  }
}

@media screen and (max-width: 80rem) {
  .cases__inner {
    padding-inline: 1rem;
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
}
</style>
