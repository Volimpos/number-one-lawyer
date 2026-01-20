<template>


    <div class="float-button" :class="{ 'float-button--visible': isVisible }">
        <LeadButton/>
    </div>
  
</template>

<script setup lang="ts">
import { LeadButton } from '~/src/features/lead-button';
import { useFloatButtonScroll } from '../lib/useFloatButtonScroll';

const { isVisible } = useFloatButtonScroll(300);

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
    
}
</style>