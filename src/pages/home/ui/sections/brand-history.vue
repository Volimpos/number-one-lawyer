<template>
  <div class="section">
    <h2 class="h2">История создания бренда</h2>

    <div class="about-us">
      <div class="card">
        <div class="text-block">
          <h3 class="h3">{{ props.brandHistoryTitle1 }}</h3>
          <p class="text">{{ props.brandHistoryText1 }}</p>
        </div>
        <div class="image-section">
          <img
            :src="props.brandHistoryImage1"
            :alt="props.brandHistoryTitle1"
            class="image"
          />
        </div>
      </div>
      <div class="card">
        <div class="text-block">
          <h3 class="h3">{{ props.brandHistoryTitle2 }}</h3>
          <p class="text">{{ props.brandHistoryText2 }}</p>
        </div>
        <div class="image-section">
          <img
            :src="props.brandHistoryImage2"
            :alt="props.brandHistoryTitle2"
            class="image"
          />
        </div>
      </div>
      <div class="card">
        <div class="text-block">
          <h3 class="h3">{{ props.brandHistoryTitle3 }}</h3>
          <p class="text">{{ props.brandHistoryText3 }}</p>
        </div>
        <div class="image-section">
          <img
            :src="props.brandHistoryImage3"
            :alt="props.brandHistoryTitle3"
            class="image"
          />
        </div>
      </div>
      <div class="card">
        <div class="text-block">
          <h3 class="h3">{{ props.brandHistoryTitle4 }}</h3>
          <p class="text">{{ props.brandHistoryText4 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  brandHistoryTitle1: {
    type: String,
    required: true,
  },
  brandHistoryText1: {
    type: String,
    required: true,
  },
  brandHistoryImage1: {
    type: String,
    required: true,
  },
  brandHistoryTitle2: {
    type: String,
    required: true,
  },
  brandHistoryText2: {
    type: String,
    required: true,
  },
  brandHistoryImage2: {
    type: String,
    required: true,
  },
  brandHistoryTitle3: {
    type: String,
    required: true,
  },
  brandHistoryText3: {
    type: String,
    required: true,
  },
  brandHistoryImage3: {
    type: String,
    required: true,
  },
  brandHistoryTitle4: {
    type: String,
    required: true,
  },
  brandHistoryText4: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.section {
  background-color: var(--gray100);
  padding: 12rem 1rem;
  color: var(--contrast);
}

.h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: var(--contrast);
}
.h3 {
  font-size: 1.5rem;
  font-weight: 500;
}

.about-us {
  margin-top: 100px;
  gap: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: stretch;
  grid-template-areas:
    "col1 col2 col3"
    "col1 col4 col4";
  height: 56vw;
}

.card {
  padding: 2rem 2rem 0 2rem;
  border: 1px solid var(--gray200);
  background-color: white;
  border-radius: 0.25rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  overflow: hidden;
}

.card:nth-child(1) {
  grid-area: col1;
}
.card:nth-child(2) {
  grid-area: col2;
}
.card:nth-child(3) {
  grid-area: col3;
}
.card:nth-child(4) {
  grid-area: col4;
  padding: 2rem;
}

.text-block {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.text {
  color: var(--gray400);
  white-space: pre-line;
}

.image-section {
  border-radius: 3px 3px 0 0;
  height: 100%;
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  user-select: none;
  aspect-ratio: 1 / 1;
}

.image {
  width: 100%;
  height: 100%;
  user-select: none;
  object-fit: cover;
  aspect-ratio: 1 / 1;
}

@media screen and (max-width: 96rem) {
  .about-us {
    grid-template-rows: repeat(2, 1fr);
    height: 64vw;
  }
}

@media screen and (max-width: 80rem) {
  .about-us {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      "col1 col2"
      "col1 col3"
      "col4 col4";
    height: 100vw;
  }
}

@media screen and (max-width: 64rem) {
  .section {
    padding: 12rem 0.5rem;
  }
  .about-us {
    display: flex;
    flex-direction: column;
    height: auto;
  }
  .card {
    padding: 1rem 1rem 0 1rem;
  }
  .card:nth-child(4) {
    padding: 1rem;
  }
}
</style>
