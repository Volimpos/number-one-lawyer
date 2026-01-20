import { useCases } from "./store"

const getLimitedCaseItems = (quantity: number = 4) => {
  const casesStore = useCases();
  const { cases } = storeToRefs(casesStore);

  if (!cases.value?.length) return null;

  if (quantity <= 0) return [];

  if (cases.value.length <= quantity) return cases.value.slice();

  const result = [];
  const usedIndexes = new Set<number>();

  while (result.length < quantity) {
    const idx = Math.floor(Math.random() * cases.value.length);
    if (usedIndexes.has(idx)) continue;
    usedIndexes.add(idx);
    result.push(cases.value[idx]);
  }

  return result;
};

export default getLimitedCaseItems;