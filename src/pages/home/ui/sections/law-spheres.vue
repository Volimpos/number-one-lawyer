<template>
  <article class="law-sphere-section">
    <div>
      <h2 class="law-sphere-section__title">
        Сферы права, с которыми мы работаем
      </h2>
    </div>

    <div class="law-sphere-section__grid">
      <NuxtLink
        :to="item.link"
        v-for="item in items"
        :key="item.title"
        class="law-sphere-section__item"
      >
        <p class="law-sphere-section__item-title">
          {{ item.title }}
        </p>
        <div class="arrow-icon">
          <svg
            width="139"
            height="139"
            viewBox="0 0 139 139"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="138.496" y1="101" x2="138.496" y2="1" stroke="inherit" />
            <line
              x1="38.9961"
              y1="0.5"
              x2="138.996"
              y2="0.5"
              stroke="inherit"
            />
            <line
              x1="0.353478"
              y1="138.646"
              x2="138.353"
              y2="0.646451"
              stroke="inherit"
            />
          </svg>
        </div>
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
const items = [
  {
    title: "Защита прав потребителей",
    link: "/customer_law",
  },
  {
    title: "Автоюрист",
    link: "/autolawyer",
  },
  {
    title: "Семейное право",
    link: "/family_law",
  },
  {
    title: "Уголовное право",
    link: "/criminal_law",
  },
  {
    title: "Миграционное право",
    link: "/migration_law",
  },
  {
    title: "Трудовое право",
    link: "/labour_law",
  },
  {
    title: "Жилищное право",
    link: "/housing_law",
  },
  {
    title: "Наследство",
    link: "/inheritance_law",
  },
  {
    title: "Земельное право",
    link: "/land_law",
  },
];
</script>

<style scoped>
.law-sphere-section {
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.law-sphere-section__title {
  font-size: 3rem;
  line-height: 110%;
  font-weight: 700;
  max-width: 38rem;
  color: var(--gray600);
  text-align: center;
}

.law-sphere-section__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
  padding: 0 5rem;
  margin-top: 3rem;
  gap: 1.5rem;
}

.law-sphere-section__item {
  position: relative;
  z-index: 0;
  border: 1px solid var(--gray300);
  border-radius: 0.5rem;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  stroke: var(--gray300);
  padding: 2rem;
  overflow: hidden;
  background-color: transparent;
  transition: border-color 200ms ease;
}
.law-sphere-section__item::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: var(--yellowToBlueGradient);
  opacity: 0;
  transition: opacity 200ms ease;
}
.law-sphere-section__item:hover {
  border: 1px solid transparent;
}
.law-sphere-section__item:hover::before {
  opacity: 1;
}

.law-sphere-section__item-title {
  font-size: 2.25rem;
  font-weight: 400;
  text-align: left;
  color: var(--gray600);
  width: 70%;
  line-height: 120%;
}
.arrow-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  position: relative;
}
.arrow-icon svg {
  height: 100%;
  aspect-ratio: 1/1;
}

@media screen and (max-width: 96rem) {
  .law-sphere-section__grid {
    padding: 0 2rem;
  }
}
@media screen and (max-width: 80rem) {
  .law-sphere-section__grid {
    padding: 0 1rem;
    gap: 1rem;
  }
  .law-sphere-section__item {
    padding: 1.5rem;
  }
  .law-sphere-section__item-title {
    font-size: 1.75rem;
  }
  .arrow-icon {
    height: 7rem;
  }
  .arrow-icon svg {
    margin-right: -1rem;
  }
}

@media screen and (max-width: 64rem) {
  .law-sphere-section__title {
    font-size: 2rem;
    text-align: left;
    padding-inline: 1rem;
    width: 100%;
  }
  .law-sphere-section__grid {
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 1rem;
  }
  .law-sphere-section__item {
    padding: 0.75rem;
  }
  .law-sphere-section__item-title {
    font-size: 1.25rem;
  }
  .arrow-icon {
    height: 30%;
  }
  .arrow-icon svg {
    margin-right: -2.75rem;
  }
}
</style>
