import type { Category } from "../category/model";

export interface Product {
  id: string;
  title: string;
  description: string;
  category: Category;
  highlights: string[];
  price: string;
  sizes: ProductSize[];
  images: string[];
}

export interface ProductInCart extends Product {
  quantity: number;
  selectedSize: string;
  totalPrice: number;
}

export interface ProductSize {
  value: string;
  inStock: boolean;
}

export interface ProductsPage {
  items: Product[] | null;
  total: number;
  page: number;
  pageSize?: number;
  error: string | null;
}
