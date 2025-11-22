<template>
  <div class="singe-size-container">
    <svg
      width="64px"
      height="64px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M12 3L15 12L12 21"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M12 3L9 12L12 21"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M12 21L19 12L12 3L5 12L12 21Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M5 12H19"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>

    <p class="singe-size-text">Единый размер</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.singe-size-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  border-radius: 0.25rem;
  background-color: var(--gray100);
  color: var(--gray400);
  min-height: 12rem;
  user-select: none;
}

.singe-size-text {
  font-size: 0.875rem;
}
</style>
