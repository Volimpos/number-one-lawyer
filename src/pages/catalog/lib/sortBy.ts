import type { SortValueType } from "~/src/shared/types/filter";

const SORT_TYPES = new Set<SortValueType>([
  "priceUp",
  "priceDown",
  "dateUp",
  "dateDown",
]);

function isSortValueType(val: any): val is SortValueType {
  return SORT_TYPES.has(val as SortValueType);
}

const sortBy = (value: any): SortValueType => {
  return isSortValueType(value) ? value : "dateDown";
};

export { sortBy };
