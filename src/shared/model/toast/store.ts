export const useToast = defineStore("toastStore", () => {
  interface Toast {
    id?: string;
    severity?: ToastSeverity;
    summary?: string;
    details?: string;
    life?: number | null;
  }

  type ToastSeverity = "info" | "error";

  const toastList = ref<Toast[]>([]);

  const addToast = (inputToast: Toast) => {
    console.log("add toast");
    const toast: Toast = {
      id: crypto.randomUUID(),
      severity: inputToast.severity ?? "info",
      summary: inputToast.summary,
      details: inputToast.details,
      life: inputToast.life ?? 7000,
    };

    toastList.value.push(toast);

    if (typeof toast.life === "number" && toast.life > 0) {
      setTimeout(() => {
        removeToast(toast);
      }, toast.life);
    }
  };

  const removeToast = (toast: Toast) => {
    const index = toastList.value.findIndex((item) => item.id === toast.id);
    if (index > -1) {
      toastList.value.splice(index, 1);
    }
  };

  return {
    toastList,
    addToast,
    removeToast,
  };
});
