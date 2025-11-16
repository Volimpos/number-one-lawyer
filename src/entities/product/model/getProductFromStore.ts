import { useProductStore } from "~/src/entities/product/model/store";
import type { Product } from "../types";

const getProductFromStore = (id: string): Product | null => {
  const productStore = useProductStore();
  const { products } = storeToRefs(productStore);
  if (!products.value) return null;
  const product = products.value.find((prod) => Number(prod.id) === Number(id));
  return product ?? null;
};

export { getProductFromStore };
