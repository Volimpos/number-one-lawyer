import { fetchCases } from "../api/fetchCases";
import type { CaseItem } from "./interfaces";

export const useCases = defineStore("casesStore", () => {

  const cases = ref<CaseItem[] | null>();

  const loadAllCases = async () => {
    const response = await fetchCases()
    if (response && response.result) {
        cases.value = response.data as CaseItem[];
    }
  }


  return {
    cases,
    loadAllCases,
  };
});
