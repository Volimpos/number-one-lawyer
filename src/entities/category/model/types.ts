export interface Category {
  label: string;
  link?: string;
  image?: string;
  value: CategoryValue;
}

export type CategoryValue = "rings" | "earrings" | "bracelets" | "necklace";
