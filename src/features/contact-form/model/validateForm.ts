import type {
  ContactFormInterface,
  ContactFormError,
  FormValidator,
} from "../types";

const validateForm = (formValues: ContactFormInterface): FormValidator => {
  const errors: ContactFormError = {};

  if (!formValues.phone) {
    errors.phone = {
      error: true,
      errorText: "Телефон не указан",
    };
  }

  if (formValues.phone && formValues.phone.length < 11) {
    errors.phone = {
      error: true,
      errorText: "Неверный формат телефона",
    };
  }

  if (!formValues.acceptPrivacy) {
    errors.acceptPrivacy = {
      error: true,
      errorText: "Необходимо согласие",
    };
  }

  const hasErrors = Object.keys(errors).length > 0;

  return hasErrors ? { result: false, errors } : { result: true, errors: null };
};
export { validateForm };
