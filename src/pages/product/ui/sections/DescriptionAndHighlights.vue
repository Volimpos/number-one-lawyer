<template>
  <div class="description-highlighs-container">
    <div class="description">{{ props.description }}</div>
    <div class="highlights">
      <p class="highlights-title">Хайлайтсы</p>
      <ul class="highlights-list">
        <li v-for="highlight in props.highlights" class="list-item">
          {{ highlight }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  description: String;
  highlights: String[];
}>();
</script>

<style scoped>
.description-highlighs-container {
  padding-right: 1.125rem;
  flex: 2;
  padding-top: 1.5rem;
}
.description {
  font-weight: 500;
  font-size: 1rem;
}
.highlights {
  margin-top: 2rem;
  font-size: 0.875rem;
}

.highlights-title {
  font-size: 0.875rem;
}

.highlights-list {
  margin-top: 1rem;
  list-style: disc;
  list-style-position: inside;
}

.list-item {
  color: var(--gray500);
  margin-top: 0.5rem;
}

@media screen and (max-width: 64rem) {
  .description-highlighs-container {
    padding-right: 0;
    flex: 1;
    padding-top: 0;
    margin-top: 4rem;
  }
}
</style>
