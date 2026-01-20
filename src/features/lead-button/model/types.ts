export interface ContactFormInterface {
    name: string;
    phone: string;
    acceptPrivacy: boolean;
  }
  
  export type ContactFormError = {
    [K in keyof ContactFormInterface]?: {
      error?: boolean;
      errorText?: string;
    };
  };
  
  export interface FormValidator {
    result: boolean;
    errors: ContactFormError | null;
  }
  