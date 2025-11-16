import api from "~/src/shared/api/useApi";
import type { ContactFormInterface } from "../types";

const sendContacts = async (contacts: ContactFormInterface) => {
  try {
    const url = "lead/store";
    const response = await api.post(url, contacts);
    if (response && !response.error) {
      return {
        result: true,
        error: null,
      };
    }
  } catch (error: any) {
    return {
      result: false,
      error: error.message ?? "Возникла ошибка, попробуйте еще раз",
    };
  }
};

export { sendContacts };
