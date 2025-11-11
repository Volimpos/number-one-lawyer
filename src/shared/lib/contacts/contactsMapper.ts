import type { ContactsInterface } from "../../types/contacts";

interface RawContact {
  key: string;
  value: string;
}

type ContactKey = keyof ContactsInterface;

const contactsMapper = (contactsArray: RawContact[]): ContactsInterface => {
  const initial: ContactsInterface = {
    phone: "",
    telegram: "",
    instagram: "",
    vk: "",
    whatsapp: "",
    inn: "",
    ip: "",
  };

  return contactsArray.reduce((acc, current) => {
    if (current.key in acc) {
      const key = current.key as ContactKey;
      acc[key] = current.value;
    }
    return acc;
  }, initial);
};

export { contactsMapper };
