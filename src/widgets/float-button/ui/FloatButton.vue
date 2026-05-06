<template>


    <div class="float-button" :class="{ 'float-button--visible': isVisible && !isBurgerMenuOpen }">
        <LeadButton/>
    </div>
  
</template>

<script setup lang="ts">
import { LeadButton } from '../../../features/lead-button';
import { useFloatButtonScroll } from '../lib/useFloatButtonScroll';
import { useBurgerMenu } from '../../../features/burger-menu/model/useBurgerMenu';

const { isVisible } = useFloatButtonScroll(300);
const { isBurgerMenuOpen } = useBurgerMenu();

</script>

<style scoped>
.float-button {
    position: fixed;
    bottom: 1rem;
    right: 5rem;
    transform: translateY(150%);
    transition: transform 0.3s ease-in-out;
}

.float-button--visible {
    transform: translateY(0);
}

@media screen and (max-width: 96rem){
    .float-button {
    right: 2rem;
}
}
@media screen and (max-width: 80rem){
    .float-button {
    right: 1rem;
}
}

@media screen and (max-width: 64rem){
    .float-button {
    bottom: 0.5rem;
}
}
</style>