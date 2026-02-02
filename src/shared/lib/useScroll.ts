import { getCurrentScope, onScopeDispose } from "vue";

const useScroll = () => {
  let wasLocked = false;

  const lock = () => {
    if (typeof window === "undefined") return;

    if (document.body.style.overflow !== "hidden") {
      wasLocked = true;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    }
  };

  const unlock = () => {
    if (typeof window === "undefined") return;

    if (wasLocked) {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      wasLocked = false;
    }
  };

  // Опционально: автоматически разблокировать при уничтожении компонента/контекста
  if (getCurrentScope()) {
    onScopeDispose(unlock);
  }

  return { lock, unlock };
};

export { useScroll };
