<template>
  <header class="header">
    <div
      class="header__left"
      :class="isTransparent ? 'header-white_blur' : 'header-white'"
    >
      <LinkButton link="/" nuxtLink severity="primary">
        <img src="../assets/logo.svg" alt="logo" class="logo__image" />
      </LinkButton>

      <div class="header__left__nav">
        <div class="verticalLine lg:hidden"></div>
        <LinkButton link="/catalog" nuxtLink severity="primary">
          Каталог
        </LinkButton>
        <div class="verticalLine max-lg:hidden"></div>
        <div class="max-lg:hidden">
          <LinkButton :link="`tel:${contacts?.phone}`">
            {{ contacts?.phone }}
          </LinkButton>
        </div>

        <div class="verticalLine max-lg:hidden"></div>
        <div class="max-lg:hidden">
          <Button text severity="contrast">Оформить заказ</Button>
        </div>
      </div>
    </div>
    <div class="header__right">
      <Button fluid large>
        Корзина
        <template #iconLeft>
          <i class="pi pi-shopping-cart"></i>
        </template>
      </Button>
      <!-- <Button
        @click=""
        label="Корзина"
        class="header__right__button"
        :icon="
          productCartStore.cart.length > 0
            ? 'pi pi-cart-arrow-down'
            : 'pi pi-shopping-cart'
        "
      /> -->
    </div>
  </header>
</template>

<script setup lang="ts">
// import { useModal } from "~/composables/useModal";
// import { useProductCart } from "~/composables/useProductCart";
// import { useProductCartStore } from "~/storage/productCartStore";
import { LinkButton } from "~/src/shared/ui/LinkButton";
import { Button } from "~/src/shared/ui/button";
import { useHeaderScroll } from "../lib/useHeaderScroll";
import { useContactsStore } from "~/src/shared/model/contacts/store";
const contactStore = useContactsStore();
const contacts = contactStore.contacts;

// const { toggleModal } = useModal();
// const { toggleProductCart } = useProductCart();

// const productCartStore = useProductCartStore();

// const phone = inject("phone");
const phone = ref<string>("+7 (999) 999-99-99");
const { isTransparent } = useHeaderScroll();
</script>

<style scoped>
.header {
  position: fixed;
  top: 1rem;
  width: 100%;
  padding-inline: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  z-index: 10;
  color: var(--contrast);
  height: 3rem;
}

.header-white {
  background-color: white;
}

.header-white_blur {
  background-color: rgba(255, 255, 255, 0.737);
  backdrop-filter: blur(1rem);
}

.header__left {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 15px;
  border-radius: 0.25rem;
  height: 100%;
  transition: 200ms;
  z-index: 10;
}

.logo__image {
  width: 100%;
  height: 2.125rem;
  object-fit: contain;
  margin-top: -3px;
}

.header__left__nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 1rem;
}

.header__right {
  width: 7.75rem;
  height: 100%;
}

.header__left__nav__catalog-item,
.header__left__nav__phone-item {
  border-right: 0.085rem solid var(--gray200);
  padding-right: 1rem;
}

.verticalLine {
  height: 2rem;
  border-right: 1.5px solid var(--gray200);
}

@media screen and (max-width: 64rem) {
  .header {
    top: 0.5rem;
    padding-inline: 0.5rem;
    gap: 0.25rem;
  }

  .header__left__nav__catalog-item,
  .header__left__nav__phone-item {
    border-right: none;
    border-left: 0.085rem solid var(--gray-200);
    padding-left: 1.5rem;
  }

  .header__left__nav__phone-item,
  .header__left__nav__order-item {
    display: none;
  }
}
</style>
