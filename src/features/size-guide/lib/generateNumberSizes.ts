const generateNumberSizes = (
  start: number,
  end: number,
  step: number = 0.5
) => {
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i.toFixed(1).replace(/\.0$/, "")); // Убираем .0 у целых чисел
  }
  return result;
};

export { generateNumberSizes };
