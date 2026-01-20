import { useCases } from "./store"

const getCaseFromStore = (id: string) => {
    const casesStore = useCases()
    const { cases } = storeToRefs(casesStore)
    if (!cases.value) return null
    const caseItem = cases.value.find((cs) => Number(cs.id) === Number(id));
  return caseItem ?? null;
}

export default getCaseFromStore