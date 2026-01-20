<template>
    <div class="float-button">
        <LeadButton/>
    </div>
  
</template>

<script setup lang="ts">
import { LeadButton } from '~/src/features/lead-button';


</script>

<style scoped>
.float-button {
    position: fixed;
    bottom: 1rem;
    right: 5rem;
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