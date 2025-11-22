<template>
  <div class="footer-container">
    <div class="footer">
      <div class="footer_base-info">
        <div class="base-info__logo-and-socials">
          <img
            src="./assets/logo-footer.svg"
            alt="logo"
            class="logo-and-socials__logo"
          />
          <p class="logo-and-socials__slogan">
            Дарите эмоции, они незабываемы!
          </p>
          <div class="logo-and-socials__socials">
            <a :href="contacts?.instagram" class="social_link">
              <i class="pi pi-instagram social_link_icon" />
            </a>
            <a :href="contacts?.telegram" class="social_link">
              <i class="pi pi-telegram social_link_icon" />
            </a>
            <a :href="contacts?.whatsapp" class="social_link">
              <i class="pi pi-whatsapp social_link_icon" />
            </a>
            <a :href="contacts?.vk" class="social_link">
              <svg
                class="social_link_icon"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="social_link_icon"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.4 3.4C2 4.81333 2 7.07333 2 11.6V12.4C2 16.92 2 19.18 3.4 20.6C4.81333 22 7.07333 22 11.6 22H12.4C16.92 22 19.18 22 20.6 20.6C22 19.1867 22 16.9267 22 12.4V11.6C22 7.08 22 4.82 20.6 3.4C19.1867 2 16.9267 2 12.4 2H11.6C7.08 2 4.82 2 3.4 3.4ZM5.37333 8.08667C5.48 13.2867 8.08 16.4067 12.64 16.4067H12.9067V13.4333C14.58 13.6 15.8467 14.8267 16.3533 16.4067H18.72C18.4773 15.5089 18.0469 14.6727 17.4574 13.9533C16.8679 13.234 16.1326 12.6478 15.3 12.2333C16.0461 11.779 16.6905 11.1756 17.1929 10.461C17.6953 9.7464 18.045 8.93585 18.22 8.08H16.0733C15.6067 9.73334 14.22 11.2333 12.9067 11.3733V8.08667H10.7533V13.8467C9.42 13.5133 7.74 11.9 7.66666 8.08667H5.37333Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="base-info__links">
          <div class="base-info__links__section">
            <p class="subtitle">Категории</p>

            <LinkButton link="/catalog/rings" nuxt-link severity="secondary">
              Кольца
            </LinkButton>
            <LinkButton
              link="/catalog/bracelets"
              nuxt-link
              severity="secondary"
            >
              Браслеты
            </LinkButton>
            <LinkButton link="/catalog/earrings" nuxt-link severity="secondary">
              Серьги
            </LinkButton>
            <LinkButton link="/catalog/necklace" nuxt-link severity="secondary">
              Колье
            </LinkButton>
          </div>
          <div class="base-info__links__section">
            <p class="subtitle">Контакты</p>
            <LinkButton :link="`tel:${contacts?.phone}`" severity="secondary">
              {{ contacts?.phone }}
            </LinkButton>
            <LinkButton :link="contacts?.whatsapp" severity="secondary">
              WhatsApp
            </LinkButton>
            <LinkButton :link="contacts?.instagram" severity="secondary">
              Instagram
            </LinkButton>
            <LinkButton :link="contacts?.vk" severity="secondary">
              VK
            </LinkButton>
          </div>
        </div>
      </div>
      <div class="footer_tech-info">
        <p>
          {{ contacts?.ip }}
          <br />
          ИНН: {{ contacts?.inn }}
        </p>
        <p>
          Разработка сайта:
          <a href="https://t.me/Volimpos" class="hover:text-black">MAKOV.IO</a>
        </p>

        <LinkButton nuxtLink link="/privacy" severity="secondary">
          Политика конфиденциальности
        </LinkButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useContactsStore } from "~/src/shared/model/contacts/store";
import { LinkButton } from "~/src/shared/ui/LinkButton";
const contactStore = useContactsStore();
const contacts = contactStore.contacts;
</script>

<style scoped>
.footer-container {
  width: 100%;
  padding: 1rem;
}

.footer {
  border: 1px solid var(--gray200);
  border-radius: 0.25rem;
  background-color: var(--gray100);
  padding: 8rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 12rem;
}

.footer_base-info {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  gap: 2rem;
}
.base-info__logo-and-socials {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
}
.logo-and-socials__logo {
  width: 12rem;
}
.logo-and-socials__slogan {
  color: var(--gray400);
}
.logo-and-socials__socials {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 2rem;
}
.social_link {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;
}

.social_link:hover {
  color: var(--gray400);
}

.social_link_icon {
  font-size: 1.5rem;
}

.base-info__links {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  flex: 1;
}

.base-info__links__section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 0.5rem;
}

.base-info__links__section .subtitle {
  margin-bottom: 1rem;
}

.base-info__links__section__item {
  color: var(--gray400);
  font-weight: 500;
}
.base-info__links__section__item:hover {
  color: var(--contrast);
}

.footer_tech-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: var(--gray400);
  & p {
    font-size: 0.875rem;
  }
}

@media screen and (max-width: 64rem) {
  .footer-container {
    padding: 1rem 0.5rem;
  }
  .footer {
    padding: 1rem;
    gap: 3rem;
  }
  .footer_base-info {
    flex-direction: column;
    gap: 3rem;
  }

  .base-info__logo-and-socials {
    gap: 3rem;
  }

  .base-info__links {
    width: 100%;
  }
}
</style>
