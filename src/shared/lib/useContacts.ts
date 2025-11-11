import useApi from "../api/useApi";
import { contactsMapper } from "./contacts/contactsMapper";

const useContacts = async () => {
  const { data, status, error } = await useAsyncData("contacts", async () => {
    return await useApi.get("contacts", {});
  });

  if (status.value === "success" && data.value) {
    return {
      result: true,
      contacts: contactsMapper(data.value),
      error: null,
    };
  } else {
    return {
      result: false,
      contacts: null,
      error: error.value?.message || "Ошибка загрузки данных",
    };
  }
};

export { useContacts };
