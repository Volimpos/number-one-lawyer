const formatPhone = (value: string): string => {
  if (!value) return "";

  // Гарантируем, что номер начинается с 7
  if (!value.startsWith("7")) {
    value = "7" + value;
  }

  // Разбиваем на группы для форматирования
  const match = value.match(/^7(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
  if (!match) return "";

  const [, part1, part2, part3, part4] = match;
  let formatted = "+7";
  if (part1) formatted += ` (${part1}`;
  if (part2) formatted += `) ${part2}`;
  if (part3) formatted += `-${part3}`;
  if (part4) formatted += `-${part4}`;

  return formatted;
};
