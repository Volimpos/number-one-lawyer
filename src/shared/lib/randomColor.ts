const hslToHex = (h: number, s: number, l: number): string => {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }

  const toHex = (value: number) =>
    Math.round((value + m) * 255)
      .toString(16)
      .padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

/**
 * Генерирует случайный цвет для фона аватара отзыва.
 * Цвет достаточно тёмный и умеренно насыщенный, чтобы белый текст был контрастным
 * и не выглядел кислотным.
 */
const randomColor = (): string => {
  // Произвольный оттенок
  const hue = Math.floor(Math.random() * 360);

  // Умеренная насыщенность, чтобы избежать кислотных цветов
  const saturation = 35 + Math.random() * 25; // 35–60%

  // Низкая светлота для хорошего контраста с белым текстом
  const lightness = 20 + Math.random() * 15; // 20–35%

  return hslToHex(hue, saturation, lightness);
};

export { randomColor };
