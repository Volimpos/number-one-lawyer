<template>
  <div class="privacy">
    <div class="h1-container">
      <h1>Политика в отношении обработки персональных данных</h1>
    </div>

    <ol>
      <li v-for="(section, index) in privacy" :key="index">
        <h2>{{ section.title }}</h2>
        <p
          v-for="(paragraph, pIndex) in section.paragraphs"
          :key="pIndex"
          v-html="formatParagraph(paragraph, index + 1)"
        ></p>
      </li>
    </ol>
  </div>
</template>

<script setup>
import privacy from "../model/store";

const formatParagraph = (paragraph, sectionNumber) => {
  if (paragraph.subNumber !== null && paragraph.subNumber !== undefined) {
    return `${sectionNumber}.${paragraph.subNumber}. ${paragraph.text}`;
  }
  return paragraph.text;
};

useSeoMeta({
  title: "Политика конфиденциальности | Юридическая компания №1",
  ogTitle: "Политика конфиденциальности | Юридическая компания №1",
  ogSiteName: "Юридическая компания №1",
});
</script>

<style scoped>
.privacy {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  padding: 10rem 5rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  height: 100dvh;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.privacy::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.h1-container {
  position: relative;
  align-self: stretch;
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 110%;
  position: sticky;
  top: 0;
  left: 5rem;
  width: 100%;
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.75rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  line-height: 110%;
}

p {
  margin-bottom: 0.5rem;
}

@media screen and (max-width: 96rem) {
  .privacy {
    padding: 6rem 2rem;
  }
  h1 {
    font-size: 2.25rem;
  }
  h2 {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 80rem) {
  .privacy {
    padding: 6rem 1rem;
    gap: 1rem;
  }
  h1 {
    font-size: 2rem;
  }
}

@media screen and (max-width: 64rem) {
  .privacy {
    display: block;
    height: auto;
  }
  h1 {
    width: 100%;
    font-size: 1.75rem;
  }

  h2 {
  }
}
</style>
