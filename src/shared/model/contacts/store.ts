import { useContacts } from "../../lib/useContacts";
import type { ContactsInterface } from "../../types/contacts";

export const useContactsStore = defineStore("contactsStore", () => {
  const contacts = ref<ContactsInterface | null>(null);
  const loaded = ref<boolean>(false);

  const getContacts = async () => {
    if (loaded.value) return false;
    const response = await useContacts();
    if (response && response.contacts) {
      contacts.value = response.contacts;
      loaded.value = true;
    }
  };

  return { contacts, loaded, getContacts };
});
