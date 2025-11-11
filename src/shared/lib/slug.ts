/**
 * Транслитерирует кириллические и другие символы в латиницу
 */
function transliterate(text: string): string {
  const charMap: { [key: string]: string } = {
    // Русские буквы
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "yo",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",

    // Украинские буквы
    є: "ye",
    і: "i",
    ї: "yi",
    ґ: "g",

    // Белорусские буквы
    ў: "u",

    // Немецкие умлауты
    ä: "ae",
    ö: "oe",
    ü: "ue",
    ß: "ss",

    // Французские акценты
    à: "a",
    â: "a",
    ç: "c",
    é: "e",
    è: "e",
    ê: "e",
    ë: "e",
    î: "i",
    ï: "i",
    ô: "o",
    ù: "u",
    û: "u",
    ÿ: "y",

    // Испанские акценты
    á: "a",
    í: "i",
    ñ: "n",
    ó: "o",
    ú: "u",

    // Другие европейские символы
    å: "a",
    æ: "ae",
    ø: "o",
    œ: "oe",
  };

  return text
    .toLowerCase()
    .split("")
    .map((char) => {
      // Сначала проверяем точное соответствие
      if (charMap[char]) {
        return charMap[char];
      }

      // Проверяем соответствие без учета регистра
      const lowerChar = char.toLowerCase();
      if (charMap[lowerChar]) {
        return charMap[lowerChar];
      }

      // Для символов, которых нет в маппинге, оставляем как есть
      return char;
    })
    .join("");
}

/**
 * Преобразует заголовок статьи в slug на латинице формата word-word-word
 */
const makeSlug = (title: string): string => {
  if (!title || typeof title !== "string") {
    throw "Передаваемое значение не является строкой";
  }

  return (
    transliterate(title)
      // Удаляем все символы, кроме букв, цифр, пробелов и дефисов
      .replace(/[^a-z0-9\s-]/g, "")
      // Заменяем пробелы и множественные дефисы на одиночные дефисы
      .replace(/[\s-]+/g, "-")
      // Удаляем дефисы с начала и конца строки
      .replace(/^-+|-+$/g, "")
      // Обрезаем длину slug (максимум 100 символов)
      .slice(0, 100)
      // Удаляем возможный дефис в конце после обрезки
      .replace(/-+$/, "")
  );
};

const parseSlugFromId = (slug: string | number) => {
  if (!slug) {
    throw "Слаг не передан";
  }
  const stringSlug = typeof slug === "string" ? slug : String(slug);

  return stringSlug.split("-")[0];
};

export { makeSlug, parseSlugFromId };
