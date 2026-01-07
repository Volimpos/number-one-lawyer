<template>
    <ClientOnly>
        <Transition name="slide-up">
            <div class="burger-menu-container" v-if="isBurgerMenuOpen">
                <Menu class="w-full" />
                <div class="px-4 w-full">
                    <LeadButton class="w-full" />
                </div>
            </div>
        </Transition>
    </ClientOnly>
</template>

<script setup lang="ts">
import { LeadButton } from "~/src/features/lead-button";
import { Menu } from "~/src/features/menu";
import { useBurgerMenu } from "../model/useBurgerMenu";

const { isBurgerMenuOpen } = useBurgerMenu();
</script>

<style scoped>
.burger-menu-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    background-color: var(--white);
    z-index: 1;
    padding-top: 5rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
}
.slide-up-enter-active {
    transition: all 200ms ease-out;
}
.slide-up-leave-active {
    transition: all 200ms ease-in;
}
.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(100%);
    opacity: 0;
}
</style>
