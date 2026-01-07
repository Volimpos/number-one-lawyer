<template>
  <div class="footer-container">
    <footer class="footer">
      <div class="logo">
        <NuxtLink to="/">
          <img :src="logoMain" alt="Юрист №1 лого" />
        </NuxtLink>
      </div>
      <div class="info">
        <div class="tech-info">
          <p>
            Юридическая компания №1. Работаем чтобы сохранять Ваше время, нервы
            и деньги.
          </p>
          <div class="mt-6">
            <p>ООО “Юридическая компания №1”</p>
            <p>ОГРН: 1257400023099</p>
            <p>Адрес: г. Челябинск, ул Кирова, д. 7А, помещ. 29</p>
          </div>
          <div class="social">
            <a href="#"><img :src="vkLogo" alt="VK" /></a>
            <a href="#"><img :src="tgLogo" alt="Telegram" /></a>
          </div>
        </div>
        <div class="links">
          <div class="services">
            <p class="footer-title">Услуги</p>
            <ul class="mt-6 flex flex-col gap-2">
              <li v-for="service in services" :key="service.title">
                <NuxtLink :to="service.link">
                  {{ service.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="about">
            <p class="footer-title">О нас</p>
            <ul class="mt-6 flex flex-col gap-2">
              <NuxtLink to="/privacy">Политика конфиденциальности</NuxtLink>
              <NuxtLink to="/about">О компании</NuxtLink>
              <NuxtLink to="/contacts">Контакты</NuxtLink>
              <NuxtLink to="/cases">Кейсы</NuxtLink>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
import logoMain from "~/src/app/assets/logo.svg";
import vkLogo from "~/src/app/assets/vk_logo.svg";
import tgLogo from "~/src/app/assets/tg_logo.svg";

const services = [
  {
    title: "Защита прав потребителей",
    link: "/consumer-protection",
  },
  {
    title: "Автоюрист",
    link: "/autolawyer",
  },
  {
    title: "Семейное право",
    link: "/family-law",
  },
  {
    title: "Уголовное право",
    link: "/criminal-law",
  },
  {
    title: "Миграционное право",
    link: "/migration-law",
  },
  {
    title: "Трудовое право",
    link: "/labor-law",
  },
  {
    title: "Жилищное право",
    link: "/housing-law",
  },
  {
    title: "Наследство",
    link: "/inheritance-law",
  },
  {
    title: "Земельное право",
    link: "/land-law",
  },
];
</script>

<style scoped>
.footer-container {
  padding: 5rem;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 99%,
    var(--white) 100%,
    var(--white) 100%
  );
}
.footer {
  border-top: 1px solid var(--gray300);
  color: var(--gray600);
  font-weight: 500;
}
.logo {
  margin-top: 4rem;
}
.info {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}
.social {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 1.5rem;
}
.social img {
  width: 2rem;
  height: 2rem;
}

.links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.footer-title {
  font-weight: 600;
}

@media screen and (max-width: 96rem) {
  .footer-container {
    padding: 5rem 2rem;
  }
}

@media screen and (max-width: 80rem) {
  .footer-container {
    padding: 5rem 1rem;
  }
}

@media screen and (max-width: 64rem) {
  .info {
    display: flex;
    flex-direction: column;
  }
}
</style>
