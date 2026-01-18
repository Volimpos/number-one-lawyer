<template>
    <div class="wrapper">
        <div class="title-container">
        <h1 class="title">Наши кейсы</h1>
    <p class="description">Показываем свою работу и делимся полезной практикой</p>
    </div>
    <div class="cases-grid">
        <CaseCard 
            v-for="(caseItem, index) in cases" 
            :key="index"
            :image="caseItem.image"
            :date="caseItem.date"
            :sphere="caseItem.sphere"
            :title="caseItem.title"
            :description="caseItem.description"
            :link="caseItem.link"
        />
</div>
    </div>
   
    
    
</template>

<script setup lang="ts">
    import CaseCard from '~/src/shared/ui/case-card/CaseCard.vue';
    import cases from '../model/store';
</script>

<style scoped>
    .wrapper {
        padding: 7rem 5rem;
    }
    .title-container {
        text-align: center;
    }
.title {
  font-size: 3rem;
  line-height: 110%;
  font-weight: 700;
  color: var(--gray600);
}

.description {
    color: var(--gray500);
    margin-top: 0.5rem;
}

.cases-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin-top: 3rem;
}

@media screen and (max-width: 96rem) {
    .wrapper {
    padding: 7rem 2rem;
}
}

@media screen and (max-width: 80rem) {
.wrapper {
    padding: 7rem 1rem;
}
    .cases-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
    }
}

@media screen and (max-width: 64rem) {

    .cases-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}

</style>
