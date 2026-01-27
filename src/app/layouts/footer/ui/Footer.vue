<template>
  <div class="footer-container">
    <footer class="footer">
      <div class="logo">
        <NuxtLink to="/">
          <img :src="logoMain" alt="Юридическая компания №1 лого" class="logo__image" />
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
            <a href="https://vk.ru/ykchelybinsk"><img :src="vkLogo" class="vkLogo" alt="VK" /></a>
            <a href="https://t.me/urist01"><img :src="tgLogo" alt="Telegram" class="tgLogo" /></a>
            <a href="https://2gis.ru/chelyabinsk/firm/70000001089709132">
              <img :src="gisLogo" alt="2GIS">
            </a>
            <a href="https://chelyabinsk.flamp.ru/firm/yuridicheskaya_kompaniya_1-70000001089709132"><img :src="flampLogo" alt="Flamp" class="flampLogo" /></a>
            <a href="https://www.avito.ru/brands/39c6409fa838c6c354eedd1b716c8768/all?sellerId=9154d3067f34c49f0c5a424bcc51f460">
              <img :src="avitoLogo" alt="Avito" class="avitoLogo">
            </a>
            <a href="https://uslugi.yandex.ru/profile/YuridicheskayaKompaniya1-2964404">
              <img :src="yandexIspolnitelLogo" alt="YandexIspolniteli" class="yandexInspolniteli">
            </a>
            <a href="https://chelyabinsk.law-firmika.ru/firms.php?i=602583">
              <img :src="firmikaLogo" alt="Firmika">
            </a>
            <a href="https://yandex.ru/maps/org/yuridicheskaya_kompaniya_1/229043841147/?ll=61.402658%2C55.180739&z=15.6">
              <img :src="yandexMapsLogo" alt="YandexMaps" class="yandexMaps">
            </a>
          </div>

        </div>
        <div class="links">
          <div class="services">
            <p class="footer-title">Услуги</p>
            <ul class="mt-6 flex flex-col gap-2">
              <li v-for="service in spheres" :key="service.label">
                <NuxtLink :to="service.link">
                  {{ service.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="about">
            <p class="footer-title">О нас</p>
            <ul class="mt-6 flex flex-col gap-2">
              <NuxtLink to="/privacy">Политика конфиденциальности</NuxtLink>
              <NuxtLink to="/about">О компании</NuxtLink>
              <NuxtLink to="/cases">Кейсы</NuxtLink>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
import logoMain from "~/src/shared/assets/logo.png";
import vkLogo from "~/src/app/assets/vk_logo.svg";
import tgLogo from "~/src/app/assets/tg_logo.svg";
import gisLogo from "~/src/app/assets/2GIS_logo.svg"
import flampLogo from "~/src/app/assets/flamp.png"
import firmikaLogo from "~/src/app/assets/firmika.svg"
import avitoLogo from "~/src/app/assets/Avito_logo.svg"
import yandexMapsLogo from "~/src/app/assets/yandex-maps-logo.svg"
import yandexIspolnitelLogo from "~/src/app/assets/yai.svg"
import spheres from "~/src/shared/model/menu/store";
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
  width: 50px;
  height: 50px;
}

.logo__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  flex-wrap: wrap;
}
.social img {
  height: 2rem;
  object-fit: contain;
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
  .logo {
  width: 43px;
  height: 43px;
}
}
</style>
