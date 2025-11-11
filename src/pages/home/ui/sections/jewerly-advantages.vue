<template>
  <div class="section">
    <div class="block-title">
      <h2 class="h2">{{ props.advantagesTitle }}</h2>
      <p>{{ props.advantagesDescription }}</p>
    </div>

    <div class="advantages-section">
      <div class="advantages-section__advantage">
        <div class="text-block">
          <p class="subtitle">{{ props.advantagesBlock1Title }}</p>
          <p class="text">{{ props.advantagesBlock1Text }}</p>
        </div>
        <img
          :src="props.advantagesImage1"
          :alt="props.advantagesBlock1Title"
          class="image"
        />
      </div>
      <div class="advantages-section__advantage">
        <img
          :src="props.advantagesImage2"
          :alt="props.advantagesBlock2Title"
          class="image"
        />
        <div class="text-block">
          <p class="subtitle">{{ props.advantagesBlock2Title }}</p>
          <p class="text">{{ props.advantagesBlock2Text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  advantagesImage1: {
    type: String,
    required: true,
  },
  advantagesImage2: {
    type: String,
    required: true,
  },
  advantagesTitle: {
    type: String,
    required: true,
  },
  advantagesDescription: {
    type: String,
    required: true,
  },
  advantagesBlock1Title: {
    type: String,
    required: true,
  },
  advantagesBlock1Text: {
    type: String,
    required: true,
  },
  advantagesBlock2Title: {
    type: String,
    required: true,
  },
  advantagesBlock2Text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 1rem;
  color: var(--contrast);
}

.h2 {
  text-align: center;
  width: 40rem;
  font-weight: 600;
  font-size: 2rem;
  line-height: 120%;
}

.block-title p {
  width: 40rem;
  text-align: center;
  color: var(--gray400);
  padding-top: 1rem;
}

.advantages-section {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  padding-top: 100px;
  align-items: center;
  justify-content: start;
}

.advantages-section__advantage {
  border-radius: 0.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  height: 32vw;
  width: 100%;
  gap: 1.5rem;
}

.text-block {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1rem;
  width: 30rem;
  flex: 2;
  padding-inline: 1rem;
}
.subtitle {
  font-size: 1.25rem;
  font-weight: 500;
}

.text {
  color: var(--gray400);
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  flex: 3;
  border-radius: 0.25rem;
}

@media screen and (max-width: 64rem) {
  .section {
    padding: 100px 0.5rem;
  }
  .h2,
  .block-title p {
    width: 100%;
  }

  .advantages-section {
    gap: 4rem;
  }

  .advantages-section__advantage:nth-child(1) {
    flex-direction: column-reverse;
  }

  .advantages-section__advantage:nth-child(2) {
    flex-direction: column;
  }

  .advantages-section__advantage {
    height: auto;
  }

  .text-block {
    width: 100%;
  }
  .image {
    width: 100%;
    max-height: 50vw;
  }
}
</style>
