type FormatDateInput = string | number | Date | null | undefined;

/**
 * Форматирует дату в виде: "11 марта 2025 года"
 *
 * По умолчанию форматирует в UTC, чтобы ISO-строки с `Z` не "съезжали" по локальному времени.
 */
const formatDate = (
  input: FormatDateInput,
  options?: {
    /**
     * Таймзона для форматирования.
     * Пример: "UTC", "Europe/Moscow"
     */
    timeZone?: string;
  },
): string => {
  if (!input) return "";

  const date = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(date.getTime())) return "";

  const parts = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: options?.timeZone ?? "UTC",
  }).formatToParts(date);

  const day = parts.find((p) => p.type === "day")?.value;
  const month = parts.find((p) => p.type === "month")?.value;
  const year = parts.find((p) => p.type === "year")?.value;

  if (!day || !month || !year) return "";

  return `${day} ${month} ${year} г.`;
};

export { formatDate };
