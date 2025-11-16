import api from "~/src/shared/api/useApi";
import type { ContactFormInterface } from "~/src/features/contact-form/types";
import type { ProductInCart } from "~/src/entities/product";

const sendContactsWithProducts = async (
  contacts: ContactFormInterface,
  products: ProductInCart[]
) => {
  try {
    const url = "lead/store";
    const orderData = {
      ...contacts,
      ...{
        products: products,
      },
    };
    const response = await api.post(url, orderData);
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

export { sendContactsWithProducts };
