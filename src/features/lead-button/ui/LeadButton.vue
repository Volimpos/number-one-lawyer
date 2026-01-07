<template>
  <div class="lead-button" ref="root">
    <button class="btn-primary" @click.stop="toggleOptions">
      Бесплатная консультация
    </button>
    <Transition name="variant-fade">
      <ul
        v-if="optionsOpen"
        ref="listEl"
        :class="[
          'variant-list',
          direction === 'up' ? 'variant-list--up' : 'variant-list--down',
        ]"
      >
        <li>Написать в WhatsApp</li>
        <li>Написать в Telegram</li>
        <li>Заказать звонок</li>
        <li>Позвонить</li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";

const optionsOpen = ref<boolean>(false);
const root = ref<HTMLElement | null>(null);
const listEl = ref<HTMLElement | null>(null);
const direction = ref<"up" | "down">("down");

const updateDirection = () => {
  if (!root.value || !listEl.value) return;

  const rootRect = root.value.getBoundingClientRect();
  const listRect = listEl.value.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  const spaceBelow = viewportHeight - rootRect.bottom;
  const spaceAbove = rootRect.top;

  if (spaceBelow < listRect.height && spaceAbove > listRect.height) {
    direction.value = "up";
  } else {
    direction.value = "down";
  }
};

const toggleOptions = () => {
  if (!optionsOpen.value) {
    optionsOpen.value = true;
    nextTick(updateDirection);
    return;
  }

  optionsOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (!optionsOpen.value) return;

  const target = event.target as Node | null;
  if (root.value && target && !root.value.contains(target)) {
    optionsOpen.value = false;
  }
};

const handleWindowChange = () => {
  if (!optionsOpen.value) return;
  nextTick(updateDirection);
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("resize", handleWindowChange);
  window.addEventListener("scroll", handleWindowChange, true);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("resize", handleWindowChange);
  window.removeEventListener("scroll", handleWindowChange, true);
});
</script>

<style scoped>
.lead-button {
  position: relative;
  display: inline-block;
}

.btn-primary {
  background-color: var(--primary);
  padding-inline: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.75rem;
  border-radius: var(--buttonBorderRadius);
  transition: 300ms;
  font-weight: 500;
  width: 100%;
}
.btn-primary:hover {
  background-color: var(--primaryDark);
}

.variant-list {
  position: absolute;
  right: 0;
  list-style: none;
  padding: 8px 0;
  background: var(--white);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  width: 100%;
  z-index: 10;
}

.variant-list--down {
  top: 90%;
  bottom: auto;
  margin-top: 8px;
  margin-bottom: 0;
}

.variant-list--up {
  bottom: 90%;
  top: auto;
  margin-bottom: 8px;
  margin-top: 0;
}

.variant-list li {
  padding: 8px 16px;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
}

.variant-list li:hover {
  background-color: var(--gray100);
}

/* 200ms плавное появление/скрытие */
.variant-fade-enter-active,
.variant-fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.variant-fade-enter-from,
.variant-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.variant-fade-enter-to,
.variant-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
