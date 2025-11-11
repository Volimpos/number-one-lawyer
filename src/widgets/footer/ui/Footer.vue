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
              <Icon28LogoVk class="social_link_icon" />
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
            <LinkButton :link="contacts?.phone" severity="secondary">
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
          <a href="https://t.me/Volimpos" class="hover:text-black">Volimpos</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon28LogoVk } from "vue-vkontakte-icons";
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
